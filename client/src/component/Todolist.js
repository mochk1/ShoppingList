import React, { useState, useEffect } from 'react'
import TodoItem from './TodoItem'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import '../styles/ToDo.css'
import { nanoid } from 'nanoid'
import axios from 'axios'


const Todolist = (props) => {

  const [value, setValue] = useState('')
  const [todos, setTodos] = useState([])

  useEffect(() => {
    axios.get('/api')
      .then(res => setTodos(res.data))
  }, [])




  const addvalue = async (e) => {

    if (value !== '') {

      axios.post('/addtodo', { todo: value, time: Date.now() })
        .then(res => setTodos(res.data))
      console.log(todos)

      setValue('');
    }
    else alert('Field Cannot Be Empty')
  }



  const deleteitem = (id) => {
    /*     setTodos(todos.filter((element)=>(element !== item))) */
    axios.post('/deletetodo', { todoid: id })
      .then(res => setTodos(res.data))
  }


  return (
    <div id="todos-main">
      <h1>{props.title}</h1>
      <div className="todos-container">
        <div>
          <div id="input">
            <input
              value={value}
              type="text"
              onChange={(e) => setValue(e.target.value)}
              placeholder="הוסף"
              className="textinput"
            ></input>
            <button className="btn" onClick={addvalue}>
              <FontAwesomeIcon className="i" icon={faPlus} />
            </button>
          </div>
        </div>
        {todos.map((item) => (
          <TodoItem
            key={nanoid()}
            _id={item._id}
            item={item.todo}
            deleteitem={deleteitem}
          />
        ))}
      </div>
    </div>
  )
}



export default Todolist