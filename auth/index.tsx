import { useRouter } from "next/router";
import { createContext, useEffect, useState } from "react";

const index = ({ children }) => {
    const AuthProvider = createContext(null);

    const [auth, setAuth] = useState(false);

    const router = useRouter();

    useEffect(() => {
        if (!auth) {
            router.push("/login");
        }
    }, [auth]);

    return (
        <AuthProvider.Provider value={{ auth, setAuth }}>
            {children}
        </AuthProvider.Provider>
    );
};

export default index;
