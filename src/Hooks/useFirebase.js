import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";






const useFirebase = () => {
    const [users, SetUsers] = useState({})

    const auth = getAuth();

    const signInUsingGoogle = () => {
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then(result => {
                SetUsers(result.users)
            })


    }




    // observe user state change

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                SetUsers(user);
            }
            else {
                SetUsers({})
            }
        })
    }, [])






    const logOut = () => {
        signOut(auth)
            .then(() => {

            })
    }








    return {
        users,
        signInUsingGoogle,
        logOut
    }

}

export default useFirebase;