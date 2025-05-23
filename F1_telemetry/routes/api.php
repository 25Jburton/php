<?php


use App\Http\Controllers\Api\DriverSessionController;
use App\Http\Controllers\Api\TeamSessionController;
use App\Http\Controllers\Api\CircuitsSessionController;
use App\Http\Controllers\Api\StandingsSessionController;
use App\Http\Controllers\Api\ResultsSessionController;
use Illuminate\Support\Facades\Route;

Route::middleware('guest')->group(function () {
	Route::get('/allDrivers/{limit}', [DriverSessionController::class, 'showAll'])
	->name('allDrivers');

	Route::get('/driversYear/{year}', [DriverSessionController::class, 'showByYear'])
	->name('driversYear');
	
	Route::get('/allTeams/{limit}', [TeamSessionController::class, 'showAll'])
	->name('allTeams');

	Route::get('/teamsYear/{year}/{limit}', [TeamSessionController::class, 'showByYear'])
	->name('teamsYear');

	Route::get('/allCircuits/{limit}', [CircuitsSessionController::class, 'showAll'])
	->name('allCircuits');   
});


Route::middleware('auth')->group(function () {
	// Drivers Data
		Route::get('/allDrivers/{limit}', [DriverSessionController::class, 'showAll'])
		->name('allDrivers');

		Route::get('/driversYear/{year}/{limit}', [DriverSessionController::class, 'showByYear'])
		->name('driversYear');

		Route::get('/getDriver/{query}', [DriverSessionController::class, 'showDriver'])
		->name('showDriver');

		Route::get('/getDriversNationalities', [DriverSessionController::class, 'getDriversNationalities'])
		->name('getDriversNationalities');
	// Teams Data
		Route::get('/allTeams/{limit}', [TeamSessionController::class, 'showAll'])
		->name('allTeams');

		Route::get('/teamsYear/{year}/{limit}', [TeamSessionController::class, 'showByYear'])
		->name('teamsYear');

		Route::get('/getTeam/{query}', [TeamSessionController::class, 'showTeam'])
		->name('showTeam');

		Route::get('/getTeamsNationalities', [TeamSessionController::class, 'getTeamsNationalities'])
		->name('getTeamsNationalities');
	// Circuits Data
		Route::get('/allCircuits/{limit}', [CircuitsSessionController::class, 'showAll'])
		->name('allCircuits');

		Route::get('/getCircuit/{query}', [CircuitsSessionController::class, 'showCircuit'])
		->name('getCircuit');

		Route::get('/getCircuitsCorners', [CircuitsSessionController::class, 'getCircuitsCorners'])
		->name('getCircuitsCorners');

		Route::get('/getAvgCircuitsCorners', [CircuitsSessionController::class, 'getAvgCircuitsCorners'])
		->name('getAvgCircuitsCorners');

		Route::get('/getCircuitsLength', [CircuitsSessionController::class, 'getCircuitsLength'])
		->name('getCircuitsLength');

		Route::get('/getAvgCircuitsLength', [CircuitsSessionController::class, 'getAvgCircuitsLength'])
		->name('getAvgCircuitsLength');


	// Standings Data
		Route::get('/standingsDrivers/{year}/{limit}', [StandingsSessionController::class, 'showAllDrivers'])
		->name('standingsDrivers');

		Route::get('/standingsConstructors/{year}/{limit}', [StandingsSessionController::class, 'showAllConstructors'])
		->name('standingsConstructors');

	// Results Data
		Route::get('/ResultsSession/{year}/', [ResultsSessionController::class, 'showAllRoundsWithCircuits'])
		->name('resultsAllCircuits');
		
		Route::get('/ResultsSession/{year}/{circuit}', [ResultsSessionController::class, 'showAllSessionsForCircuit'])
		->name('resultsAllSessions');

		Route::get('/ResultsSession/all/{year}/{circuit}', [ResultsSessionController::class, 'showAllSessions'])
		->name('resultsAllSessionsForCircuit');

		Route::get('/ResultsSession/{year}/{circuit}/{session}', [ResultsSessionController::class, 'showSessions'])
		->name('resultsSession');
});
