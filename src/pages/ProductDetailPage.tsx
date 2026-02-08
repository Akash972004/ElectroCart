import { useParams, Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, Truck, ShieldCheck, RefreshCw, Star } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../hooks/useCart';
import { useAuth } from '../hooks/useAuth';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { toast } from 'sonner';
import BackButton from '../components/BackButton';

const ProductDetailPage = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();
  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-slate-950 pt-40 pb-16 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <BackButton className="mb-8" />
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Product Not Found
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mb-8">The product you're looking for doesn't exist.</p>
          <Button asChild>
            <Link to="/">Back to Home</Link>
          </Button>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (!user) {
      toast.error('Please login to add items to cart');
      navigate('/login');
      return;
    }
    addToCart(product);
    toast.success('Added to cart');
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-950 pt-24 sm:pt-32 pb-16 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <BackButton className="mb-6" />
        <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-xl overflow-hidden border border-gray-100 dark:border-slate-800">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Left Column: Image and Key Features */}
            <div className="flex flex-col border-b lg:border-b-0 lg:border-r border-gray-100 dark:border-slate-800">
              <div className="bg-gray-100 dark:bg-slate-800 relative group aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>

            {/* Right Column: Product Details */}
            <div className="p-8 md:p-12 flex flex-col">
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 rounded-full text-xs font-semibold uppercase tracking-wide">
                    {product.category}
                  </span>
                  <div className="flex items-center text-yellow-400">
                    <Star className="fill-yellow-400 w-4 h-4" />
                    <span className="ml-1 text-sm font-medium text-gray-700 dark:text-gray-300">
                      {product.rating}
                    </span>
                    <span className="mx-1 text-gray-400">•</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400 underline decoration-dotted">
                      {product.reviews} reviews
                    </span>
                  </div>
                </div>

                <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  {product.name}
                </h1>
                <div className="flex items-baseline space-x-4 mb-8">
                  <span className="text-4xl font-bold text-blue-600 dark:text-blue-400">
                    ₹{product.price.toLocaleString('en-IN')}
                  </span>
                  <span className="text-xl text-gray-400 line-through">
                    ₹{Math.round(product.price * 1.2)}
                  </span>
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
                    20% OFF
                  </span>
                </div>

                <div className="prose dark:prose-invert max-w-none mb-8">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Description
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {product.description}
                  </p>
                </div>

                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    Key Features
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {product.specs.map((spec, index) => (
                      <div key={index} className="flex items-center text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-slate-800 p-3 rounded-xl">
                        <ShieldCheck size={18} className="text-blue-500 mr-3 flex-shrink-0" />
                        <span className="text-sm font-medium">{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-4 mt-8 lg:mt-auto">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between text-sm text-gray-500 dark:text-gray-400 gap-4 bg-gray-50 dark:bg-slate-800 p-4 rounded-xl">
                  <div className="flex items-center">
                    <Truck size={18} className="mr-2 text-blue-500" />
                    <span>Free Delivery</span>
                  </div>
                  <div className="flex items-center">
                    <RefreshCw size={18} className="mr-2 text-blue-500" />
                    <span>7 Days Return</span>
                  </div>
                  <div className="flex items-center">
                    <ShieldCheck size={18} className="mr-2 text-blue-500" />
                    <span>2 Year Warranty</span>
                  </div>
                </div>

                <Button
                  onClick={handleAddToCart}
                  size="lg"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white text-lg py-6 rounded-xl shadow-lg shadow-blue-600/20"
                >
                  <ShoppingCart size={22} className="mr-2" />
                  Add to Cart
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
