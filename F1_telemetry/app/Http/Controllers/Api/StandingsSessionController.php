<?php

namespace App\Http\Controllers\Api;
use App\Http\Requests\Api\RetrieveDrivers;
use Illuminate\Http\Client\Response;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class StandingsSessionController extends RetrieveDrivers
{
	/**
	 * Handle initial load driver request.
	 */
	public function showAllDrivers(Request $request): Response
	{
        $year = $request->route('year');
		$limit = $request->route('limit');

		$response = Http::withUrlParameters([
			'endpoint' => 'https://f1api.dev/api/',
			'limit' => $limit,
            'year' => $year,
			'section' => 'drivers-championship'
		])->get('{+endpoint}/{year}/{section}?limit={limit}');
		return $response;
	}

    public function showAllConstructors(Request $request): Response
	{
        $year = $request->route('year');
		$limit = $request->route('limit');

		$response = Http::withUrlParameters([
			'endpoint' => 'https://f1api.dev/api/',
			'limit' => $limit,
            'year' => $year,
			'section' => 'constructors-championship'
		])->get('{+endpoint}/{year}/{section}?limit={limit}');
		return $response;
	}
}