import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Lock } from "lucide-react";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { user } = useAuth();

  if (!user) {
    return (
      <div className="relative flex flex-col items-center justify-center min-h-screen pt-24 pb-16 px-4 overflow-hidden">
        {/* Blurred Background Content */}
        <div className="absolute inset-0 z-0 blur-md opacity-30 pointer-events-none">
          {children}
        </div>

        {/* Login Card */}
        <Card className="relative z-10 w-full max-w-md shadow-2xl border border-gray-200 dark:border-gray-700 dark:bg-black transition-all duration-300 hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)] dark:hover:shadow-[0_20px_60px_rgba(255,255,255,0.2)] hover:-translate-y-2 hover:scale-105">
          <CardHeader className="space-y-4 text-center pb-4">
            <div className="mx-auto bg-blue-50 dark:bg-blue-900/20 p-4 rounded-full w-fit">
              <Lock className="w-10 h-10 text-blue-600 dark:text-blue-400" />
            </div>
            <CardTitle className="text-3xl font-bold">Login Required</CardTitle>
            <CardDescription className="text-base">
              Please login to access this page and manage your orders.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center pb-6">
            <Button asChild size="lg" className="w-full max-w-xs">
              <Link to="/login">Login to Continue</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return <>{children}</>;
};

export default ProtectedRoute;
