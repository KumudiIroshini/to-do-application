import './Form.css'
import React, {useRef, useState} from "react";
import {saveTask} from "../service/TaskService.tsx";
import {useUser} from "../context/UserContext.tsx";
import {useTaskDispatcher} from "../context/TaskContext.tsx";
import {TaskDTO} from "../dto/TaskDTO.ts";

export function Form() {

    const user = useUser();
    const [value, setValue] = useState("");
    const txtRef= useRef<HTMLInputElement>(null);
    const taskDispatcher = useTaskDispatcher();

    function handleSubmit(e:React.FormEvent){
        e.preventDefault();
        if(!value.trim()) return;
        saveTask(new TaskDTO(null,value,null,user?.email!)).then(task => {
            taskDispatcher({type:'add',task});
            setValue("");
            txtRef.current!.focus();
        }).catch(err => {
            alert("Failed to save the task, try again!");
        });
    }

    return (

        <div className="border border-success p-2 mb-2 border-opacity-75 m-5 p-5  p-2 text-dark bg-opacity-25" >
                <form onSubmit={handleSubmit}
                      className="d-flex g-2 p-2">

                    <input className="form-control"
                           ref={txtRef}
                           value={value}
                           onChange={e=> setValue(e.target.value)}
                           type="text" placeholder="+  ADD TASK "/>
                    <button className="btn btn-primary" >ADD</button>
                </form>
        </div>
    );
}