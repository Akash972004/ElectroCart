import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { useToast } from "../components/ui/use-toast";
import { useAuth } from "../hooks/useAuth";
import BackButton from "../components/BackButton";
import { Loader2 } from "lucide-react";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      const success = login(email, password);
      setLoading(false);

      if (success) {
        toast({
          title: "Welcome back!",
          description: "You have successfully logged in.",
        });
        navigate("/");
      } else {
        toast({
          title: "Error",
          description: "Invalid email or password",
          variant: "destructive",
        });
      }
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-950 flex items-start md:items-center justify-center p-4 pt-24 md:pt-12 relative transition-colors duration-300">
      {/* Back Button positioned outside - more compact on small screens */}
      <div className="hidden md:block absolute md:top-28 md:left-8">
        <BackButton />
      </div>

      <div className="flex flex-col md:flex-row items-center md:items-center gap-8 md:gap-16 w-full max-w-5xl">
        {/* Brand Section */}
        <div className="flex-1 text-center md:text-left space-y-6 px-4 md:px-0">
          <Link to="/" className="inline-block">
            <img
              src="/logo.png"
              alt="ElectroCart Logo"
              className="h-auto w-48 md:w-64 lg:w-80 mx-auto md:mx-0 hover:scale-105 transition-transform duration-300"
            />
          </Link>
          <div className="space-y-4">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white tracking-tight">
              Welcome Back
            </h1>
            <p className="text-base text-gray-600 dark:text-gray-400 max-w-sm mx-auto md:mx-0">
              Enter your credentials to access your personalized shopping
              experience.
            </p>
          </div>
        </div>

        {/* Form Section */}
        <Card className="w-full max-w-md border-gray-200 dark:border-slate-800 shadow-2xl bg-white dark:bg-slate-900/50 backdrop-blur-sm mx-auto">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold text-center">
              Sign In
            </CardTitle>
            <CardDescription className="text-center">
              Enter your email and password to access your account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  type="email"
                  id="email"
                  placeholder="m@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <Button
                className="w-full bg-blue-600 hover:bg-blue-700 font-semibold h-11"
                type="submit"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Signing In...
                  </>
                ) : (
                  "Sign In"
                )}
              </Button>
              <div className="text-center text-sm pt-2">
                <span className="text-gray-600 dark:text-gray-400">
                  Don't have an account?{" "}
                </span>
                <Link
                  to="/signup"
                  className="text-blue-600 hover:underline font-bold transition-colors"
                >
                  Sign up
                </Link>
              </div>
            </form>
          </CardContent>
          <CardFooter className="pt-0 md:hidden">
            <div className="w-full flex justify-start px-4">
              <BackButton />
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default LoginPage;
