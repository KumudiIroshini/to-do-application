import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {onAuthStateChanged} from 'firebase/auth';
import {useEffect, useRef, useState} from "react";
import {auth} from "./firebase.ts";
import {SignIn} from "./sign-in/SignIn.tsx";
import {useUser, useUserDispatcher} from "./context/UserContext.tsx";
import {Loader} from "./loader/Loader.tsx";
import {Header} from "./header/Header.tsx";
import {Form} from "./form/Form.tsx";
import {TaskProvider, useTaskDispatcher, useTaskList} from "./context/TaskContext.tsx";
import {getAllTasks} from "./service/TaskService.tsx";
import {TaskList} from "./task-list/TaskList.tsx";



function App() {
  const userDispatcher = useUserDispatcher();
  const user = useUser();
  const [loader, setLoader] = useState(true);
  const taskList = useTaskList();
  const taskListDispatcher = useTaskDispatcher();

  useEffect(() => {

    const unsubscribe = onAuthStateChanged(auth,(user) =>{
      setLoader(false);
      if(user){
        userDispatcher({type:'sign-in',user});
      }else {
        userDispatcher({type: 'sign-out'});
      }

    });

    return () => unsubscribe();

  }, []);



  return (
    <>
      {loader ? <Loader />
          :
          user ?
              (<>
                <Header />
                <TaskProvider>

                  <Form />



                    <TaskList />

                </TaskProvider>

              </>)
          :
         <SignIn />}
    </>
  )
}

export default App
