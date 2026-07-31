const Products = ({ product }) => {
  return (
    <div className="bg-white shadow-lg rounded-xl p-6 w-96 mx-auto mt-10">

      <h2 className="text-2xl font-bold text-blue-700 mb-4">
        Product Details
      </h2>

      <p>Product : {product.productName}</p>

      <p>Price : ₹{product.price}</p>

      <p>
        Stock : {product.stock ? "Available" : "Out of Stock"}
      </p>

    </div>
  );
};

export default Products;