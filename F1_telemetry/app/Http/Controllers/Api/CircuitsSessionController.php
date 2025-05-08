<?php

namespace App\Http\Controllers\Api;
use App\Http\Requests\Api\RetrieveDrivers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class CircuitsSessionController extends RetrieveDrivers
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
			'section' => 'circuits'
		])->get('{+endpoint}{section}?limit={limit}');
		$response = json_decode($response);
		$response = json_decode(json_encode($response), true);
		return $response;
	}

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
}