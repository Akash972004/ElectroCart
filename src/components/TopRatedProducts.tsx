import { products } from '../data/products';
import ProductCard from './ProductCard';

const TopRatedProducts = () => {
    // Filter for high rated products (>= 4.5) and sort by rating then reviews
    const topRatedProducts = products
        .filter(product => product.rating >= 4.5)
        .sort((a, b) => {
            if (b.rating !== a.rating) {
                return b.rating - a.rating;
            }
            return b.reviews - a.reviews;
        })
        .slice(0, 8);

    return (
        <section className="py-16 bg-white dark:bg-slate-900 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        Top Rated Products
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
                        Our most loved products, highly rated by customers like you
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {topRatedProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TopRatedProducts;
