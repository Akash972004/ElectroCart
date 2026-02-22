import { useState } from "react";
import { Card, CardContent } from "../components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";
import { Input } from "../components/ui/input";
import {
  HelpCircle,
  Search,
  Package,
  CreditCard,
  Truck,
  RefreshCw,
  Shield,
} from "lucide-react";
import BackButton from "../components/BackButton";

const FAQPage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    {
      icon: Package,
      title: "Orders & Shipping",
      faqs: [
        {
          question: "How do I track my order?",
          answer:
            "You can track your order by visiting the Orders page after logging in. Each order has a tracking number that shows real-time delivery status. You'll also receive email notifications with tracking updates.",
        },
        {
          question: "What are the shipping charges?",
          answer:
            "We offer FREE shipping on all orders across India. There are no minimum order requirements. Premium same-day delivery is available in select cities for an additional charge.",
        },
        {
          question: "How long does delivery take?",
          answer:
            "Standard delivery takes 3-5 business days. Metro cities typically receive orders within 2-3 days. Express delivery (1-2 days) is available for select locations at checkout.",
        },
      ],
    },
    {
      icon: CreditCard,
      title: "Payment",
      faqs: [
        {
          question: "What payment methods do you accept?",
          answer:
            "We accept Credit/Debit Cards (Visa, MasterCard, RuPay), UPI (Google Pay, PhonePe, Paytm), Net Banking, and Cash on Delivery. All payments are processed securely through encrypted payment gateways.",
        },
        {
          question: "Is it safe to use my credit card?",
          answer:
            "Absolutely! We use industry-standard SSL encryption and PCI-DSS compliant payment gateways. We never store your complete card details on our servers.",
        },
        {
          question: "Can I pay in installments?",
          answer:
            "Yes! We offer EMI options on orders above ₹5,000. You can choose 3, 6, 9, or 12-month EMI plans at checkout. EMI is available on Credit Cards and select Debit Cards.",
        },
      ],
    },
    {
      icon: RefreshCw,
      title: "Returns & Refunds",
      faqs: [
        {
          question: "What is your return policy?",
          answer:
            "We offer a 7-day return policy on most products. Items must be unused, in original packaging with all accessories and tags. Some categories like earphones and personal care devices cannot be returned for hygiene reasons.",
        },
        {
          question: "How do I return a product?",
          answer:
            'Go to Orders page, select the order, and click "Return". Choose a reason and schedule a pickup. Our courier partner will collect the item from your address. Refunds are processed within 5-7 business days after we receive the return.',
        },
        {
          question: "How long does it take to get a refund?",
          answer:
            "Refunds are initiated within 48 hours of receiving the returned product. The amount is credited within 5-7 business days depending on your bank. For COD orders, we process bank transfers or store credits.",
        },
      ],
    },
    {
      icon: Shield,
      title: "Warranty & Support",
      faqs: [
        {
          question: "Do products come with warranty?",
          answer:
            "Yes, all products come with manufacturer warranty as specified on the product page. Warranty periods range from 6 months to 2 years depending on the product category and brand.",
        },
        {
          question: "How do I claim warranty?",
          answer:
            "Contact our support team with your order details. We'll guide you through the warranty claim process. For most products, you'll need to visit the nearest authorized service center with your purchase invoice.",
        },
        {
          question: "What if I receive a damaged product?",
          answer:
            "Please inspect your package at the time of delivery. If you find any damage, refuse the delivery or take photos immediately. Contact us within 24 hours, and we'll arrange for a replacement at no extra cost.",
        },
      ],
    },
    {
      icon: Truck,
      title: "General",
      faqs: [
        {
          question: "Do you deliver to my location?",
          answer:
            "We deliver to all serviceable pin codes in India. Enter your pin code on the product page to check delivery availability. Most metro and tier-2 cities have full coverage.",
        },
        {
          question: "Can I cancel my order?",
          answer:
            "Yes, you can cancel your order before it's shipped. Go to Orders page and click \"Cancel Order\". Once shipped, you'll need to follow the return process after delivery.",
        },
        {
          question: "How can I contact customer support?",
          answer:
            "You can reach us via email at support@electrocart.com, call us at +91 1234567890 (Mon-Sat, 9 AM - 8 PM), or use the Contact page to send us a message. We typically respond within 24 hours.",
        },
      ],
    },
  ];

  const filteredCategories = categories
    .map((category) => ({
      ...category,
      faqs: category.faqs.filter(
        (faq) =>
          faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
          faq.answer.toLowerCase().includes(searchQuery.toLowerCase()),
      ),
    }))
    .filter((category) => category.faqs.length > 0);

  return (
    <div className="min-h-screen bg-gray-50/50 dark:bg-black pt-24 sm:pt-32 pb-16 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <BackButton className="mb-6" />

        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-2xl">
              <HelpCircle className="h-12 w-12 text-blue-600 dark:text-blue-400" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Find answers to common questions about orders, shipping, payments,
            and more
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-12">
          <div className="relative">
            <Search
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={20}
            />
            <Input
              type="text"
              placeholder="Search for answers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 py-6 text-lg dark:bg-gray-900 dark:border-gray-700"
            />
          </div>
        </div>

        {/* FAQ Categories */}
        <div className="space-y-8">
          {filteredCategories.length === 0 ? (
            <Card className="border border-dashed border-gray-200 dark:border-gray-700 dark:bg-black">
              <CardContent className="text-center py-12">
                <p className="text-gray-500 dark:text-gray-400">
                  No results found for "{searchQuery}". Try different keywords
                  or browse categories below.
                </p>
              </CardContent>
            </Card>
          ) : (
            filteredCategories.map((category, index) => (
              <Card
                key={index}
                className="border border-gray-200 dark:border-gray-700 dark:bg-black shadow-lg"
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-2 rounded-lg">
                      <category.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {category.title}
                    </h2>
                  </div>

                  <Accordion type="single" collapsible className="w-full">
                    {category.faqs.map((faq, faqIndex) => (
                      <AccordionItem
                        key={faqIndex}
                        value={`item-${index}-${faqIndex}`}
                      >
                        <AccordionTrigger className="text-left font-semibold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-600 dark:text-gray-300 leading-relaxed">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            ))
          )}
        </div>

        {/* Contact CTA */}
        <Card className="mt-12 border border-gray-200 dark:border-gray-700 dark:bg-black shadow-lg bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/10 dark:to-purple-900/10">
          <CardContent className="text-center py-12">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Still have questions?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              Can't find the answer you're looking for? Our customer support
              team is here to help.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
            >
              Contact Support
            </a>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default FAQPage;
