import React, { useState } from 'react';
import firebase from './fbConfig';

function Form(){
  const [addKaro, setAddKaro] = useState('');

  const handleOnChange = (e) => {
    setAddKaro(e.target.value);
  };
  const createTodo = () => { 
    const todoRef = firebase.database().ref('Todo');//CORECT METHOD
    const todo = {
      addKaro,
      complete: false,
    };

    todoRef.push(todo); 
  };

  return (
    <div>
      <input type="text" onChange={handleOnChange} value={addKaro} />
      <button onClick={createTodo}>Add Todo</button>
    </div>
  );
}

export default Form;