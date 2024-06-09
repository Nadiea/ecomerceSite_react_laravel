<?php

namespace App\Http\Controllers;
use App\Models\User;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\validate;
use Illuminate\Support\Facades\Hash;

use Illuminate\Http\Request;

class UserController extends Controller
{
  public function register(Request $request) {
    // Validate the request
    $request->validate([
        'name' => 'required|string|max:255',
        'email' => 'required|string|email|max:255|unique:users',
      
        'type' => 'required|integer',  // Adjust this according to your user types
    ]);

    // Create the user
    $user = User::create([
        'name' => $request->name,
        'email' => $request->email,
        'password' => Hash::make($request->password),
        'type' => $request->type,
    ]);

    // Generate the token
    $token = $user->createToken('mytoken')->plainTextToken;

    // Return the response
    return response()->json(['user' => $user, 'token' => $token, 'type' => $request->type]);
}

  public function logout(){
    auth()->user()->tokens()->delete();
    return response(['message'=> 'logout successfully']);
}

   public function login(Request $request)
   {
      
       $user = User::where('email', $request->email)->first();

       if (!$user || !Hash::check($request->password, $user->password)) {
           return response([
               'message' => 'These credentials do not match our records.'
           ], 401);
       }



       $token = $user->createToken('mytoken')->plainTextToken;

       return response(['user' => $user, 'token' => $token ]);
   }

}




