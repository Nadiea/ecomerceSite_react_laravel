<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Category;
use Illuminate\Support\Facades\Storage;

class CategoryController extends Controller
{
    public function index()
    {
        return Category::all();
    }
    public function store(Request $request)
    {
        // Validate the request
        $request->validate([
            'name' => 'required|string|max:255',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);
    
        // Handle image upload
        $imagePath = $request->hasFile('image') ? $request->file('image')->store('images', 'public') : null;
    
        // Create a new category with the validated data
        $category = Category::create([
            'name' => $request->name,
            'image' => $imagePath,
        ]);
    
        // Return a JSON response with the category data and a 201 status code
        return response()->json($category, 201);
    }
    
    public function update(Request $request, $id)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);
    
        $category = Category::findOrFail($id);
        $category->name = $request->name;
    
        if ($request->hasFile('image')) {
            $imagePath = $request->file('image')->store('images', 'public');
    
            // Delete the old image if it exists
            if ($category->image) {
                Storage::disk('public')->delete($category->image);
            }
    
            $category->image = $imagePath;
        }
    
        $category->save();
    
        return response()->json($category);
    }

    public function show($id)
    {
        return Category::findOrFail($id);
    }
    

    public function destroy($id)
    {
        $category = Category::findOrFail($id);
        if ($category->image) {
            Storage::disk('public')->delete($category->image);
        }
        $category->delete();

        return response()->json(null, 204);
    }
}
