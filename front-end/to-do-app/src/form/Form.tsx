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
        <form onSubmit={handleSubmit}
              className="d-flex g-2 p-2 border-bottom">

            <input className="form-control"
                   ref={txtRef}
                   value={value}
                   onChange={e=> setValue(e.target.value)}
                   type="text" placeholder="Eg: Task 1"/>
            <button className="btn btn-primary" >ADD</button>
        </form>
    );
}