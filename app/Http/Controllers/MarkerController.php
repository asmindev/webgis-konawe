<?php

namespace App\Http\Controllers;

use App\Models\Marker;
use Illuminate\Http\Request;

class MarkerController extends Controller
{
    //
    public function index()
    {
        $markers = Marker::all();
        return view('geojson.index', compact('markers'));
    }
}
