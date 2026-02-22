import { useState } from "react";
import { useOrders } from "../hooks/useOrders";
import { useCart } from "../hooks/useCart";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "../components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import {
  Package,
  Calendar,
  DollarSign,
  ExternalLink,
  RefreshCw,
  ShoppingBag,
} from "lucide-react";
import OrderTimeline from "../components/OrderTimeline";
import OrderDetailsModal from "../components/OrderDetailsModal";
import BackButton from "../components/BackButton";
import { Order } from "../types/product";
import { toast } from "sonner";

const OrdersPage = () => {
  const { orders, cancelOrder } = useOrders();
  const { addToCart } = useCart();
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [activeTab, setActiveTab] = useState("all");
  const [dateFilter, setDateFilter] = useState("all");

  // Filter Logic
  const filteredOrders = orders.filter((order) => {
    // Status Filter
    if (
      activeTab === "active" &&
      (order.status === "delivered" || order.status === "cancelled")
    )
      return false;
    if (activeTab === "delivered" && order.status !== "delivered") return false;
    if (activeTab === "cancelled" && order.status !== "cancelled") return false;

    // Date Filter (Mock logic for demo)
    if (dateFilter === "last30") {
      const thirtyDaysAgo = new Date();
      thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
      return new Date(order.date) > thirtyDaysAgo;
    }
    if (dateFilter === "2023") {
      return new Date(order.date).getFullYear() === 2023;
    }

    return true;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case "processing":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400 border-yellow-200 dark:border-yellow-900";
      case "shipped":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400 border-blue-200 dark:border-blue-900";
      case "delivered":
        return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400 border-green-200 dark:border-green-900";
      case "cancelled":
        return "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400 border-red-200 dark:border-red-900";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const handleBuyAgain = (order: Order) => {
    order.items.forEach((item) => {
      // Create a Product object from CartItem (stripping quantity if needed, or addToCart handles it)
      const { quantity, ...product } = item;
      addToCart(product);
    });
    toast.success("All items added to cart!");
  };

  const handleCancelOrder = (order: Order) => {
    if (window.confirm("Are you sure you want to cancel this order?")) {
      cancelOrder(order.id);
      toast.error("Order cancelled");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50/50 dark:bg-black pt-24 sm:pt-32 pb-16 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <BackButton className="mb-4" />
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              My Orders
            </h1>
            <p className="text-gray-500 dark:text-gray-400 mt-1">
              Track and manage your recent purchases
            </p>
          </div>

          <div className="flex gap-2">
            <Select value={dateFilter} onValueChange={setDateFilter}>
              <SelectTrigger className="w-[140px] bg-white dark:bg-black">
                <SelectValue placeholder="Filter by Date" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Time</SelectItem>
                <SelectItem value="last30">Last 30 Days</SelectItem>
                <SelectItem value="2023">2023</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <Tabs
          defaultValue="all"
          className="w-full mb-8"
          onValueChange={setActiveTab}
        >
          <div className="overflow-x-auto pb-2 -mx-4 px-4 md:mx-0 md:px-0 md:pb-0">
            <TabsList className="flex w-full min-w-max md:grid md:w-full md:max-w-md md:grid-cols-4 bg-white dark:bg-black p-1 border border-gray-200 dark:border-gray-700 rounded-xl">
              <TabsTrigger value="all" className="rounded-lg flex-1">
                All Orders
              </TabsTrigger>
              <TabsTrigger value="active" className="rounded-lg flex-1">
                Active
              </TabsTrigger>
              <TabsTrigger value="delivered" className="rounded-lg flex-1">
                Delivered
              </TabsTrigger>
              <TabsTrigger value="cancelled" className="rounded-lg flex-1">
                Cancelled
              </TabsTrigger>
            </TabsList>
          </div>
        </Tabs>

        {filteredOrders.length === 0 ? (
          <div className="text-center py-20 bg-white dark:bg-black rounded-3xl border border-dashed border-gray-200 dark:border-gray-700">
            <div className="bg-gray-50 dark:bg-gray-900 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <ShoppingBag size={32} className="text-gray-400" />
            </div>
            <h2 className="text-xl font-semibold mb-2">No orders found</h2>
            <p className="text-gray-500 mb-6">
              We couldn't find any orders matching your filters.
            </p>
            <Button
              onClick={() => {
                setActiveTab("all");
                setDateFilter("all");
              }}
              variant="outline"
            >
              Clear Filters
            </Button>
          </div>
        ) : (
          <div className="space-y-6">
            {filteredOrders.map((order) => (
              <Card
                key={order.id}
                className="overflow-hidden border border-gray-200 dark:border-gray-700 dark:bg-black shadow-sm hover:shadow-md dark:hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] transition-all duration-300"
              >
                <CardHeader className="bg-gray-50/50 dark:bg-gray-900/50 border-b border-gray-100 dark:border-gray-700 pb-4">
                  <div className="flex flex-wrap md:flex-nowrap justify-between items-start md:items-center gap-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-3">
                        <CardTitle className="text-lg font-bold">
                          Order #{order.id}
                        </CardTitle>
                        <Badge
                          variant="secondary"
                          className={`border ${getStatusColor(order.status)}`}
                        >
                          {order.status.charAt(0).toUpperCase() +
                            order.status.slice(1)}
                        </Badge>
                      </div>
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 gap-4">
                        <div className="flex items-center gap-1">
                          <Calendar size={14} />
                          {new Date(order.date).toLocaleDateString(undefined, {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </div>
                        <div className="flex items-center gap-1">
                          <DollarSign size={14} />
                          Total:{" "}
                          <span className="font-semibold text-gray-900 dark:text-white">
                            ₹{order.total}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 w-full md:w-auto">
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 md:flex-none"
                        onClick={() => setSelectedOrder(order)}
                      >
                        View Details
                      </Button>

                      {order.status === "processing" && (
                        <Button
                          variant="destructive"
                          size="sm"
                          className="flex-1 md:flex-none"
                          onClick={() => handleCancelOrder(order)}
                        >
                          Cancel Order
                        </Button>
                      )}

                      <Button
                        size="sm"
                        className="flex-1 md:flex-none gap-2 bg-blue-600 hover:bg-blue-700 text-white"
                        onClick={() => handleBuyAgain(order)}
                      >
                        <RefreshCw size={14} />
                        Buy Again
                      </Button>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="pt-6">
                  {/* Timeline */}
                  <div className="mb-8 px-2">
                    <OrderTimeline status={order.status} />
                  </div>

                  {/* Preview Items (First 2) */}
                  <div className="space-y-4">
                    {order.items.slice(0, 2).map((item) => (
                      <div key={item.id} className="flex items-center gap-4">
                        <div className="h-16 w-16 bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden flex-shrink-0">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-900 dark:text-white line-clamp-1">
                            {item.name}
                          </h4>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            Qty: {item.quantity}
                          </p>
                        </div>
                        <div className="font-semibold text-gray-900 dark:text-white">
                          ₹{item.price * item.quantity}
                        </div>
                      </div>
                    ))}
                    {order.items.length > 2 && (
                      <button
                        onClick={() => setSelectedOrder(order)}
                        className="text-sm text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1"
                      >
                        View all {order.items.length} items{" "}
                        <ExternalLink size={12} />
                      </button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        <OrderDetailsModal
          order={selectedOrder}
          isOpen={!!selectedOrder}
          onClose={() => setSelectedOrder(null)}
        />
      </div>
    </div>
  );
};

export default OrdersPage;
