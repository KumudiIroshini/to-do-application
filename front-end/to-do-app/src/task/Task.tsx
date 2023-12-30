import './Task.css'
import {useId} from "react";
import {TaskDTO} from "../dto/TaskDTO.ts";

export function Task(task:TaskDTO) {

    const id = useId();

    return (
        <>
            <div className="d-flex gap-2">
                <input id = {id} type="checkbox" />
                <label htmlFor={id} className="form-check-label">
                    {task.description}
                </label>
            </div>
        </>
    );
}