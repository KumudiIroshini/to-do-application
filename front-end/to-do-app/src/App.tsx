import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {onAuthStateChanged} from 'firebase/auth';
import {useEffect} from "react";
import {auth} from "./firebase.ts";
import {SignIn} from "./sign-in/SignIn.tsx";
import {useUser, useUserDispatcher} from "./context/UserContext.tsx";



function App() {
  const userDispatcher = useUserDispatcher();
  const user = useUser();

  useEffect(() => {


    onAuthStateChanged(auth,(user) =>{
      if(user){
        userDispatcher({type:'Sign-in',user})
      }else{
        userDispatcher({type:'Sign-out'})
      }
    });

  }, []);

  return (
    <>
      {user ? <h1>To-Do app</h1> : <SignIn />}
    </>
  )
}

export default App
