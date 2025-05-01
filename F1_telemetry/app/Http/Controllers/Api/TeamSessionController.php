<?php

namespace App\Http\Controllers\Api;
use App\Http\Requests\Api\RetrieveDrivers;
use Illuminate\Http\Client\Response;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class TeamSessionController extends RetrieveDrivers
{
	/**
	 * Handle initial load driver request.
	 */
	public function showAll(Request $request): Response
	{
        $limit = $request->route('limit');
		$response = Http::withUrlParameters([
			'endpoint' => 'https://f1api.dev/api/',
			'limit' => $limit,
			'section' => 'teams'
		])->get('{+endpoint}/{section}?limit={limit}');
		return $response;
	}

	/**
	 * Handle an incoming driver year request.
	 */
	public function showByYear(Request $request): Response
	{   
		$year = $request->route('year');
		$limit = $request->route('limit');

		$response = Http::withUrlParameters([
			'endpoint' => 'https://f1api.dev/api/',
			'limit' => $limit,
			'year' => $year,
			'section' => 'teams'
		])->get('{+endpoint}/{year}/{section}?limit={limit}');
		return $response;
	}

}
