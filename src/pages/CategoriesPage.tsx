
import { Link } from 'react-router-dom';
import { Card, CardContent } from '../components/ui/card';

const categories = [
  {
    name: 'Phones',
    slug: 'phones',
    image: 'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=600&h=400&fit=crop',
    description: 'Latest smartphones and accessories from top brands'
  },
  {
    name: 'Laptops',
    slug: 'laptops',
    image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600&h=400&fit=crop',
    description: 'High-performance laptops and notebooks for work and gaming'
  },
  {
    name: 'Watches',
    slug: 'watches',
    image: 'https://images.unsplash.com/photo-1434493907317-a46b5bbe7834?w=600&h=400&fit=crop',
    description: 'Smart watches and fitness trackers for active lifestyle'
  },
  {
    name: 'Earphones',
    slug: 'earphones',
    image: 'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=600&h=400&fit=crop',
    description: 'Premium audio devices and noise-canceling headphones'
  },
  {
    name: 'Others',
    slug: 'others',
    image: 'https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=600&h=400&fit=crop',
    description: 'Gaming accessories, chargers, and other tech gadgets'
  }
];

const CategoriesPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            All Categories
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Browse through our extensive collection of electronic products organized by category
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category) => (
            <Link key={category.slug} to={`/category/${category.slug}`}>
              <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="aspect-[3/2] overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
                    {category.name}
                  </h3>
                  <p className="text-gray-600">
                    {category.description}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoriesPage;
