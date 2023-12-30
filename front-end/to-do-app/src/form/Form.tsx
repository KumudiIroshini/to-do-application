import './Form.css'
import React, {useRef, useState} from "react";

export function Form() {

    const [value, setValue] = useState("");
    const txtRef= useRef<HTMLInputElement>(null);

    function handleSubmit(e:React.FormEvent){
        e.preventDefault();

        setValue("");
        txtRef.current!.focus();
    }

    return (
        <form onSubmit={handleSubmit}
              className="d-flex g-2 p-2 border-bottom">

            <input className="form-control"
                   value={value}
                   onChange={e=> setValue(e.target.value)}
                   type="text" placeholder="Eg: Task 1"/>
            <button className="btn btn-primary" >ADD</button>
        </form>
    );
}