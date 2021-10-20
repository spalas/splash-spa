import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../components/Login/Firebase/Firebase.init";




initializeAuthentication()

const useFirebase = () => {
    const [user, SetUsers] = useState({})
    const [isloading, setIsLoading] = useState(true);

    const auth = getAuth();

    const signInUsingGoogle = () => {
        setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then(result => {
                SetUsers(result.user)
            })
            .finally(() => setIsLoading(false));


    }

    const handleUserRegister = (email, password) => {

        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                // Signed in 
                console.log(result.user);
                // ...
            })
            .catch((error) => {

                const errorMessage = error.message;
                // ..
            });

    }


    const handleUserLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                // Signed in 
                console.log(result.user);
                // ...
            })
            .catch((error) => {

                const errorMessage = error.message;
            });
    }








    // observe user state change

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                SetUsers(user);
            }
            else {
                SetUsers({})
            }

            setIsLoading(false);
        });

        return () => unsubscribed;

    }, [])






    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {

            })
            .finally(() => setIsLoading(false));
    }








    return {
        user,
        isloading,
        signInUsingGoogle,
        logOut,
        handleUserRegister,
        handleUserLogin
    }

}

export default useFirebase;