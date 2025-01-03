<?php

use App\Http\Controllers\PostController;
use Illuminate\Support\Facades\Route;

Route::get('/', [PostController::class, 'index']);

Route::resource('posts', PostController::class)->except('index');


// Route::get('/about', function () {
//     return inertia('About/About');
// });

// Route::inertia("/", "Home");
