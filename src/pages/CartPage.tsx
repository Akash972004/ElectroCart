import { Link } from "react-router-dom";
import { Trash2, Plus, Minus } from "lucide-react";
import { useCart } from "../hooks/useCart";
import { useOrders } from "../hooks/useOrders";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { useToast } from "../hooks/use-toast";
import BackButton from "../components/BackButton";

const CartPage = () => {
  const {
    cartItems,
    removeFromCart,
    updateQuantity,
    getTotalPrice,
    clearCart,
  } = useCart();
  const { placeOrder } = useOrders();
  const { toast } = useToast();

  const handlePlaceOrder = () => {
    if (cartItems.length === 0) return;

    const orderId = placeOrder(cartItems);
    clearCart();

    toast({
      title: "Order Placed Successfully!",
      description: `Your order #${orderId} has been placed and is being processed.`,
    });
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-black pt-40 pb-16 transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <BackButton className="mb-8" />
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Your Cart is Empty
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            Add some amazing products to your cart to get started!
          </p>
          <Button asChild size="lg">
            <Link to="/">Continue Shopping</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black pt-32 pb-16 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <BackButton className="mb-4" />
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
          Shopping Cart
        </h1>

        <div className="space-y-4 mb-8">
          {cartItems.map((item) => (
            <Card
              key={item.id}
              className="border border-gray-200 dark:border-gray-700 dark:bg-black hover:shadow-md dark:hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] transition-all duration-300"
            >
              <CardContent className="p-4 sm:p-6">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <div className="flex items-center gap-4 w-full sm:w-auto">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-lg flex-shrink-0"
                    />
                    <div className="flex-1 sm:hidden">
                      <h3 className="font-semibold text-gray-900 dark:text-white line-clamp-1">
                        {item.name}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        ₹{item.price}
                      </p>
                    </div>
                  </div>

                  <div className="flex-1 hidden sm:block">
                    <h3 className="font-semibold text-gray-900 dark:text-white">
                      {item.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      ₹{item.price}
                    </p>
                  </div>

                  <div className="flex items-center justify-between w-full sm:w-auto gap-4 mt-2 sm:mt-0">
                    <div className="flex items-center space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                        className="h-8 w-8 p-0"
                      >
                        <Minus size={14} />
                      </Button>
                      <span className="w-8 text-center text-sm">
                        {item.quantity}
                      </span>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                        className="h-8 w-8 p-0"
                      >
                        <Plus size={14} />
                      </Button>
                    </div>

                    <div className="flex items-center gap-4 sm:gap-2">
                      <p className="font-semibold text-gray-900 dark:text-white">
                        ₹{item.price * item.quantity}
                      </p>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-600 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-900/20 h-8 w-8 p-0"
                      >
                        <Trash2 size={16} />
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-center mb-4">
              <span className="text-2xl font-bold text-gray-900 dark:text-white">
                Total:
              </span>
              <span className="text-2xl font-bold text-blue-600">
                ₹{getTotalPrice()}
              </span>
            </div>
            <div className="space-y-3">
              <Button
                className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                size="lg"
                onClick={handlePlaceOrder}
              >
                Place Order
              </Button>
              <Button asChild variant="outline" className="w-full">
                <Link to="/">Continue Shopping</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CartPage;
