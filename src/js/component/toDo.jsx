import React, { useState } from "react";

const ToDo = () => {

    const [toDoList, setToDoList] = useState([]);
    /* const eventTarget = (e) => {
        e.preventDefault()
        console.log(e.target.value);
        setToDoList(...toDoList, e.target.value)
    } */
    return (
        <>
            <form>
                <input className="addToDo mt-3" type="text" placeholder="Agregar tarea" value={toDoList} onChange={e => setToDoList(e.target.value)} />
                <button type="submit" className="btn btn-primary">Añadir tarea</button>
            </form>
            {toDoList.map((task, index) => 
                 (<li key={index}>{task}</li>)
            )}
        </>
    )
}

export default ToDo;