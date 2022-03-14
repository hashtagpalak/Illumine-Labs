import React from 'react';
import firebase from './fbConfig';
import '../App.css';

function Todo({ todo }) {

    // const onComplete = () => {
    //     const todoRef = firebase.database().ref('Todo').child(todo.id);
    //     todoRef.update({
    //       complete: !todo.complete,
    //    });
    // };
    
    const onDelete = () => {
        const todoRef = firebase.database().ref('Todo').child(todo.id);
        todoRef.remove();
    };

    
    return (
        <>
            <ul>
                <li>
                    {todo.addKaro}
                    <button onClick={onDelete}>X</button>
                </li>
            </ul>
        </>
    );
}

export default Todo;