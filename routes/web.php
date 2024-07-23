<?php

use App\Http\Controllers\MarkerController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    // -4.00765718703163, 122.52076533875007
    $data = [
        'lat' => -4.00765718703163,
        'lng' => 122.52076533875007
    ];
    return view('welcome', compact('data'));
});

Route::get('/peta-wisata', [MarkerController::class, 'index'])->name('marker.index');
