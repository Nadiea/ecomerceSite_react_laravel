<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $products = Product::all();
        return response()->json($products);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'required|string',
            'price' => 'required|numeric',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);

        $imagePath = $request->hasFile('image') ? $request->file('image')->store('images', 'public') : null;
        $product = Product::create([
            'name' => $request->name,
            'description' => $request->description,
            'image' => $imagePath,
            'price' => $request->price,
            'category_id' => $request->category_id,
            'is_active' => $request->is_active,
            'discount' => $request->discount,
        ]);
        //i want in response i need cateory name also
        $product->load('category');
        
        
      return response()->json(['product'=>$product , 'category'=>$product->category->name]);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
return Product::findOrFail($id);
        

    }
    //product by categoryid
    public function showByCategory(string $id)
    {
        return Product::where('category_id', $id)->get();
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        return Product::findOrFail($id);

    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'required|string',
            'price' => 'required|numeric',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);

        $product = Product::findOrFail($id);
        $product->name = $request->name;
        $product->description = $request->description;
        $product->price = $request->price;
        $product->category_id = $request->category_id;
        $product->is_active = $request->is_active;
        $product->discount = $request->discount;

        if ($request->hasFile('image')) {
            $imagePath = $request->file('image')->store('images', 'public');
            if ($product->image) {
                Storage::disk('public')->delete($product->image);
            }
            $product->image = $imagePath;
        }

        $product->save();
        return response()->json($product);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $product = Product::findOrFail($id);
        if ($product->image) {
            Storage::disk('public')->delete($product->image);
        }
        $product->delete();
        return response()->json(null, 204);
    }
}


     

