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

		$corners = [];
		foreach($response['circuits'] as $circuit){
			if($circuit['numberOfCorners'] > 0){
				array_key_exists($circuit['numberOfCorners'], $corners) ? $corners[$circuit['numberOfCorners']] += 1 : $corners[$circuit['numberOfCorners']] = 1;
			}
		}

		return $corners;
	}

	/**
	 * Return breakdown of track avg corners count
	 */
	public function getAvgCircuitsCorners(): float
	{
		$response = Http::withUrlParameters([
			'endpoint' => 'https://f1api.dev/api/',
			'limit' => 1000,
			'section' => 'circuits'
		])->get('{+endpoint}{section}?limit={limit}');
		$response = json_decode($response);
		$response = json_decode(json_encode($response), true);

		$avg = [];
		foreach($response['circuits'] as $circuit){
			if($circuit['numberOfCorners'] > 0){
				array_push($avg, $circuit['numberOfCorners']);	
			}
		}
	
		$average = array_sum($avg)/count($avg);
		
		return $average;
	}
}