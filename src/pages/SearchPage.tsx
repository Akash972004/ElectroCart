import { useSearchParams, Link } from "react-router-dom";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";
import BackButton from "../components/BackButton";
import { Button } from "../components/ui/button";

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";

  const searchResults = products.filter(
    (product) =>
      product.name.toLowerCase().includes(query.toLowerCase()) ||
      product.description.toLowerCase().includes(query.toLowerCase()) ||
      product.category.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black pt-32 pb-16 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <BackButton className="mb-6" />
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Search Results
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            {searchResults.length === 0
              ? `No results found for "${query}"`
              : `Found ${searchResults.length} results for "${query}"`}
          </p>
        </div>

        {searchResults.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {searchResults.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center mt-12">
            <p className="text-gray-500 dark:text-gray-400 mb-8 max-w-md text-center">
              We couldn't find any products matching your search. Try checking
              for typos or using different keywords.
            </p>
            <Button asChild>
              <Link to="/">Back to Home</Link>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
