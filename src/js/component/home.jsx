import React, { useEffect, useState } from "react";
import AddToDo from "./addToDo";
import ToDo from "./toDo";


const Home = () => {
    const [toDo, setToDo] = useState([]);
    const [input, setInput] = useState("");
    const newTask = (e) => {
        setInput(e.target.value);
    }
    const sendData = (e) => {
        e.preventDefault();
        const newTodo = { label: input, done: false };
        const updateList = [...toDo, newTodo];
        updateToDoApi(updateList);
        setToDo(updateList);
        setInput("");
    }

    const handleDone = (index) => {
        const toDoDone = toDo;
        toDoDone[index].done = !toDoDone[index].done;
        setToDo(toDoDone);
        updateToDoApi(toDoDone);
        data();
    };

    const handleRemove = (index) => {
        const updatedToDo = toDo.filter((_, i) => i !== index);
        setToDo(updatedToDo);
        updateToDoApi(updatedToDo);
    }

    const fetchToDo = async (endpoint, config) => {
        const response = await fetch(endpoint);
        const toDoData = await response.json();
        setToDo(toDoData);
    }
    const data = () => {
        fetchToDo("https://playground.4geeks.com/apis/fake/todos/user/grokhen")
    }

    useEffect(() => {
        data()
    }, [])

    const updateToDoApi = async () => {
        try {
            const response = await fetch("https://playground.4geeks.com/apis/fake/todos/user/grokhen", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(toDo)
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
            <div className="container text-center">
                <ToDo toDo={toDo} handleRemove={handleRemove} handleDone={handleDone} />
            </div>
        </>
    )
}


export default Home;
