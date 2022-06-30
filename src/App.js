import './App.css';
import {useState, useEffect} from 'react';
import axios from 'axios';
import Item from './components/item';

function App() {
    const [text, setText] = useState('');
    const [task, setTask] = useState([]);
    const [isUpdating, setUpdating] = useState('');

    useEffect(() => {
        axios.get('http://localhost:5000/get-task')
            .then((res) => setTask(res.data))
            .catch((err) => console.log(err))
    })

    const addUpdate = () => {
        if(isUpdating === '') {
            axios.post('http://localhost:5000/save-task', {text})
                .then((res) => {
                    console.log(res.data)
                    setText('');
                })
                .catch((err) => console.log(err))
        } else{
            axios.post('http://localhost:5000/update-task', {_id: isUpdating, text})
                .then((res) => {
                    console.log(res.data)
                    setText('');
                    setUpdating('');
                })
                .catch((err) => console.log(err))
        }
    }

    const deleteTask = (_id) => {
        axios.post('http://localhost:5000/delete-task', {_id})
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
        <div className="App">
            <div className="container">
                <h1>Task</h1>

                <div className="top">
                    <input type="text"
                           placeholder='Write Something...'
                           value={text}
                           onChange={(e) => setText(e.target.value)}/>
                    <div className="add" onClick={addUpdate}>{isUpdating ? 'Update' : 'Add'}</div>
                </div>
                <div className="list">
                    {task.map(item => <Item
                        key={item._id}
                        text={item.text}
                        remove={() => deleteTask(item._id)}
                        update={() => updateTask(item._id, item.text)} />)}
                </div>
            </div>
        </div>
    );
}

export default App;
