<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Voucher;

class VoucherController extends Controller
{
    /**
     * Display a listing of the vouchers.
     */
    public function index()
    {
        $vouchers = Voucher::all();
        return response()->json($vouchers);
    }

    /**
     * Store a newly created voucher in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'code' => 'required|string|unique:vouchers,code',
            'discount_amount' => 'required|numeric',
            'expiry_date' => 'required|date',
            'is_active' => 'required|boolean',
        ]);

        $voucher = Voucher::create($request->all());
        return response()->json($voucher, 201);
    }

    /**
     * Display the specified voucher.
     */
    public function show($id)
    {
        $voucher = Voucher::findOrFail($id);
        return response()->json($voucher);
    }

    /**
     * Update the specified voucher in storage.
     */
    public function update(Request $request, $id)
    {
        $request->validate([
            'code' => 'sometimes|required|string|unique:vouchers,code,' . $id,
            'discount_amount' => 'sometimes|required|numeric',
            'expiry_date' => 'sometimes|required|date',
            'is_active' => 'sometimes|required|boolean',
        ]);

        $voucher = Voucher::findOrFail($id);
        $voucher->update($request->all());
        return response()->json($voucher);
    }

    /**
     * Remove the specified voucher from storage.
     */
    public function destroy($id)
    {
        $voucher = Voucher::findOrFail($id);
        $voucher->delete();
        return response()->json(null, 204);
    }
}
