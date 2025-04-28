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
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
