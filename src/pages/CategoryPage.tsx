import { useParams, Link } from "react-router-dom";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";
import { Button } from "../components/ui/button";
import BackButton from "../components/BackButton";

const CategoryPage = () => {
  const { slug } = useParams<{ slug: string }>();

  const categoryProducts = products.filter((p) => p.category === slug);

  const categoryName = slug ? slug.charAt(0).toUpperCase() + slug.slice(1) : "";

  if (categoryProducts.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-black pt-32 pb-16 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <BackButton className="mb-6" />
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8">
            {categoryName}
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            No products found in this category.
          </p>
          <Button asChild>
            <Link to="/">Back to Home</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black pt-40 pb-16 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <BackButton className="mb-4" />
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {categoryName}
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            {categoryProducts.length} products found
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categoryProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
