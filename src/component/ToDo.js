import React from 'react'
import Todolist from './Todolist'
import '../styles/ToDo.css'


const Todo = () => {

return (
  <React.Fragment>
    <div className="main-div-todo" dir="rtl">
      
      <br />
      <div id="notes">
      <Todolist title={'SHOPPING LIST'} />
      </div>
    </div>
  </React.Fragment>
);

}
    
export default Todo;