import { Card, CardContent } from "../components/ui/card";
import { Zap, Shield, Truck, Headphones, Award, Users } from "lucide-react";
import BackButton from "../components/BackButton";

const AboutPage = () => {
  const features = [
    {
      icon: Shield,
      title: "Secure Shopping",
      description:
        "Your data is protected with industry-standard encryption and secure payment gateways.",
    },
    {
      icon: Truck,
      title: "Fast Delivery",
      description:
        "Quick and reliable shipping to your doorstep with real-time tracking.",
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description:
        "Our customer service team is always ready to help you with any queries.",
    },
    {
      icon: Award,
      title: "Quality Assured",
      description:
        "All products are carefully selected and come with manufacturer warranties.",
    },
  ];

  const stats = [
    { value: "50K+", label: "Happy Customers" },
    { value: "1000+", label: "Products" },
    { value: "100+", label: "Brands" },
    { value: "4.8★", label: "Average Rating" },
  ];

  return (
    <div className="min-h-screen bg-gray-50/50 dark:bg-black pt-24 sm:pt-32 pb-16 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <BackButton className="mb-6" />

        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 rounded-2xl">
              <Zap className="h-12 w-12 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About ElectroCart
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Your trusted destination for premium electronics and gadgets. We
            bring the latest technology to your fingertips.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="text-center border border-gray-200 dark:border-gray-700 dark:bg-black shadow-lg hover:shadow-2xl dark:hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all duration-300"
            >
              <CardContent className="pt-6">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Our Story */}
        <Card className="mb-16 border border-gray-200 dark:border-gray-700 dark:bg-black shadow-lg">
          <CardContent className="p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Our Story
            </h2>
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                Founded in 2020, ElectroCart started with a simple mission: to
                make premium electronics accessible to everyone. What began as a
                small online store has grown into one of India's most trusted
                electronics retailers.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                We carefully curate our product selection, partnering with
                leading brands to bring you the latest smartphones, laptops,
                audio equipment, and smart home devices. Every product on our
                platform undergoes rigorous quality checks to ensure you receive
                only the best.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Today, we serve over 50,000 happy customers across India, and
                we're committed to continuing our journey of excellence in
                customer service, product quality, and innovation.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Features Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Why Choose ElectroCart?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="border border-gray-200 dark:border-gray-700 dark:bg-black shadow-lg hover:shadow-2xl dark:hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all duration-300"
              >
                <CardContent className="p-6 text-center">
                  <div className="bg-blue-50 dark:bg-blue-900/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <Card className="border border-gray-200 dark:border-gray-700 dark:bg-black shadow-lg">
          <CardContent className="p-8 md:p-12 text-center">
            <Users className="h-16 w-16 text-blue-600 dark:text-blue-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Our Team
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
              We're a passionate team of tech enthusiasts, customer service
              experts, and logistics professionals working together to deliver
              the best shopping experience. Our team is dedicated to staying
              ahead of technology trends and ensuring every customer finds
              exactly what they need.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AboutPage;
