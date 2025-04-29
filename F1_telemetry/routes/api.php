<?php


use App\Http\Controllers\Api\DriverSessionController;
use Illuminate\Support\Facades\Route;

Route::middleware('guest')->group(function () {
    Route::get('/allDrivers', [DriverSessionController::class, 'showAll'])
    ->name('allDrivers');
});


Route::middleware('auth')->group(function () {
    // Testing dump to setup function calls
    Route::get('/allDrivers', [DriverSessionController::class, 'showAll'])
    ->name('allDrivers');
});
