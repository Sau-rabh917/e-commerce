import React, { useState } from "react";

const ProductFlipCard = ({ product, onAddToCart, onAddToWishlist }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="relative w-full max-w-xs mx-auto min-h-[340px]"
      style={{ perspective: 1000 }}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
    >
      <div
        className="w-full h-full transition-transform duration-500"
        style={{
          transformStyle: 'preserve-3d',
          transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
        }}
      >
        {/* Front Side */}
        <div
          className="absolute w-full h-full flex flex-col items-center bg-white rounded-2xl shadow p-4"
          style={{ backfaceVisibility: 'hidden', zIndex: 2 }}
        >
          <img src={product.img} alt={product.name} className="w-40 h-40 object-cover rounded-xl mb-4 transition-transform duration-300 hover:scale-110" />
          <div className="font-semibold text-lg mb-2 text-center">{product.name}</div>
          <div className="text-emerald-600 font-bold mb-2 text-lg">${product.price}</div>
        </div>
        {/* Back Side */}
        <div
          className="absolute w-full h-full flex flex-col items-center bg-emerald-50 rounded-2xl shadow p-4"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)', zIndex: 3 }}
        >
          <div className="font-semibold text-lg mb-2 text-center">{product.name}</div>
          <div className="text-emerald-600 font-bold mb-2 text-lg">${product.price}</div>
          <div className="text-gray-700 text-center mb-4">{product.desc}</div>
          <button className="mt-auto bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2 rounded text-base font-semibold mb-2" onClick={() => onAddToCart(product)}>Add to Cart</button>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded text-base font-semibold" onClick={() => onAddToWishlist(product)}>Add to Wishlist</button>
        </div>
      </div>
    </div>
  );
};

export default ProductFlipCard; 