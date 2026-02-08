
import { useState, useEffect, createContext, useContext } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
  gender: 'male' | 'female';
  phone?: string;
  location?: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => boolean;
  signup: (name: string, email: string, password: string, gender: 'male' | 'female') => boolean;
  logout: () => void;
  updateProfile: (data: Partial<User>) => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    // Fallback for when used outside provider
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
      const savedUser = localStorage.getItem('electroUser');
      if (savedUser) {
        setUser(JSON.parse(savedUser));
      }
    }, []);

    const login = (email: string, password: string): boolean => {
      const users = JSON.parse(localStorage.getItem('electroUsers') || '[]');
      const foundUser = users.find((u: any) => u.email === email && u.password === password);

      if (foundUser) {
        const { password: _, ...userWithoutPassword } = foundUser;
        setUser(userWithoutPassword);
        localStorage.setItem('electroUser', JSON.stringify(userWithoutPassword));
        return true;
      }
      return false;
    };

    const signup = (name: string, email: string, password: string, gender: 'male' | 'female'): boolean => {
      const users = JSON.parse(localStorage.getItem('electroUsers') || '[]');

      if (users.find((u: any) => u.email === email)) {
        return false; // User already exists
      }

      const newUser = {
        id: `user_${Date.now()}`,
        name,
        email,
        password,
        gender
      };

      users.push(newUser);
      localStorage.setItem('electroUsers', JSON.stringify(users));

      localStorage.setItem('electroUser', JSON.stringify(userWithoutPassword));
      return true;
    };

    const updateProfile = (data: Partial<User>) => {
      if (!user) return;

      const updatedUser = { ...user, ...data };
      setUser(updatedUser);
      localStorage.setItem('electroUser', JSON.stringify(updatedUser)); // Update current session

      // Update in the 'users' list as well
      const users = JSON.parse(localStorage.getItem('electroUsers') || '[]');
      const updatedUsers = users.map((u: any) =>
        u.email === user.email ? { ...u, ...data } : u
      );
      localStorage.setItem('electroUsers', JSON.stringify(updatedUsers));
    };

    const logout = () => {
      setUser(null);
      localStorage.removeItem('electroUser');
    };

    return {
      user,
      login,
      signup,
      logout,
      updateProfile,
      isAuthenticated: !!user
    };
  }
  return context;
};

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const auth = useAuth();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};
