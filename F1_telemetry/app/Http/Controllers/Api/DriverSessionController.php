<?php

namespace App\Http\Controllers\Api;
use App\Http\Requests\Api\RetrieveDrivers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class DriverSessionController extends RetrieveDrivers
{
	/**
	 * Handle initial load driver request.
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
	 * Handle an incoming driver year request.
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

}
