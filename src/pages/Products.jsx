import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }

        return response.json();
      })
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p className="text-center mt-10">Loading products...</p>;
  }

  if (error) {
    return (
      <p className="text-center mt-10 text-red-500">
        {error}
      </p>
    );
  }

  return (
    <div className="px-8 py-10">
      <h1 className="text-3xl font-bold text-center mb-8">
        Our Products
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
     {products.map((product) => (
  <div
    key={product.id}
    className="border rounded-lg p-5 shadow-sm"
  >
    <img
      src={product.image}
      alt={product.title}
      className="w-full h-48 object-contain"
    />

    <h2 className="font-semibold mt-4 line-clamp-2">
      {product.title}
    </h2>

    <p className="text-blue-600 font-bold mt-2">
      ${product.price}
    </p>

    <button
      onClick={() => addToCart(product)}
      className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
    >
      Add to Cart
    </button>
  </div>
))}
      </div>
    </div>
  );
}

export default Products;