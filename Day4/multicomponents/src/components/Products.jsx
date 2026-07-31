import hoodie from "../assets/hoodie.png";
import tshirt from "../assets/tshirts.png";
import sunglass from "../assets/sunglass.png";
import bag from "../assets/bags.png";

import ProductCard from "./ProductCard";

const products = [
  {
    id: 1,
    image: hoodie,
    title: "Beach Hoodie",
    price: 1499,
  },
  {
    id: 2,
    image: tshirt,
    title: "Premium T-Shirt",
    price: 999,
  },
  {
    id: 3,
    image: sunglass,
    title: "Ocean Glass",
    price: 799,
  },
  {
    id: 4,
    image: bag,
    title: "Travel Bag",
    price: 1299,
  },
   
];

export const Products = () => {
  return (
    <section className="p-10 bg-gray-100">
      <h2 className="text-4xl font-bold text-center mb-10">
        Our Collection
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            image={product.image}
            title={product.title}
            price={product.price}
          />
        ))}
      </div>
    </section>
  );
};