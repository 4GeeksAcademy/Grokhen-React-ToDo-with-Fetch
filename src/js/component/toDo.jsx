import React from "react";

const ToDo = ({ toDo, handleRemove, handleDone }) => {
    return (
        <>
            {toDo.map((task, index) => (
                <div key={index} className="row justify-content-center">
                    <div className="col-6 text-start" onClick={() => handleDone(index)}>
                        <span className={task.done ? "completed" : ""}>{task.label}</span>
                    </div>
                    <div className="col-4">
                        <i className="fa fa-trash" onClick={() => handleRemove(index)}></i>
                    </div>
                </div>
            ))}
        </>
    );
};

export default ToDo;