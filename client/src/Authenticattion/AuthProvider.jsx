import React, { useEffect, createContext, useState } from 'react';
import app from '../firebase/firebase.config';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';

const AuthContext = createContext();
const Auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(Auth, email, password);
    };

    const loginwithGoogle = () => {
        setLoading(true);
        return signInWithPopup(Auth, googleProvider);
    };

    const login=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(Auth,email,password)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(Auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => unsubscribe();
    }, []);

    const authInfo = {
        user,
        createUser,
        loginwithGoogle,
        loading,
        login
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

// Ensure loginwithGoogle is defined before exporting it
export { AuthContext};
export default AuthProvider;
