<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Order;
use App\Models\Product;
use App\Models\Voucher;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;

class OrderController extends Controller
{
    /**
     * Place a new order.
     */
    public function placeOrder(Request $request)
    {
        $request->validate([
            'product_id' => 'required|exists:products,id',
            'quantity' => 'required|numeric|min:1',
            'address' => 'required|string',
            'phone' => 'required|string',
            'voucher_code' => 'nullable|string|exists:vouchers,code',
        ]);

        $userId = Auth::id();
        Log::info('Authenticated user ID: ' . $userId);

        if (!$userId) {
            return response()->json(['message' => 'User not authenticated'], 403);
        }

        $product = Product::findOrFail($request->product_id);
        $total = $product->price * $request->quantity;
        $discount = 0;
        $voucherId = null;

        if ($request->filled('voucher_code')) {
            $voucher = Voucher::where('code', $request->voucher_code)
                ->where('is_active', true)
                ->where('expiry_date', '>=', now())
                ->first();

            if ($voucher) {
                $discount = $voucher->discount_amount;
                $total -= $discount;
                $voucherId = $voucher->id;
            } else {
                return response()->json(['message' => 'Invalid or expired voucher code.'], 400);
            }
        }

        $order = Order::create([
            'product_id' => $product->id,
            'user_id' => $userId, // Set the authenticated user's ID
            'quantity' => $request->quantity,
            'total' => $total,
            'discount' => $discount,
            'voucher_id' => $voucherId,
            'name' => $request->name,
            'address' => $request->address,
            'phone' => $request->phone,
        ]);

        return response()->json($order, 201);
    }
}
