import { createContext, useState, useEffect } from "react";

// AuthContext oluştur
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    // Token'ı localStorage'dan çek (sayfa yenilendiğinde oturumu korur)
    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    // Kullanıcı giriş yapınca token'ı kaydet
    const login = (userData) => {
        localStorage.setItem("user", JSON.stringify(userData));
        setUser(userData);
    };

    // Kullanıcı çıkış yapınca token'ı temizle
    const logout = () => {
        localStorage.removeItem("user");
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
