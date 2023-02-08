<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Http\Requests\V1\UserStoreRequest;
use App\Http\Requests\V1\UserUpdateRequest;
use App\Http\Resources\V1\UserResource;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return UserResource::collection(User::with('role')->get());
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(UserStoreRequest $request)
    {
        $user = new User();
        $user->role_id = $request->role_id;
        $user->full_name = $request->full_name;
        $user->email_address = $request->email_address;
        $user->password = Hash::make($request->password);
        $user->confirmed_password = Hash::make($request->confirmed_password);
        $user->save();
        return response()->json([
            "message" => "User stored"
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function show(User $user)
    {
        return new UserResource($user);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function edit(User $user)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function update(UserUpdateRequest $request, User $user)
    {
        $user->role_id = $request->role_id;
        $user->full_name = $request->full_name;
        $user->email_address = $request->email_address;
        $user->password = Hash::make($request->password);
        $user->confirmed_password = Hash::make($request->confirmed_password);
        $user->save();
        return response()->json(
            [
                'message' => 'User updated'
            ],
        );
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function destroy(User $user)
    {
        $user->delete();
        return response()->json(
            [
                'message' => 'User deleted'
            ],
        );
    }
    public function login(Request $request)
    {
        //Attempt to enter email+password 
        if (auth()->attempt(['email_address' => $request->email_address, 'password' => $request->password])) {
            // $user = auth()->user();
            $user = User::where('email_address', $request->email_address)->first();

            //Show the data of the user after successful login
            // return new UserResource($user);
            return response()->json([
                'full_name' => $user->full_name,
                'message' => 'Logged In Successfully',
                'token' => $user->createToken("API_TOKEN")->plainTextToken
            ]);
        } else {
            return response()->json(
                [
                    'message' => 'User not found'
                ]
            );
        }
    }
}
