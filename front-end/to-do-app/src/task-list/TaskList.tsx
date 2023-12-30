import './TaskList.css'
import {useTaskDispatcher, useTaskList} from "../context/TaskContext.tsx";
import {useUser} from "../context/UserContext.tsx";
import {useEffect} from "react";
import {getAllTasks} from "../service/TaskService.tsx";

export function TaskList() {

    const taskList = useTaskList();
    const taskDispatcher = useTaskDispatcher();
    const user = useUser();

    useEffect(() => {
        getAllTasks(user!.email!).then(taskList => {
            taskDispatcher({type:'set-list',taskList});
        }).catch(err => {
            alert("Failed to load tasks");
        })

        return () => {
            taskDispatcher({type:'set-list', taskList: []});
        }
    }, []);

    return (
        <>

        </>
    );
}