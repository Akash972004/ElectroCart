import { Link } from 'react-router-dom';
import { Card, CardContent } from './ui/card';

const categories = [
    {
        name: 'Phones',
        slug: 'phones',
        image: 'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=400&h=300&fit=crop',
        description: 'Latest smartphones and accessories'
    },
    {
        name: 'Laptops',
        slug: 'laptops',
        image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&h=300&fit=crop',
        description: 'High-performance laptops and notebooks'
    },
    {
        name: 'Watches',
        slug: 'watches',
        image: 'https://images.unsplash.com/photo-1434493907317-a46b5bbe7834?w=400&h=300&fit=crop',
        description: 'Smart watches and fitness trackers'
    },
    {
        name: 'Earphones',
        slug: 'earphones',
        image: 'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=400&h=300&fit=crop',
        description: 'Premium audio devices and headphones'
    },
    {
        name: 'Gaming',
        slug: 'gaming',
        image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=300&fit=crop',
        description: 'Consoles, controllers, and VR'
    },
    {
        name: 'Accessories',
        slug: 'accessories',
        image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=300&fit=crop',
        description: 'Cables, chargers, and cases'
    }
];

const FeaturedCategories = () => {
    return (
        <section className="py-16 bg-white dark:bg-slate-900 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        Featured Categories
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 text-lg">
                        Explore our most popular categories
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {categories.map((category) => (
                        <Link key={category.slug} to={`/category/${category.slug}`}>
                            <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-white dark:bg-slate-800 border dark:border-slate-700 h-full">
                                <div className="aspect-[4/3] overflow-hidden">
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
            </div>
        </section>
    );
};

export default FeaturedCategories;
