import React from "react";
import "../../pages/task/Task.scss";

export default function Item({text, remove, update}) {
    return (
        <div className="task-item">
            <div className="task-text">{text}</div>
            <div className="task-icons">
                <i className="ri-pencil-fill" onClick={update}></i>
                <i className="ri-delete-bin-7-fill" onClick={remove}></i>
            </div>
        </div>
    )
}
