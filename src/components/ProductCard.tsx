import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ShoppingCart, Star, Heart } from "lucide-react";
import { Product } from "../types/product";
import { useCart } from "../hooks/useCart";
import { useAuth } from "../hooks/useAuth";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { toast } from "sonner";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [isInWishlist, setIsInWishlist] = useState(false);

  useEffect(() => {
    const savedWishlist = localStorage.getItem("electroWishlist");
    if (savedWishlist) {
      const wishlistIds = JSON.parse(savedWishlist);
      setIsInWishlist(wishlistIds.includes(product.id));
    }
  }, [product.id]);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!user) {
      toast.error("Please login to add items to cart");
      navigate("/login");
      return;
    }
    addToCart(product);
    toast.success("Added to cart");
  };

  const toggleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    const savedWishlist = localStorage.getItem("electroWishlist");
    let wishlistIds = savedWishlist ? JSON.parse(savedWishlist) : [];

    if (isInWishlist) {
      wishlistIds = wishlistIds.filter((id: string) => id !== product.id);
      setIsInWishlist(false);
      toast.success("Removed from wishlist");
    } else {
      wishlistIds.push(product.id);
      setIsInWishlist(true);
      toast.success("Added to wishlist");
    }

    localStorage.setItem("electroWishlist", JSON.stringify(wishlistIds));
  };

  return (
    <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-white dark:bg-black border border-gray-200 dark:border-gray-700 dark:hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]">
      <Link to={`/product/${product.id}`}>
        <div className="aspect-square overflow-hidden bg-gray-100 dark:bg-gray-800 relative">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {product.featured && (
            <span className="absolute top-2 right-2 bg-yellow-400 text-yellow-900 text-xs font-bold px-2 py-1 rounded-full">
              Featured
            </span>
          )}
          <button
            onClick={toggleWishlist}
            className="absolute top-2 left-2 p-2 bg-white dark:bg-gray-900 rounded-full shadow-lg hover:scale-110 transition-transform duration-200 z-10"
            title={isInWishlist ? "Remove from wishlist" : "Add to wishlist"}
          >
            <Heart
              size={18}
              className={`${
                isInWishlist
                  ? "text-red-500 fill-red-500"
                  : "text-gray-600 dark:text-gray-400"
              } transition-colors`}
            />
          </button>
        </div>
        <CardContent className="p-4">
          <div className="flex justify-between items-start mb-2">
            <div>
              <p className="text-xs text-blue-600 dark:text-blue-400 font-semibold uppercase tracking-wider mb-1">
                {product.category}
              </p>
              <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-1">
                {product.name}
              </h3>
            </div>
          </div>

          <div className="flex items-center mb-2">
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 mr-1" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              {product.rating}
            </span>
            <span className="text-xs text-gray-500 dark:text-gray-400 ml-1">
              ({product.reviews})
            </span>
          </div>

          <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
            {product.description}
          </p>

          <div className="flex items-center justify-between mt-auto">
            <span className="text-xl font-bold text-gray-900 dark:text-white">
              ₹{product.price.toLocaleString("en-IN")}
            </span>
            <Button
              onClick={handleAddToCart}
              size="sm"
              className="bg-blue-600 hover:bg-blue-700 rounded-full text-white"
            >
              <ShoppingCart size={16} className="mr-1" />
              Add
            </Button>
          </div>
        </CardContent>
      </Link>
    </Card>
  );
};

export default ProductCard;
