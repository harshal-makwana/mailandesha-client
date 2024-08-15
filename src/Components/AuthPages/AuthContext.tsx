import React, { createContext, useState, useEffect, ReactNode } from 'react';

// Define Types
interface User {
  id: string;
  name: string;
  // Add other user properties as needed
}

interface AuthContextType {
  user: User | null;
  token: string;
  login: (userData: User, token: string) => void;
  logout: () => void;
}

// Create Context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Create Provider Component
interface AuthProviderProps {
  children: ReactNode;
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string>(localStorage.getItem('token') || '');

  // Function to handle login
  const login = (userData: User, token: string) => {
    setUser(userData);
    setToken(token);
    localStorage.setItem('token', token); // Save token to local storage
  };

  // Function to handle logout
  const logout = () => {
    setUser(null);
    setToken('');
    localStorage.removeItem('token'); // Remove token from local storage
  };

  // Optional: You can add an effect to check token validity or fetch user data on load
  useEffect(() => {
    // Fetch user data or verify token here if needed
  }, [token]);

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use auth context
const useAuth = (): AuthContextType => {
  const context = React.useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export { AuthProvider, useAuth };
