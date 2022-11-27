import React, { useEffect } from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import { useState } from 'react';
import app from '../../firebase/firebase.config';
 
export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loader, setLoader] = useState(true);
    const provider = new GoogleAuthProvider(); 
  
    const createAccount = (email, password) => {
        setLoader(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginGoogle = () => {
        setLoader(true);
        return signInWithPopup(auth, provider);
    }



    const signIn = (email, password) => {
        setLoader(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const updateUserProfile = profile => {
        setLoader(true);
        return updateProfile(auth.currentUser, profile)
    }

    const logOut = () => {
        setLoader(true);
        return signOut(auth);
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoader(false);
        });
        return () => {
            unsubscribe();
        }
    }, [setUser])


    const authInfo = {
        user,
        loader,
        setLoader,
        createAccount,
        loginGoogle,
        signIn,
        updateUserProfile,
        logOut
    };
    return (
        <AuthContext.Provider value={authInfo}>
            {children};
        </AuthContext.Provider>
    );
};

export default AuthProvider;