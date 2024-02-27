import React, { useState} from "react";
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
		console.log(input, toDo);
		setToDo([...toDo, input]) 
	}
    return (
        <>
            <form onSubmit={sendData}>
                <input className="addToDo mt-3" type="text" placeholder="Agregar tarea" value={input} onChange={newTask} />
                <button type="submit" className="btn btn-primary">Añadir tarea</button>
            </form>
			<ul>
            {toDo.map((task, index) =>
                    (<li key={index}>{task}</li>)
                )}
			</ul>
        </>
    )
}


export default Home;
