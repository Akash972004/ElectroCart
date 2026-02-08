import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { Button } from './ui/button';
import { Lock } from 'lucide-react';

interface ProtectedRouteProps {
    children: React.ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
    const { user } = useAuth();

    if (!user) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-4 text-center p-4">
                <div className="bg-gray-100 dark:bg-slate-800 p-4 rounded-full">
                    <Lock className="w-8 h-8 text-gray-400" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Login Required</h2>
                <p className="text-gray-500 dark:text-gray-400 max-w-sm">
                    Please login to access this page and manage your orders.
                </p>
                <Button asChild className="mt-4">
                    <Link to="/login">Login to Continue</Link>
                </Button>
            </div>
        );
    }

    return <>{children}</>;
};

export default ProtectedRoute;
