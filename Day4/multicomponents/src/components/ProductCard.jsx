const ProductCard = ({ image, title, price }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition duration-300">
      <img
        src={image}
        alt={title}
        className="w-full h-72 object-cover"
      />

      <div className="p-4">
        <h2 className="text-xl font-bold">
          {title}
        </h2>

        <p className="text-sky-600 text-lg font-semibold mt-2">
          ₹ {price}
        </p>

     <button className="mt-4 w-full bg-[#0F4C81] hover:bg-[#0A3A63] text-white py-2 rounded-lg transition duration-300">
  Add to Cart
</button>
      </div>
    </div>
  );
};

export default ProductCard;  