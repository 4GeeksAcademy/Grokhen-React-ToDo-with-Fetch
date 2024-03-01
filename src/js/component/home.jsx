import React, { useEffect, useState } from "react";
import AddToDo from "./addToDo";
import ToDo from "./toDo";


const Home = () => {
    const [toDo, setToDo] = useState([]);
    const [input, setInput] = useState("");
    const newTask = (e) => {
        setInput(e.target.value)
    }
    const sendData = (e) => {
        e.preventDefault()
        if (!input.trim()) return;
        setToDo([...toDo, input])
        setInput("")
    }

    const fetchToDo = async (endpoint) => {
        const response = await fetch(endpoint);
        const toDoData = await response.json();
        setToDo(toDoData);
    }

    useEffect(() => {
        fetchToDo("https://playground.4geeks.com/apis/fake/todos/user/grokhen")
    }, [])

    return (
        <>
            <h1>Tareas pendiente</h1>
            <AddToDo input={input} newTask={newTask} sendData={sendData} />
            <ul onClick={(e) => {
                if (e.target.matches(".fa-trash")) {
                    e.target.parentElement.parentElement.remove();
                }
            }}>
                <ToDo toDo={toDo} />
            </ul>
        </>
    )
}


export default Home;
