<?php

namespace App\Http\Requests\Api;
use Illuminate\Support\Facades\Http;
use Illuminate\Http\Client\Response;

class RetrieveDrivers
{
    /**
     * Attempt to get all drivers
     */
    public function getAllDrivers($limit): Response
    {
        $response = Http::withUrlParameters([
            'endpoint' => 'https://f1api.dev/api/',
            'limit' => $limit,
            'section' => 'drivers'
        ])->get('{+endpoint}/{section}?limit={limit}');
        return $response;
    }

     /**
     * Attempt to get all drivers
     */
    public function getDriversByYear($year, $limit): Response
    {
        $response = Http::withUrlParameters([
            'endpoint' => 'https://f1api.dev/api/',
            'limit' => $limit,
            'year' => $year,
            'section' => 'drivers'
        ])->get('{+endpoint}/{year}/{section}?limit={limit}');

        return $response;
    }
}
