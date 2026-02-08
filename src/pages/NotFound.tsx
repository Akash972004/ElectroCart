
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import BackButton from '../components/BackButton';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-950 pt-40 pb-16 flex items-center justify-center transition-colors duration-300">
      <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="text-center shadow-xl border-gray-200 dark:border-slate-800">
          <CardHeader>
            <BackButton className="mb-2 mx-auto" />
            <CardTitle className="text-6xl font-bold text-gray-900 dark:text-white mb-2">
              404
            </CardTitle>
            <div className="text-xl text-gray-600 dark:text-gray-300 font-medium">Page Not Found</div>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-gray-600 dark:text-gray-400">
              The page you're looking for doesn't exist or has been moved.
            </p>
            <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
              <Link to="/">Go Back Home</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default NotFound;
