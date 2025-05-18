<?php

namespace App\Http\Controllers\Api;
use App\Http\Requests\Api\RetrieveDrivers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class TeamSessionController extends RetrieveDrivers
{
	/**
	 * Handle initial load team request.
	 */
	public function showAll(Request $request): Array
	{
        $limit = $request->route('limit');
		$response = Http::withUrlParameters([
			'endpoint' => 'https://f1api.dev/api/',
			'limit' => $limit,
			'section' => 'teams'
		])->get('{+endpoint}/{section}?limit={limit}');
		$response = json_decode($response);
		$response = json_decode(json_encode($response), true);
		return $response;
	}

	/**
	 * Handle an incoming team year request.
	 */
	public function showByYear(Request $request): Array
	{   
		$year = $request->route('year');
		$limit = $request->route('limit');

		$response = Http::withUrlParameters([
			'endpoint' => 'https://f1api.dev/api/',
			'limit' => $limit,
			'year' => $year,
			'section' => 'teams'
		])->get('{+endpoint}/{year}/{section}?limit={limit}');
		$response = json_decode($response);
		$response = json_decode(json_encode($response), true);
		return $response;
	}

		/**
	 * Handle an incoming team query request.
	 */
	public function showTeam(Request $request): Array
	{   
		$query = $request->route('query');

		$response = Http::withUrlParameters([
			'endpoint' => 'https://f1api.dev/api/',
			'query' => $query,
			'section' => 'teams'
		])->get('{+endpoint}/{section}/search?q={query}');
		$response = json_decode($response);
		$response = json_decode(json_encode($response), true);
		return $response;
	}

	public function getTeamsNationalities(): Array
	{  
		$response = Http::withUrlParameters([
			'endpoint' => 'https://f1api.dev/api/',
			'limit' => 1000,
			'section' => 'teams'
		])->get('{+endpoint}/{section}?limit={limit}');
		$response = json_decode($response);
		$response = json_decode(json_encode($response), true);
		$nationalityArray = [];
		$allNationalitiesArray = [];
		foreach($response['teams'] as $driver){
			$nationalityArray[$driver['teamNationality']] = 0;
			array_push($allNationalitiesArray, $driver['teamNationality']);
		}
		foreach($allNationalitiesArray as $nationality){
			$nationalityArray[$nationality] += 1;
		}

		asort($nationalityArray);
		return $nationalityArray;
	}

}
