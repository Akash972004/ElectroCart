import { Order } from "../types/product";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Package, MapPin, CreditCard } from "lucide-react";

interface OrderDetailsModalProps {
  order: Order | null;
  isOpen: boolean;
  onClose: () => void;
}

const OrderDetailsModal = ({
  order,
  isOpen,
  onClose,
}: OrderDetailsModalProps) => {
  if (!order) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl bg-white dark:bg-black border-gray-200 dark:border-gray-700">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold flex items-center gap-2">
            <Package className="text-blue-600" />
            Order Details{" "}
            <span className="text-gray-400 font-normal">#{order.id}</span>
          </DialogTitle>
          <DialogDescription>
            Placed on {new Date(order.date).toLocaleDateString()} at{" "}
            {new Date(order.date).toLocaleTimeString()}
          </DialogDescription>
        </DialogHeader>

        <ScrollArea className="max-h-[60vh] pr-4">
          <div className="space-y-6">
            {/* Items List */}
            <div>
              <h3 className="font-semibold mb-3 text-lg">Items</h3>
              <div className="space-y-4">
                {order.items.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 rounded-md object-cover border border-gray-100 dark:border-gray-700"
                    />
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900 dark:text-white">
                        {item.name}
                      </h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Qty: {item.quantity} × ₹{item.price}
                      </p>
                    </div>
                    <div className="font-semibold">
                      ₹{item.price * item.quantity}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Separator />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Shipping Info (Mocked) */}
              <div>
                <h3 className="font-semibold mb-2 flex items-center gap-2">
                  <MapPin size={18} className="text-gray-500" />
                  Shipping Address
                </h3>
                <div className="text-sm text-gray-600 dark:text-gray-300 pl-6 border-l-2 border-gray-100 dark:border-gray-700">
                  <p>John Doe</p>
                  <p>123 Tech Avenue</p>
                  <p>Silicon Valley, CA 94025</p>
                  <p>United States</p>
                </div>
              </div>

              {/* Payment Info (Mocked) */}
              <div>
                <h3 className="font-semibold mb-2 flex items-center gap-2">
                  <CreditCard size={18} className="text-gray-500" />
                  Payment Method
                </h3>
                <div className="text-sm text-gray-600 dark:text-gray-300 pl-6 border-l-2 border-gray-100 dark:border-gray-700">
                  <p>Visa ending in **42</p>
                </div>
              </div>
            </div>

            <Separator />

            {/* Summary */}
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Subtotal</span>
                <span>₹{order.total}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Shipping</span>
                <span>Free</span>
              </div>
              <div className="flex justify-between text-base font-bold pt-2 border-t dark:border-gray-700">
                <span>Total</span>
                <span className="text-blue-600">₹{order.total}</span>
              </div>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default OrderDetailsModal;
