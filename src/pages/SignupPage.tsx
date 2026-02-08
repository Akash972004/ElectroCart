
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { useToast } from '../components/ui/use-toast';
import { useAuth } from '../hooks/useAuth';
import BackButton from '../components/BackButton';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";

const SignupPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    gender: 'male' as 'male' | 'female'
  });
  const { signup } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      toast({
        title: "Error",
        description: "Passwords do not match",
        variant: "destructive"
      });
      return;
    }

    if (formData.password.length < 6) {
      toast({
        title: "Error",
        description: "Password must be at least 6 characters",
        variant: "destructive"
      });
      return;
    }

    const success = signup(formData.name, formData.email, formData.password, formData.gender);

    if (success) {
      toast({
        title: "Success",
        description: "Account created successfully!"
      });
      navigate('/');
    } else {
      toast({
        title: "Error",
        description: "Email already exists",
        variant: "destructive"
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-950 flex items-center justify-center p-4 relative transition-colors duration-300">
      {/* Back Button positioned outside */}
      <div className="absolute top-28 left-8">
        <BackButton />
      </div>

      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 w-full max-w-5xl">
        {/* Brand Section */}
        <div className="flex-1 text-center md:text-left space-y-6 order-last md:order-first">
          <Link to="/" className="inline-block">
            <img src="/logo.png" alt="ElectroCart Logo" className="h-auto w-48 md:w-64 lg:w-80 mx-auto md:mx-0 hover:scale-105 transition-transform duration-300" />
          </Link>
          <div className="space-y-4">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white tracking-tight">
              Join Us Today
            </h1>
            <p className="text-base text-gray-600 dark:text-gray-400 max-w-sm mx-auto md:mx-0">
              Create an account to unlock exclusive deals, track orders, and faster checkout.
            </p>
          </div>
        </div>

        {/* Form Section */}
        <Card className="w-full max-w-md border-gray-200 dark:border-slate-800 shadow-2xl bg-white dark:bg-slate-900/50 backdrop-blur-sm">
          <CardHeader className="text-center space-y-1">
            <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">
              Create Account
            </CardTitle>
            <CardDescription>
              Join ElectroCart community
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                />
              </div>
              <div>
                <Label htmlFor="password">Password</Label>
                <Input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  required
                />
              </div>
              <div>
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <Input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="••••••••"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="gender">Gender</Label>
                <Select
                  value={formData.gender}
                  onValueChange={(value: 'male' | 'female') => setFormData({ ...formData, gender: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select gender" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 font-semibold h-11">
                Create Account
              </Button>
              <div className="text-center pt-2">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Already have an account?{' '}
                  <Link to="/login" className="text-blue-600 hover:underline font-bold transition-colors">
                    Sign in
                  </Link>
                </p>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SignupPage;
