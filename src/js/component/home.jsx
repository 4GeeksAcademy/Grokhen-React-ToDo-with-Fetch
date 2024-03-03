import React, { useEffect, useState } from "react";
import AddToDo from "./addToDo";
import ToDo from "./toDo";


const Home = () => {
    const [toDo, setToDo] = useState([]);
    const [input, setInput] = useState("");
    const [key, setKey] = useState(toDo.length)
    const newTask = (e) => {
        setInput(e.target.value);
    }
    const sendData = (e) => {
        e.preventDefault();
        const newTodo = { id: key, label: input, done: false };
        const updateList = [...toDo, newTodo];
        setToDo(updateList);
        updateToDoApi(updateList);
        setKey(key + 1);
        setInput("");
    }

    const handleRemove = (id) => {
        const updatedToDo = toDo.filter((task) => task.id !== id);
        setToDo(updatedToDo);
        updateToDoApi(updatedToDo)
    }

    const fetchToDo = async (endpoint, config) => {
        const response = await fetch(endpoint);
        const toDoData = await response.json();
        setToDo(toDoData);

    }

    useEffect(() => {
        fetchToDo("https://playground.4geeks.com/apis/fake/todos/user/grokhen", { method: "GET" })
    }, [])

    const updateToDoApi = async (upDateData) => {
        try {
            const response = await fetch("https://playground.4geeks.com/apis/fake/todos/user/grokhen", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(upDateData)
            });
            if (!response.ok) {
                throw new Error('Error al enviar solicitud PUT');
            }
            const newData = await response.json();
            console.log(newData);
        } catch (error) {
            console.error('Error al enviar solicitud PUT:', error);
        }
    }


    return (
        <>
            <h1>Tareas pendientes</h1>
            <AddToDo input={input} newTask={newTask} sendData={sendData} />
            <ul>
                <ToDo toDo={toDo} handleRemove={handleRemove} />
            </ul>
        </>
    )
}


export default Home;
