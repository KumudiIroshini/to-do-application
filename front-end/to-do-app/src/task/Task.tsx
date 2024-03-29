import './Task.css'
import React, {useId, useState} from "react";
import {TaskDTO} from "../dto/TaskDTO.ts";
import {useTaskDispatcher} from "../context/TaskContext.tsx";
import {deleteTask, updateTask} from "../service/TaskService.tsx";

export function Task(task:TaskDTO) {

    const id = useId();
    const taskDispatcher = useTaskDispatcher();
    const [remove, setRemove] = useState(false);

    function handleChange(e:React.ChangeEvent<HTMLInputElement>){
        updateTask(task).then(value => {
            taskDispatcher({
                type:'update',
                task
            });
        }).catch(err => {
            alert("Failed to update the task, try again!")
        })
    }

    function handleDelete(){
        deleteTask(task.id!).then(val => {
            setRemove(true);
            setTimeout(() => {
                taskDispatcher({
                    type:'delete',
                    id:task.id
                });
            },500)
        }).catch(err => {
            alert("Failed to delete the task, try again");
        });
    }

    return (
        <>

            <div className={`Task d-flex justify-content-between
                ${!remove?
                'animate__animated animate__slideInUp animate__faster'
                :
                'delete animate__animated animate__slideOutLeft animate__faster'
            }       
                align-items-center p-2`}>

                <div className="d-flex gap-2">
                    <input checked={task.status!}
                           onChange={handleChange}
                           className="form-check-input"
                           id = {id}
                           type="checkbox" />
                    <label htmlFor={id} className="form-check-label">
                        {task.description}
                    </label>
                </div>
                     <i onClick={handleDelete} className="bi bi-trash fs-4"></i>

            </div>
        </>
    );
}