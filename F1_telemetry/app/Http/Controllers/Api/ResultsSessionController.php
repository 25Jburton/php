<?php

namespace App\Http\Controllers\Api;
use App\Http\Requests\Api\RetrieveDrivers;
use Illuminate\Http\Client\Response;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class ResultsSessionController extends RetrieveDrivers
{
	// Return the corresponding rd and circuit for drop down selections
	public function showAllRoundsWithCircuits(Request $request): Array
	{
		$year = $request->route('year');
		$mainResponse = [];
		// Check the sessions run at the given circuit & year
		$sessions = Http::withUrlParameters([
			'endpoint' => 'https://f1api.dev/api/',
			'year' => $year
		])->get('{+endpoint}/{year}');
		$sessions = json_decode($sessions);
		foreach($sessions as $key=>$session){
			if($key == 'races'){
				$session = json_decode(json_encode($session), true);
				foreach($session as $key=>$race){
					$mainResponse[$race['round']] = $race['circuit']['circuitName'];
				}
			}
		}
		return $mainResponse;
	}
	// Return the corresponding sessions for drop down selections
	public function showAllSessionsForCircuit(Request $request): Array
	{
		$year = $request->route('year');
		$circuit = $request->route('circuit');
		$mainResponse = [];
		// Check the sessions run at the given circuit & year
		$sessions = Http::withUrlParameters([
			'endpoint' => 'https://f1api.dev/api/',
			'year' => $year,
			'circuit' => $circuit
		])->get('{+endpoint}/{year}/{circuit}');
		$sessions = json_decode($sessions);
		foreach($sessions as $key=>$session){
			if($key == 'race'){
				$session = json_decode(json_encode($session), true);
				foreach($session as $key=>$race){
					$mainResponse[$race['raceName']] = $race['schedule'];
				}
			}
		}
		return $mainResponse;
	}


	/**
	 * For loading all the data linked to a giving circuit(rd)
	 * Sessions: 
	 *  Regular weekend - fp1, fp2, fp3, qualy, race
	 *  Sprint weekend - fp1, sprint/qualy, spint/race, qualy, race
	 */
	public function showAllSessions(Request $request): Array
	{
		$year = $request->route('year');
		$circuit = $request->route('circuit');
		$mainResponse = [];
		// Check the sessions run at the given circuit & year
		$sessions = Http::withUrlParameters([
			'endpoint' => 'https://f1api.dev/api/',
			'year' => $year,
			'circuit' => $circuit
		])->get('{+endpoint}/{year}/{circuit}/');
		$sessions = json_decode($sessions);
		$sessions = json_decode(json_encode($sessions), true);

		$response = Http::withUrlParameters([
			'endpoint' => 'https://f1api.dev/api/',
			'year' => $year,
			'circuit' => $circuit
		])->get('{+endpoint}/{year}/{circuit}/fp1');
		$response = json_decode($response);
		$response = json_decode(json_encode($response), true);
		array_push($mainResponse, $response);
		// Determine if the weekend is a sprint or regular format
		foreach($sessions as $key=>$session){
			if($key == 'races'){
				$session = json_decode(json_encode($session), true);
				if($sessions['races']['schedule']['fp2']['date'] == null){
					$response = Http::withUrlParameters([
						'endpoint' => 'https://f1api.dev/api/',
						'year' => $year,
						'circuit' => $circuit,
					])->get('{+endpoint}/{year}/{circuit}/sprint/qualy');
					$response = json_decode($response);
					$response = json_decode(json_encode($response), true);
					array_push($mainResponse, $response['races']['sprintQualyResults']);

					$response = Http::withUrlParameters([
						'endpoint' => 'https://f1api.dev/api/',
						'year' => $year,
						'circuit' => $circuit
					])->get('{+endpoint}/{year}/{circuit}/sprint/race');
					$response = json_decode($response);
					$response = json_decode(json_encode($response), true);
					array_push($mainResponse, $response['races']['sprintResults']);

				}else{
					$response = Http::withUrlParameters([
						'endpoint' => 'https://f1api.dev/api/',
						'year' => $year,
						'circuit' => $circuit,
					])->get('{+endpoint}/{year}/{circuit}/fp2');
					$response = json_decode($response);
					$response = json_decode(json_encode($response), true);
					array_push($mainResponse, $response['races']['fp2Results']);

					$response = Http::withUrlParameters([
						'endpoint' => 'https://f1api.dev/api/',
						'year' => $year,
						'circuit' => $circuit
					])->get('{+endpoint}/{year}/{circuit}/fp3');
					$response = json_decode($response);
					$response = json_decode(json_encode($response), true);
					array_push($mainResponse, $response['races']['fp3Results']);
				}
			}
		}
			$response = Http::withUrlParameters([
				'endpoint' => 'https://f1api.dev/api/',
				'year' => $year,
				'circuit' => $circuit,
			])->get('{+endpoint}/{year}/{circuit}/qualy');
			$response = json_decode($response);
			$response = json_decode(json_encode($response), true);
			array_push($mainResponse, $response['races']['qualyResults']);

			$response = Http::withUrlParameters([
				'endpoint' => 'https://f1api.dev/api/',
				'year' => $year,
				'circuit' => $circuit,
			])->get('{+endpoint}/{year}/{circuit}/race');
			$response = json_decode($response);
			$response = json_decode(json_encode($response), true);
			array_push($mainResponse, $response['races']['results']);

		return $mainResponse;
	}

	/**
	 * For loading all the data linked to a giving circuit(rd) session
	 * - Example: Return only qualifying results for rd 1 of a given year
	 */
	public function showSession(Request $request): Array
	{
		$year = $request->route('year');
		$circuit = $request->route('circuit');
		$session = $request->route('session');
		$response = Http::withUrlParameters([
			'endpoint' => 'https://f1api.dev/api/',
			'year' => $year,
			'circuit' => $circuit,
			'session' => $session 
		])->get('{+endpoint}/{year}/{circuit}/{session}');
		$response = json_decode($response);
		$response = json_decode(json_encode($response), true);
		return $response;
	}
}