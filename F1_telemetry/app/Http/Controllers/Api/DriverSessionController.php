<?php

namespace App\Http\Controllers\Api;
use App\Http\Requests\Api\RetrieveDrivers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class DriverSessionController extends RetrieveDrivers
{
	/**
	 * Return all drivers
	 */
	public function showAll(Request $request): Array
	{   
		$limit = $request->route('limit');
		$response = Http::withUrlParameters([
			'endpoint' => 'https://f1api.dev/api/',
			'limit' => $limit,
			'section' => 'drivers'
		])->get('{+endpoint}/{section}?limit={limit}');
		$response = json_decode($response);
		$response = json_decode(json_encode($response), true);
		return $response;
	}

	/**
	 * Return all drivers from a given year
	 */
	public function showByYear(Request $request): Array
	{   
		$year = $request->route('year');
		$limit = $request->route('limit');

		$response = Http::withUrlParameters([
			'endpoint' => 'https://f1api.dev/api/',
			'limit' => $limit,
			'year' => $year,
			'section' => 'drivers'
		])->get('{+endpoint}/{year}/{section}?limit={limit}');
		$response = json_decode($response);
		$response = json_decode(json_encode($response), true);
		return $response;
	}

	/**
	 * Return all drivers matching query
	 */
	public function showDriver(Request $request): Array
	{   
		$query = $request->route('query');

		$response = Http::withUrlParameters([
			'endpoint' => 'https://f1api.dev/api/',
			'query' => $query,
			'section' => 'drivers'
		])->get('{+endpoint}/{section}/search?q={query}');
		$response = json_decode($response);
		$response = json_decode(json_encode($response), true);
		return $response;
	}

	/**
	 * Return a breakdown of all drivers nationalities
	 */
	public function getDriversNationalities(): Array
	{   
		$response = Http::withUrlParameters([
			'endpoint' => 'https://f1api.dev/api/',
			'limit' => 1000,
			'section' => 'drivers'
		])->get('{+endpoint}/{section}?limit={limit}');
		$response = json_decode($response);
		$response = json_decode(json_encode($response), true);
		$nationalityArray = [];
		$allNationalitiesArray = [];
		foreach($response['drivers'] as $driver){
			$nationalityArray[$driver['nationality']] = 0;
			array_push($allNationalitiesArray, $driver['nationality']);
		}
		foreach($allNationalitiesArray as $nationality){
			$nationalityArray[$nationality] += 1;
		}
		asort($nationalityArray);
		return $nationalityArray;
	}

}
