import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import app from "../firebase/firebase.config";
import Swal from "sweetalert2";


const auth = getAuth(app);
export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();


const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const updateUserProfile = (user, name, photo) => {
        return updateProfile(user, {
            displayName: name,
            photoURL: photo,
        });
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    const handleAlert = () => {
        if (!user) {
            Swal.fire({
                icon: 'warning',
                text: 'You have to log in first to view details!',
            })
        }
    }

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        googleSignIn,
        updateUserProfile,
        logOut,
        handleAlert
    };

    useEffect( () => {
        const unsubscribe = onAuthStateChanged(auth, loggedUser => {
            setUser(loggedUser);
            setLoading(false);
        });
        return () => {
            return unsubscribe();
        }
    }, []);

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;