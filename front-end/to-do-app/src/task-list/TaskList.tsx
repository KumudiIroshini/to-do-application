import './TaskList.css'
import {useTaskDispatcher, useTaskList} from "../context/TaskContext.tsx";
import {useUser} from "../context/UserContext.tsx";
import {useEffect} from "react";
import {getAllTasks} from "../service/TaskService.tsx";
import {Task} from "../task/Task.tsx";

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

            {

                taskList.map(task =>
                    // <div className="border border-success p-2 mb-2 border-opacity-75 m-5 p-5  p-2 text-dark bg-opacity-25">
                        <Task key={task.id} {...task} />
                      )

            }

        </>
    );
}