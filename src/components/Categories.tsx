import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const categories = [
  {
    name: "Phones",
    slug: "phones",
    image:
      "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=400&h=300&fit=crop",
    description: "Latest smartphones and accessories",
  },
  {
    name: "Laptops",
    slug: "laptops",
    image:
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&h=300&fit=crop",
    description: "High-performance laptops and notebooks",
  },
  {
    name: "Watches",
    slug: "watches",
    image:
      "https://images.unsplash.com/photo-1434493907317-a46b5bbe7834?w=400&h=300&fit=crop",
    description: "Smart watches and fitness trackers",
  },
  {
    name: "Earphones",
    slug: "earphones",
    image:
      "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=400&h=300&fit=crop",
    description: "Premium audio devices and headphones",
  },
  {
    name: "Tablets",
    slug: "tablets",
    image:
      "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=300&fit=crop",
    description: "Portable tablets for work and play",
  },
  {
    name: "Cameras",
    slug: "cameras",
    image:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&h=300&fit=crop",
    description: "Professional cameras and lenses",
  },
  {
    name: "Gaming",
    slug: "gaming",
    image:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=300&fit=crop",
    description: "Consoles, controllers, and VR",
  },
  {
    name: "Smart Home",
    slug: "smart-home",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=300&fit=crop",
    description: "Smart speakers, lights, and security",
  },
  {
    name: "Drones",
    slug: "drones",
    image:
      "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=400&h=300&fit=crop",
    description: "Aerial photography and racing drones",
  },
  {
    name: "Accessories",
    slug: "accessories",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=300&fit=crop",
    description: "Cables, chargers, and cases",
  },
  {
    name: "Monitors",
    slug: "monitors",
    image:
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400&h=300&fit=crop",
    description: "4K displays and gaming monitors",
  },
  {
    name: "Networking",
    slug: "networking",
    image:
      "https://images.unsplash.com/photo-1551703599-6b3e8379aa8c?w=400&h=300&fit=crop",
    description: "Routers, switches, and modems",
  },
  {
    name: "Others",
    slug: "others",
    image:
      "https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=400&h=300&fit=crop",
    description: "Gadgets, gifts, and more",
  },
];

const ITEMS_PER_PAGE = 6;

const Categories = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(categories.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentCategories = categories.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE,
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Smooth scroll to top of section
    const section = document.getElementById("categories-section");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="categories-section"
      className="py-16 bg-white dark:bg-black transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Shop by Category
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            Find exactly what you're looking for
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentCategories.map((category) => (
            <Link key={category.slug} to={`/category/${category.slug}`}>
              <Card className="group overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 bg-white dark:bg-black border border-gray-200 dark:border-gray-700 dark:hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] h-full rounded-2xl">
                <div className="aspect-[4/3] overflow-hidden rounded-t-2xl">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-2">
                    {category.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {category.description}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center space-x-2 mt-12">
            <Button
              variant="outline"
              size="icon"
              onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="rounded-full w-10 h-10 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 disabled:opacity-50"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <Button
                key={page}
                variant={currentPage === page ? "default" : "outline"}
                onClick={() => handlePageChange(page)}
                className={`rounded-full w-10 h-10 ${
                  currentPage === page
                    ? "bg-blue-600 hover:bg-blue-700 text-white"
                    : "border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                }`}
              >
                {page}
              </Button>
            ))}

            <Button
              variant="outline"
              size="icon"
              onClick={() =>
                handlePageChange(Math.min(totalPages, currentPage + 1))
              }
              disabled={currentPage === totalPages}
              className="rounded-full w-10 h-10 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 disabled:opacity-50"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Categories;
