import React from "react";

const ToDo = ({toDo, handleRemove}) => {
    
    return (
        <>
            {toDo.map((task) =>
                    (<li key={task.id}>{task.label} <span><i className="fa fa-trash" onClick={() => handleRemove(task.id)}></i></span></li>)
                )}
        </>
    )
}

export default ToDo;