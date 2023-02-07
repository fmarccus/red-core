<?php

namespace App\Http\Resources\V1;

use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            "id" => $this->id,
            "full_name" => $this->full_name,
            "email_address" => $this->email_address,
            "role_id" => $this->role->id ?? "No role id assigned",
            "role_name" => $this->role->role_name ?? "Data not available",
            "role_description" => $this->role->description ?? "Data not available",




        ];
    }
}
