import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { Search } from "lucide-react";

const Hero = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <div className="relative bg-white dark:bg-black text-gray-900 dark:text-white min-h-screen flex flex-col justify-center">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-purple-50/50 dark:from-transparent dark:to-transparent" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Your One-Stop{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Tech Shop!
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            Discover the latest electronic gadgets, from smartphones to laptops,
            all at unbeatable prices with fast delivery.
          </p>

          <form
            onSubmit={handleSearch}
            className="max-w-xl mx-auto mb-10 relative"
          >
            <input
              type="text"
              placeholder="Search for products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-6 py-4 pr-16 rounded-full bg-gray-100 dark:bg-white/10 backdrop-blur-md border border-gray-300 dark:border-white/20 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:bg-gray-200 dark:focus:bg-white/20 transition-all duration-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] hover:border-blue-400/50"
            />
            <button
              type="submit"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 rounded-full border border-gray-300 dark:border-white/30 hover:bg-gray-200 dark:hover:bg-white/20 hover:border-gray-400 dark:hover:border-white/50 transition-all duration-300 text-gray-900 dark:text-white group"
              aria-label="Search"
            >
              <Search className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </button>
          </form>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-3 transition-all duration-300 transform hover:scale-110 hover:shadow-[0_0_20px_rgba(37,99,235,0.5)]"
            >
              <Link to="/categories">Shop Now</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="bg-transparent text-gray-900 dark:text-white border-gray-900 dark:border-white hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-slate-900 text-lg px-8 py-3 transition-all duration-300 transform hover:scale-110 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]"
            >
              <Link to="/categories">Browse Categories</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-20 h-20 bg-blue-500/20 rounded-full blur-xl" />
      <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-purple-500/20 rounded-full blur-xl" />
    </div>
  );
};

export default Hero;
