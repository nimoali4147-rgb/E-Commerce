import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }

        return response.json();
      })
      .then((data) => {
        setProducts(data.slice(0, 8));
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading products...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <section className="bg-blue-50 text-center py-20">
        <h1 className="text-5xl font-bold mb-4">
          Welcome to Nova Mart
        </h1>

        <p className="text-gray-600 mb-6">
          Find quality products at affordable prices.
        </p>

        <Link
          to="/products"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg"
        >
          Shop Now
        </Link>
      </section>

      <section className="px-8 py-12">
        <h2 className="text-3xl font-bold text-center mb-8">
          Featured Products
        </h2>

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

              <h3 className="font-semibold mt-4">
                {product.title}
              </h3>

              <p className="text-blue-600 font-bold mt-2">
                ${product.price}
              </p>

              <Link
                to="/products"
                className="block text-center bg-blue-600 text-white py-2 rounded-lg mt-4"
              >
                View Products
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;