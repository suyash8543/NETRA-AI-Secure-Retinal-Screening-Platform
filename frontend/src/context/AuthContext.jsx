import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("netraUser");

    return savedUser ? JSON.parse(savedUser) : null;
  });

  const login = (email, password) => {
    // Temporary frontend authentication
    // Backend integration ke time actual API call hogi.
    if (
      email === "doctor@netra-ai.org" &&
      password === "123456"
    ) {
      const loggedInUser = {
        name: "Dr. Sharma",
        role: "Ophthalmologist",
        email: email,
      };

      localStorage.setItem(
        "netraUser",
        JSON.stringify(loggedInUser)
      );

      setUser(loggedInUser);

      return {
        success: true,
      };
    }

    return {
      success: false,
      message: "Invalid email or password.",
    };
  };

  const logout = () => {
    localStorage.removeItem("netraUser");
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}