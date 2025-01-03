<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return Inertia::render('Home', [
        'name' => 'John Doe',
    ]);
});

Route::get('/about', function () {
    return inertia('About/About');
});

// Route::inertia("/", "Home");
