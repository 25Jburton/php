<?php

namespace App\Http\Controllers\Api;
use App\Http\Requests\Api\RetrieveDrivers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class CircuitsSessionController extends RetrieveDrivers
{
	/**
	 * Return all circuits
	 */
	public function showAll(Request $request): Array
	{
        $limit = $request->route('limit');
		$response = Http::withUrlParameters([
			'endpoint' => 'https://f1api.dev/api/',
			'limit' => $limit,
			'section' => 'circuits'
		])->get('{+endpoint}{section}?limit={limit}');
		$response = json_decode($response);
		$response = json_decode(json_encode($response), true);
		return $response;
	}
	/**
	 * Return queried circuit
	 */

	public function showCircuit(Request $request): Array
	{
        $query = $request->route('query');
		$response = Http::withUrlParameters([
			'endpoint' => 'https://f1api.dev/api/',
			'query' => $query,
			'section' => 'circuits'
		])->get('{+endpoint}{section}/search?q={query}');
		$response = json_decode($response);
		$response = json_decode(json_encode($response), true);
		return $response;
	}

	/**
	 * Return breakdown of track corners count
	 */
	public function getCircuitsCorners(): Array
	{
		$response = Http::withUrlParameters([
			'endpoint' => 'https://f1api.dev/api/',
			'limit' => 1000,
			'section' => 'circuits'
		])->get('{+endpoint}{section}?limit={limit}');
		$response = json_decode($response);
		$response = json_decode(json_encode($response), true);

		$corners['corners'] = [];
		$corners['avg'] = 0;
		$avg = [];
		foreach($response['circuits'] as $circuit){
			if($circuit['numberOfCorners'] > 0){
				array_key_exists($circuit['numberOfCorners'], $corners['corners']) ? $corners['corners'][$circuit['numberOfCorners']] += 1 : $corners['corners'][$circuit['numberOfCorners']] = 1;
				array_push($avg, $circuit['numberOfCorners']);
			}
		}

		$average = array_sum($avg)/count($avg);
		$corners['avg'] = $average;

		return $corners;
	}


	/**
	 * Return breakdown of track lengths
	 */
	public function getCircuitsLength(): Array
	{
		$response = Http::withUrlParameters([
			'endpoint' => 'https://f1api.dev/api/',
			'limit' => 1000,
			'section' => 'circuits'
		])->get('{+endpoint}{section}?limit={limit}');
		$response = json_decode($response);
		$response = json_decode(json_encode($response), true);

		$length['circuits'] = [];
		$length['avg'] = 0;
		$avg = [];
		foreach($response['circuits'] as $circuit){
			if($circuit['numberOfCorners'] > 0){
				array_key_exists($circuit['circuitName'], $length['circuits']) ? $length['circuits'][$circuit['circuitName']] = $circuit['circuitLength']/ 1000 : $length['circuits'][$circuit['circuitName']] = ($circuit['circuitLength']/ 1000);
				array_push($avg, $circuit['circuitLength'] / 1000);	
			}
		}

		$average = array_sum($avg)/count($avg);
		$length['avg'] = $average;
		asort($length['circuits']);
		return $length;
	}
}