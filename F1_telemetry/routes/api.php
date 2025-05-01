<?php


use App\Http\Controllers\Api\DriverSessionController;
use App\Http\Controllers\Api\TeamSessionController;
use Illuminate\Support\Facades\Route;

Route::middleware('guest')->group(function () {
    Route::get('/allDrivers', [DriverSessionController::class, 'showAll'])
    ->name('allDrivers');

    Route::get('/driversYear/{year}', [DriverSessionController::class, 'showByYear'])
    ->name('driversYear');
});


Route::middleware('auth')->group(function () {
    // Testing dump to setup function calls
    Route::get('/allDrivers', [DriverSessionController::class, 'showAll'])
    ->name('allDrivers');

    Route::get('/driversYear/{year}/{limit}', [DriverSessionController::class, 'showByYear'])
    ->name('driversYear');

    Route::get('/allTeams', [TeamSessionController::class, 'showAll'])
    ->name('allTeams');

    Route::get('/teamsYear/{year}/{limit}', [TeamSessionController::class, 'showByYear'])
    ->name('teamsYear');
});
