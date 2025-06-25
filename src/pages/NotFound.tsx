
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';

const NotFound = () => {
  useEffect(() => {
    console.error('404 Error: User attempted to access non-existent route:', window.location.pathname);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-16 flex items-center justify-center">
      <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold text-gray-900 mb-2">
              404
            </CardTitle>
            <p className="text-xl text-gray-600">Page Not Found</p>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <p className="text-gray-600">
              The page you're looking for doesn't exist or has been moved.
            </p>
            <Link to="/">
              <Button className="bg-blue-600 hover:bg-blue-700">
                Go Back Home
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default NotFound;
