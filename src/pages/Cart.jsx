import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Cart() {
  const {
    cartItems,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    cartTotal,
  } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-4">
          Your Cart is Empty
        </h1>

        <p className="text-gray-500 mb-6">
          You haven't added any products yet.
        </p>

        <Link
          to="/products"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="px-8 py-10">
      <h1 className="text-3xl font-bold mb-8">
        Shopping Cart
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

      
        <div className="lg:col-span-2 space-y-4">

          {cartItems.map((item) => (
            <div
              key={item.id}
              className="border rounded-lg p-5 flex items-center gap-6 shadow-sm"
            >
            
              <img
                src={item.image}
                alt={item.title}
                className="w-24 h-24 object-contain"
              />

          
              <div className="flex-1">
                <h2 className="font-semibold text-lg">
                  {item.title}
                </h2>

                <p className="text-blue-600 font-bold mt-2">
                  ${item.price}
                </p>

               
                <div className="flex items-center gap-3 mt-4">
                  <button
                    onClick={() => decreaseQuantity(item.id)}
                    className="w-8 h-8 border rounded"
                  >
                    -
                  </button>

                  <span className="font-semibold">
                    {item.quantity}
                  </span>

                  <button
                    onClick={() => increaseQuantity(item.id)}
                    className="w-8 h-8 border rounded"
                  >
                    +
                  </button>
                </div>
              </div>

         
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 hover:text-red-700"
              >
                Remove
              </button>
            </div>
          ))}

        </div>

      
        <div className="border rounded-lg p-6 h-fit shadow-sm">
          <h2 className="text-xl font-bold mb-6">
            Order Summary
          </h2>

          <div className="flex justify-between mb-4">
            <span>Subtotal</span>

            <span className="font-semibold">
              ${cartTotal.toFixed(2)}
            </span>
          </div>

          <div className="flex justify-between mb-4">
            <span>Shipping</span>

            <span className="text-green-600">
              Free
            </span>
          </div>

          <hr className="mb-4" />

          <div className="flex justify-between text-xl font-bold mb-6">
            <span>Total</span>

            <span>
              ${cartTotal.toFixed(2)}
            </span>
          </div>

          <Link
            to="/checkout"
            className="block text-center bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
          >
            Proceed to Checkout
          </Link>
        </div>

      </div>
    </div>
  );
}

export default Cart;