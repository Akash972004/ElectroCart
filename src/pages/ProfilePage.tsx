import { useAuth } from '../hooks/useAuth';
import { useOrders } from '../hooks/useOrders';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar';
import { Separator } from '../components/ui/separator';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Package, User as UserIcon, LogOut, Settings, CreditCard, MapPin, Edit2, Check, X } from 'lucide-react';
import BackButton from '../components/BackButton';
import { toast } from 'sonner';

const ProfilePage = () => {
    const { user, logout, updateProfile } = useAuth();
    const { orders } = useOrders();
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        location: ''
    });

    if (!user) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <p>Please log in to view your profile.</p>
                <Link to="/login" className="ml-2 text-blue-600 hover:underline">Login</Link>
            </div>
        );
    }

    const startEditing = () => {
        setFormData({
            name: user.name || '',
            phone: user.phone || '',
            location: user.location || ''
        });
        setIsEditing(true);
    };

    const handleSave = () => {
        updateProfile({
            name: formData.name,
            phone: formData.phone,
            location: formData.location
        });
        setIsEditing(false);
        toast.success('Profile updated successfully');
    };

    const handleCancel = () => {
        setIsEditing(false);
    };

    // Calculate some stats
    const totalOrders = orders.length;
    const activeOrders = orders.filter(o => o.status !== 'delivered' && o.status !== 'cancelled').length;

    return (
        <div className="min-h-screen bg-gray-50/50 dark:bg-slate-950 pt-24 sm:pt-32 pb-16 transition-colors duration-300">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <BackButton className="mb-6" />

                <div className="flex flex-col md:flex-row gap-8">
                    {/* Sidebar / Profile Card */}
                    <div className="w-full md:w-1/3 space-y-6">
                        <Card className="overflow-hidden border-gray-200 dark:border-slate-800 shadow-md">
                            <div className="h-32 bg-gradient-to-r from-blue-500 to-purple-600"></div>
                            <div className="px-6 pb-6">
                                <div className="relative flex justify-center -mt-12 mb-4">
                                    <Avatar className="h-24 w-24 border-4 border-white dark:border-slate-900 shadow-lg">
                                        <AvatarImage
                                            src={user.gender === 'female'
                                                ? `https://avatar.iran.liara.run/public/girl?username=${user.email}`
                                                : `https://avatar.iran.liara.run/public/boy?username=${user.email}`}
                                        />
                                        <AvatarFallback className="text-2xl font-bold bg-slate-100 dark:bg-slate-800">
                                            {user.name.charAt(0)}
                                        </AvatarFallback>
                                    </Avatar>
                                </div>

                                <div className="text-center space-y-1 mb-6">
                                    <h2 className="text-xl font-bold text-gray-900 dark:text-white">{user.name}</h2>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">{user.email}</p>
                                </div>

                                <div className="space-y-2">
                                    <Button variant="outline" className="w-full justify-start gap-2" asChild>
                                        <Link to="/orders">
                                            <Package size={16} />
                                            My Orders
                                        </Link>
                                    </Button>
                                    <Button variant="outline" className="w-full justify-start gap-2 text-red-600 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-900/20" onClick={logout}>
                                        <LogOut size={16} />
                                        Logout
                                    </Button>
                                </div>
                            </div>
                        </Card>

                        <Card className="border-gray-200 dark:border-slate-800 shadow-sm">
                            <CardHeader>
                                <CardTitle className="text-base">Account Stats</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="flex justify-between items-center">
                                    <span className="text-sm text-gray-600 dark:text-gray-400">Total Orders</span>
                                    <span className="font-semibold">{totalOrders}</span>
                                </div>
                                <Separator />
                                <div className="flex justify-between items-center">
                                    <span className="text-sm text-gray-600 dark:text-gray-400">Active Orders</span>
                                    <span className="font-semibold text-blue-600">{activeOrders}</span>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Main Content */}
                    <div className="flex-1 space-y-6">
                        <Card className="border-gray-200 dark:border-slate-800 shadow-sm relative">
                            <CardHeader className="flex flex-row items-center justify-between">
                                <div>
                                    <CardTitle>Personal Information</CardTitle>
                                    <CardDescription>Manage your personal details and address</CardDescription>
                                </div>
                                {!isEditing ? (
                                    <Button variant="ghost" size="sm" onClick={startEditing} className="text-blue-600">
                                        <Edit2 size={16} className="mr-2" />
                                        Edit
                                    </Button>
                                ) : (
                                    <div className="flex gap-2">
                                        <Button variant="ghost" size="sm" onClick={handleCancel} className="text-red-600">
                                            <X size={16} className="mr-2" />
                                            Cancel
                                        </Button>
                                        <Button variant="ghost" size="sm" onClick={handleSave} className="text-green-600">
                                            <Check size={16} className="mr-2" />
                                            Save
                                        </Button>
                                    </div>
                                )}
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <div className="grid gap-4 md:grid-cols-2">
                                    <div className="space-y-1">
                                        <label className="text-sm font-medium text-gray-500 dark:text-gray-400">Full Name</label>
                                        {isEditing ? (
                                            <Input
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                className="h-8"
                                            />
                                        ) : (
                                            <p className="font-medium h-8 flex items-center">{user.name}</p>
                                        )}
                                    </div>
                                    <div className="space-y-1">
                                        <label className="text-sm font-medium text-gray-500 dark:text-gray-400">Email Address</label>
                                        <p className="font-medium h-8 flex items-center text-gray-500">{user.email}</p>
                                    </div>
                                    <div className="space-y-1">
                                        <label className="text-sm font-medium text-gray-500 dark:text-gray-400">Phone Number</label>
                                        {isEditing ? (
                                            <Input
                                                value={formData.phone}
                                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                                className="h-8"
                                                placeholder="+91..."
                                            />
                                        ) : (
                                            <p className="font-medium h-8 flex items-center">{user.phone || 'Not set'}</p>
                                        )}
                                    </div>
                                    <div className="space-y-1">
                                        <label className="text-sm font-medium text-gray-500 dark:text-gray-400">Location</label>
                                        {isEditing ? (
                                            <Input
                                                value={formData.location}
                                                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                                                className="h-8"
                                                placeholder="City, Country"
                                            />
                                        ) : (
                                            <p className="font-medium h-8 flex items-center">{user.location || 'Not set'}</p>
                                        )}
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="border-gray-200 dark:border-slate-800 shadow-sm">
                            <CardHeader>
                                <CardTitle>Saved Addresses</CardTitle>
                                <CardDescription>Manage your shipping addresses</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="flex items-start gap-4 p-4 rounded-lg border border-gray-100 dark:border-slate-800 bg-gray-50/50 dark:bg-slate-900/50">
                                    <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-600 dark:text-blue-400">
                                        <MapPin size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-medium">Home</h4>
                                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                                            123, Tech Plaza, Dadar West, Mumbai - 400028
                                        </p>
                                    </div>
                                    <Button variant="ghost" size="sm" className="ml-auto text-blue-600 hover:text-blue-700">Edit</Button>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
