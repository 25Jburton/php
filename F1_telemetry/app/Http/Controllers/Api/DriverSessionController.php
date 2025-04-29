<?php

namespace App\Http\Controllers\Api;
use Inertia\Inertia;
use App\Http\Requests\Api\RetrieveDrivers;
use Illuminate\Http\Client\Response;

class DriverSessionController extends RetrieveDrivers
{
    /**
     * Handle initial load driver request.
     */
    public function showAll(RetrieveDrivers $request, $limit = 900): Response
    {   
        $response =  $request->getAllDrivers($limit);
        return $response;
    }

    /**
     * Handle an incoming driver year request.
     */
    public function showByYear(RetrieveDrivers $request, $year = 2025 , $limit = 900): Response
    {   

        $response =  $request->getDriversByYear($year , $limit);
        return $response;
    }

}
