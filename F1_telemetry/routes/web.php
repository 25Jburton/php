<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
	return Inertia::render('welcome');
})->name('home');
// , 'verified'
Route::middleware(['auth'])->group(function () {
	Route::get('dashboard', function () {
		return Inertia::render('dashboard');
	})->name('dashboard');

	Route::get('results', function () {
		return Inertia::render('results');
	})->name('results');

	Route::get('standings', function () {
		return Inertia::render('standings');
	})->name('standings');

	Route::get('circuits', function () {
		return Inertia::render('circuits');
	})->name('circuits');

	Route::get('drivers', function () {
		return Inertia::render('drivers');
	})->name('drivers');

	Route::get('teams', function () {
		return Inertia::render('teams');
	})->name('teams');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
require __DIR__.'/api.php';