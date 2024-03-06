import React from "react";

const AddToDo = ({ input, newTask, sendData }) => {
    return (
        <form onSubmit={sendData}>
            <input
                className="addToDo mt-3"
                type="text"
                placeholder="Agregar tarea"
                value={input}
                onChange={newTask}
            />
            <button type="submit" className="button">
                Añadir tarea
            </button>
        </form>
    );
};

export default AddToDo;