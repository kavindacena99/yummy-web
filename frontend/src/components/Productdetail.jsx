import React from "react";

function Productdetail() {
  return (
    <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-10">
      {/* Left: Product Images */}
      <div>
        <img
          src="https://www.dummyimg.in/placeholder?format=JPEG&size=600x400"
          alt="Main Product"
          className="rounded-lg border mb-4"
        />
      </div>

      {/* Right: Product Info */}
      <div>
        {/* Title */}
        <h1 className="text-3xl font-bold mb-2">
          Stainless Steel Top Light Speed Magic Spin Mop Bucket with 2 Microfiber Mop pads
        </h1>

        {/* Ratings */}
        <div className="flex items-center mb-3">
          <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
          <span className="ml-2 text-sm text-gray-500">11 Ratings</span>
        </div>

        {/* Price */}
        <div className="mb-3">
          <p className="text-2xl font-bold text-red-600">Rs. 2,999</p>
          <p className="text-gray-500 line-through">Rs. 4,500</p>
          <p className="text-green-600 font-semibold">-33%</p>
        </div>

        {/* Quantity */}
        <div className="flex items-center mb-5">
          <p className="font-semibold mr-4">Quantity</p>
          <button className="px-3 py-1 border">-</button>
          <span className="px-4">1</span>
          <button className="px-3 py-1 border">+</button>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4">
          <button className="flex-1 bg-orange-500 text-white font-semibold py-2 rounded hover:bg-orange-600">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Productdetail;