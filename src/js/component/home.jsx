import React, { useEffect, useState } from "react";
import AddToDo from "./addToDo";
import ToDo from "./toDo";

const Home = () => {
    const [toDo, setToDo] = useState([]);
    const [input, setInput] = useState("");
    const [account, setAccount] = useState(false);

    useEffect(() => {
        fetch("https://playground.4geeks.com/apis/fake/todos/user/grokhen", {
          method: "POST",
          body: JSON.stringify([]),
          headers: {
            "Content-Type": "application/json",
          },
        });
      }, [account]);

    const newTask = (e) => {
        setInput(e.target.value);
    };

    const sendData = (e) => {
        e.preventDefault();
        const newTodo = { label: input, done: false };
        const updateList = [...toDo, newTodo];
        setToDo(updateList);
        updateToDoApi(updateList);
        setInput("");
    };

    const handleDone = (index) => {
        const updatedToDo = [...toDo];
        updatedToDo[index].done = !updatedToDo[index].done;
        setToDo(updatedToDo);
        updateToDoApi(updatedToDo);
    };

    const handleRemove = (index) => {
        const updatedToDo = toDo.filter((_, i) => i !== index);
        setToDo(updatedToDo);
        updateToDoApi(updatedToDo);
    };

    const fetchToDo = async (endpoint) => {
        try {
            const response = await fetch(endpoint);
            if (response.status === 400) {
                setAccount(true);
                throw new Error("Error al obtener los datos");
            }
            if (!response.ok) {
                throw new Error("Error al obtener los datos");
            }
            const toDoData = await response.json();
            setToDo(toDoData);
        } catch (error) {
            console.error("Error al obtener los datos:", error);
        }
    };

    const updateToDoApi = async (data) => {
        try {
            const response = await fetch(
                "https://playground.4geeks.com/apis/fake/todos/user/grokhen",
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(data),
                }
            );
            if (!response.ok) {
                throw new Error("Error al enviar solicitud PUT");
            }
            console.log("Datos actualizados con éxito");
        } catch (error) {
            console.error("Error al enviar solicitud PUT:", error);
        }
    };

    useEffect(() => {
        fetchToDo("https://playground.4geeks.com/apis/fake/todos/user/grokhen");
    }, []);

    return (
        <>
            <h1>Tareas pendientes</h1>
            <AddToDo input={input} newTask={newTask} sendData={sendData} />
            <div className="container text-center">
                <ToDo toDo={toDo} handleRemove={handleRemove} handleDone={handleDone} />
            </div>
        </>
    );
};

export default Home;
