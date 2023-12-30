import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {onAuthStateChanged} from 'firebase/auth';
import {useEffect, useRef, useState} from "react";
import {auth} from "./firebase.ts";
import {SignIn} from "./sign-in/SignIn.tsx";
import {useUser, useUserDispatcher} from "./context/UserContext.tsx";
import {Loader} from "./loader/Loader.tsx";



function App() {
  const userDispatcher = useUserDispatcher();
  const user = useUser();
  const [loader, setLoader] = useState(true);

  useEffect(() => {

    const unsubscribe = onAuthStateChanged(auth,(user) =>{
      setLoader(false);
      if(user){
        userDispatcher({type:'sign-in',user})
      }else{
        userDispatcher({type:'sign-out'})
      }
    });

    return () => unsubscribe();

  }, []);

  return (
    <>
      {loader ? <Loader /> :
          user ? <h1>To-do_app</h1>: <SignIn />}




    </>
  )
}

export default App
