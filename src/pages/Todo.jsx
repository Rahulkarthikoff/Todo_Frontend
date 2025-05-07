import React, { useEffect, useState } from 'react'
import axios from 'axios'
const Todo = () => {
    const [todo, setTodo] = useState("");
    const [db, setDb] = useState([])
    function post() {
        axios.post("https://todobackend-owv5.onrender.com/api/post", { todo })
            .then(() => {
                alert("data has been stored")
                get();
                setTodo("")
            })
            .catch((err) => {
                console.error(err);

            })
    }
    function get() {
        axios.get("https://todobackend-owv5.onrender.com/api/get")
            .then((res) => {
                setDb(res.data)
            })
            .catch((err) => {
                console.error(err)
            })
    }
    // console.log(db);

    function update(data, id) {
        axios.put(`https://todobackend-owv5.onrender.com/api/update/${id}`, { todo: data })
            .then(() => {
                get();
            })
            .catch((err) => {
                console.error(err);

            })
    }

    function del(id) {
        axios.delete(`https://todobackend-owv5.onrender.com/api/delete/${id}`)
            .then(() => {
                get();
            })
            .catch((err) => {
                console.error(err);
            })

    }

    useEffect(()=>{
        get()
    },[])


    return (
        <div style={{ margin: '100px' }}>
            <label htmlFor="todo">Todo</label>
            <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)} />
            <button onClick={post}>Post</button>
            <ul>
                {
                    db.map((it) => (
                        <li key={it._id}>{it.todo}<button onClick={() => {
                            const data = prompt("enter the data").trim();
                            update(data, it._id)
                        }}>up</button>            <button onClick={() => del(it._id)}>del</button>    </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Todo