<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PageController extends Controller
{
    /**
     * @return view Retorna a view Welcome
     */
    public function welcome()
    {
        return view('welcome');
    }
    
    /**
     * @return view Retornar a view Dashboard
     */
    public function dashboard()
    {
        return Inertia::render('Dashboard');
    }
}
