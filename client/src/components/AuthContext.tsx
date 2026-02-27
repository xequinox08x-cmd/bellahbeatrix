import { createContext, useContext, useState, ReactNode } from 'react';

interface User {
  name: string;
  email: string;
  avatar?: string;
}

interface AuthContextType {
  user: User | null;
  login: (username: string, password: string) => boolean;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(() => {
    // Check if user is already logged in (from localStorage)
    const savedUser = localStorage.getItem('bellabeatrix_user');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const login = (username: string, password: string): boolean => {
    // Mock authentication - accepts 'admin' or 'staff' as username
    const validUsernames = ['admin', 'staff'];
    if (validUsernames.includes(username.toLowerCase()) && password) {
      const newUser = {
        name: username.charAt(0).toUpperCase() + username.slice(1),
        email: `${username}@bellabeatrix.com`,
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=admin'
      };
      setUser(newUser);
      localStorage.setItem('bellabeatrix_user', JSON.stringify(newUser));
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('bellabeatrix_user');
  };

  return (
    <AuthContext.Provider value={{ 
      user, 
      login, 
      logout, 
      isAuthenticated: !!user 
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}