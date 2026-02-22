import { Check, Clock, Package, Truck } from "lucide-react";

interface OrderTimelineProps {
  status: "processing" | "shipped" | "delivered" | "cancelled";
}

const OrderTimeline = ({ status }: OrderTimelineProps) => {
  const steps = [
    { id: "placed", label: "Order Placed", icon: Clock },
    { id: "processing", label: "Processing", icon: Package },
    { id: "shipped", label: "Shipped", icon: Truck },
    { id: "delivered", label: "Delivered", icon: Check },
  ];

  const getCurrentStepIndex = () => {
    switch (status) {
      case "processing":
        return 1;
      case "shipped":
        return 2;
      case "delivered":
        return 3;
      case "cancelled":
        return -1; // Special case for cancelled
      default:
        return 0;
    }
  };

  const currentStep = getCurrentStepIndex();

  if (status === "cancelled") {
    return (
      <div className="w-full py-8 text-center">
        <div className="inline-flex items-center justify-center p-3 bg-red-100 dark:bg-red-900/30 rounded-full text-red-600 dark:text-red-400 mb-2">
          <Clock size={24} className="text-current" />
        </div>
        <p className="text-red-600 dark:text-red-400 font-medium">
          Order Cancelled
        </p>
      </div>
    );
  }

  return (
    <div className="w-full py-4">
      <div className="relative flex items-center justify-between w-full">
        {/* Progress Bar Background */}
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-full h-1 bg-gray-200 dark:bg-gray-700 -z-10 rounded-full" />

        {/* Active Progress Bar */}
        <div
          className="absolute left-0 top-1/2 transform -translate-y-1/2 h-1 bg-blue-600 transition-all duration-500 rounded-full"
          style={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
        />

        {steps.map((step, index) => {
          const isActive = index <= currentStep;
          const isCompleted = index < currentStep;

          return (
            <div key={step.id} className="flex flex-col items-center">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center border-2 transition-all duration-300 z-10 bg-white dark:bg-black ${
                  isActive
                    ? "border-blue-600 text-blue-600 scale-110 shadow-lg"
                    : "border-gray-300 dark:border-gray-700 text-gray-400"
                } ${isCompleted ? "bg-blue-600 border-blue-600 text-white" : ""}`}
              >
                {isCompleted ? <Check size={14} /> : <step.icon size={14} />}
              </div>
              <span
                className={`mt-2 text-xs font-medium transition-colors duration-300 absolute -bottom-6 w-20 text-center ${
                  isActive
                    ? "text-blue-600 dark:text-blue-400"
                    : "text-gray-400"
                }`}
              >
                {step.label}
              </span>
            </div>
          );
        })}
      </div>
      <div className="h-6" /> {/* Spacer for labels */}
    </div>
  );
};

export default OrderTimeline;
