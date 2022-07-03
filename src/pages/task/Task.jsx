import React, {useEffect, useState} from "react";
import axios from "axios";
import Item from "../../components/item/Item";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";


const Task = () => {

    const [text, setText] = useState('');
    const [task, setTask] = useState([]);
    const [isUpdating, setUpdating] = useState('');

    const baseUrl = 'https://task-sherkhan.herokuapp.com';

    useEffect(() => {
        axios.get(`${baseUrl}/get-task`)
            .then((res) => setTask(res.data))
            .catch((err) => console.log(err))
    })

    const addUpdate = () => {
        if (isUpdating === '') {
            axios.post(`${baseUrl}/save-task`, {text})
                .then((res) => {
                    console.log(res.data)
                    setText('');
                })
                .catch((err) => console.log(err))
        } else {
            axios.post(`${baseUrl}/update-task`, {_id: isUpdating, text})
                .then((res) => {
                    console.log(res.data)
                    setText('');
                    setUpdating('');
                })
                .catch((err) => console.log(err))
        }
    }

    const deleteTask = (_id) => {
        axios.post(`${baseUrl}/delete-task`, {_id})
            .then((res) => {
                console.log(res.data);
            })
            .catch((err) => console.log(err))
    }

    const updateTask = (_id, text) => {
        setUpdating(_id);
        setText(text);
    }

    return (
        <div className="home">
            <Sidebar/>
            <div className="homeContainer">
                <Navbar/>
                <h1 className="task-h1">Задание</h1>

                <div className="task-top">
                    <input className="task-input"
                           type="text"
                           placeholder='Напишите задание...'
                           value={text}
                           onChange={(e) => setText(e.target.value)}/>
                    <div className="task-add" onClick={addUpdate}>{isUpdating ? 'Обновить' : 'Добавить'}</div>
                </div>
                <div className="task-list">
                    {task.map(item => <Item
                        key={item._id}
                        text={item.text}
                        remove={() => deleteTask(item._id)}
                        update={() => updateTask(item._id, item.text)}/>)}
                </div>
            </div>
        </div>
    )
}

export default Task
