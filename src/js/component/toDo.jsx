import React from "react";

const ToDo = ({ toDo, handleRemove, handleDone }) => {

    return (
        <>

            {toDo.map((task) =>
                (<div className={task.done ? "row justify-content-center completed" : "row justify-content-center"}>
                    <div className="col-6 text-start" onClick={() => handleDone()}>
                        {task.label}
                    </div>
                    <div className="col-4"><i className="fa fa-trash" onClick={() => handleRemove(task.id)}></i>
                    </div>
                </div>)
            )}
        </>
    )
}

export default ToDo;