import React from "react";

const ToDo = ({toDo}) => {

    
    return (
        <>
            {toDo.map((task) =>
                    (<li key={task.id}>{task.label} <span><i className="fa fa-trash"></i></span></li>)
                )}
        </>
    )
}

export default ToDo;