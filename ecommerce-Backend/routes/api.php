<?php
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;

use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\VoucherController;




Route::post('/auth/register',[UserController::class,'register']);
Route::post('/auth/login',[UserController::class,'login']);




//category routes
Route::get('/categories',[CategoryController::class,'index']);
Route::get('/categories/{id}',[CategoryController::class,'show']);
Route::post('/addcategories',[CategoryController::class,'store']);
Route::get('/categories',[CategoryController::class,'index']);
Route::put('/categories/{id}',[CategoryController::class,'update']);
Route::delete('/categories/{id}',[CategoryController::class,'destroy']);


//product routes
Route::get('/products',[ProductController::class,'index']);
Route::get('/products/{id}',[ProductController::class,'show']);
Route::post('/addproducts',[ProductController::class,'store']);
Route::put('/products/{id}',[ProductController::class,'update']);
Route::delete('/products/{id}',[ProductController::class,'destroy']);
//product by categoryid
Route::get('/product/category/{id}',[ProductController::class,'showByCategory']);




// Voucher routes
Route::get('/vouchers', [VoucherController::class, 'index']);
Route::post('/vouchers', [VoucherController::class, 'store']);
Route::get('/vouchers/{id}', [VoucherController::class, 'show']);
Route::put('/vouchers/{id}', [VoucherController::class, 'update']);
Route::delete('/vouchers/{id}', [VoucherController::class, 'destroy']);

// my orderlist

Route::get('/myorders',[OrderController::class,'myOrderList']);


 //orderlist by user_id
Route::get('/orderlist/{user_id}',[OrderController::class,'orderListByUserId']);








Route::middleware(['auth:sanctum', 'user-access:buyer'])->group(function(){

    Route::post('/buyer/logout',[UserController::class,'logout']);
    // Order routes
Route::post('/order', [OrderController::class, 'placeOrder']);
   
 
    
});


Route::middleware(['auth:sanctum', 'user-access:admin'])->group(function(){
   
    Route::post('/admin/logout',[UserController::class,'logout']);
   
   
    
    

});