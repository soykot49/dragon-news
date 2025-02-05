import { createContext, useEffect, useState } from "react";
import app from "../Firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";


export const Authcontext = createContext()
const auth = getAuth(app);

const Authprovider = ({children}) => {
    const [user , setUser] = useState(null);
    console.log(user);
    

    const createNewUser = (email , password) => {
        return createUserWithEmailAndPassword(auth , email , password)
    }

    const userLogin = (email , password) => {
        return signInWithEmailAndPassword(auth , email , password)
    }

    const logOut = () => {
        return signOut(auth)
    }

    const authInfo = {
        user , setUser , createNewUser, logOut
        
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth , currentUser => {
            setUser(currentUser)
        });
        return () => {
            unsubscribe()

        }

    },[])


    return <Authcontext.Provider value={authInfo}>{children}</Authcontext.Provider>
        
};

export default Authprovider;