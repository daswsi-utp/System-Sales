// contexts/AuthContext.tsx
import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext<{
  token: string | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}>(null!);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [token, setToken] = useState<string | null>(null);

  const login = async (email: string, password: string) => {
    // Implementa el flujo password o redirección
  };

  const logout = () => {
    localStorage.removeItem('token');
    setToken(null);
  };

  return (
    <AuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);