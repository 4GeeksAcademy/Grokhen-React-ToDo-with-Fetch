import React, { useState } from "react";

const ToDo = ({toDo}) => {

    
    
    return (
        <>
            {toDo.map((task, index) =>
                    (<li key={index}>{task}<span><i className="fa fa-trash"></i></span></li>)
                )}
        </>
    )
}

export default ToDo;