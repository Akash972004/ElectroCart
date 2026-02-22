import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Heart, ShoppingCart, Trash2 } from "lucide-react";
import { Product } from "../types/product";
import { products } from "../data/products";
import { useCart } from "../hooks/useCart";
import { toast } from "sonner";
import BackButton from "../components/BackButton";

const WishlistPage = () => {
  const [wishlist, setWishlist] = useState<Product[]>([]);
  const { addToCart } = useCart();

  const loadWishlist = () => {
    const savedWishlist = localStorage.getItem("electroWishlist");
    if (savedWishlist) {
      const wishlistIds = JSON.parse(savedWishlist);
      const wishlistProducts = products.filter((p) =>
        wishlistIds.includes(p.id),
      );
      setWishlist(wishlistProducts);
    } else {
      setWishlist([]);
    }
  };

  useEffect(() => {
    loadWishlist();

    // Listen for storage changes
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === "electroWishlist") {
        loadWishlist();
      }
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const removeFromWishlist = (productId: string) => {
    const savedWishlist = localStorage.getItem("electroWishlist");
    if (savedWishlist) {
      const wishlistIds = JSON.parse(savedWishlist);
      const updatedIds = wishlistIds.filter((id: string) => id !== productId);
      localStorage.setItem("electroWishlist", JSON.stringify(updatedIds));
      setWishlist(products.filter((p) => updatedIds.includes(p.id)));
      toast.success("Removed from wishlist");
    }
  };

  const handleAddToCart = (product: Product) => {
    addToCart(product);
    toast.success("Added to cart!");
  };

  const handleAddAllToCart = () => {
    wishlist.forEach((product) => addToCart(product));
    toast.success(`Added ${wishlist.length} items to cart!`);
  };

  return (
    <div className="min-h-screen bg-gray-50/50 dark:bg-black pt-24 sm:pt-32 pb-16 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <BackButton className="mb-6" />

        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
              <Heart className="text-red-500 fill-red-500" />
              My Wishlist
            </h1>
            <p className="text-gray-500 dark:text-gray-400 mt-2">
              {wishlist.length} {wishlist.length === 1 ? "item" : "items"} saved
            </p>
          </div>

          {wishlist.length > 0 && (
            <Button
              onClick={handleAddAllToCart}
              className="bg-blue-600 hover:bg-blue-700"
            >
              <ShoppingCart size={18} className="mr-2" />
              Add All to Cart
            </Button>
          )}
        </div>

        {wishlist.length === 0 ? (
          <Card className="text-center py-20 border border-dashed border-gray-200 dark:border-gray-700 dark:bg-black">
            <CardContent className="space-y-4">
              <Heart
                size={64}
                className="mx-auto text-gray-300 dark:text-gray-700"
              />
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                Your wishlist is empty
              </h2>
              <p className="text-gray-500 dark:text-gray-400 max-w-md mx-auto">
                Save your favorite products to your wishlist to buy them later
              </p>
              <Button asChild className="mt-4">
                <Link to="/">Start Shopping</Link>
              </Button>
            </CardContent>
          </Card>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {wishlist.map((product) => (
              <Card
                key={product.id}
                className="group overflow-hidden border border-gray-200 dark:border-gray-700 dark:bg-black shadow-lg hover:shadow-2xl dark:hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all duration-300"
              >
                <CardContent className="p-0">
                  <div className="relative">
                    <Link to={`/product/${product.id}`}>
                      <div className="aspect-square overflow-hidden bg-gray-100 dark:bg-gray-900">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                    </Link>
                    <button
                      onClick={() => removeFromWishlist(product.id)}
                      className="absolute top-3 right-3 p-2 bg-white dark:bg-gray-900 rounded-full shadow-lg hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
                      title="Remove from wishlist"
                    >
                      <Trash2 size={18} className="text-red-500" />
                    </button>
                  </div>

                  <div className="p-4 space-y-3">
                    <Link to={`/product/${product.id}`}>
                      <h3 className="font-semibold text-gray-900 dark:text-white line-clamp-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                        {product.name}
                      </h3>
                    </Link>

                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                        ₹{product.price.toLocaleString("en-IN")}
                      </span>
                    </div>

                    <Button
                      onClick={() => handleAddToCart(product)}
                      className="w-full bg-blue-600 hover:bg-blue-700"
                    >
                      <ShoppingCart size={18} className="mr-2" />
                      Add to Cart
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default WishlistPage;
