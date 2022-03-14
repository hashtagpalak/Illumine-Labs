import React from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h4><u>TO-DO's</u></h4>
        <Form />
        <TodoList />
      </header>
    </div>
  );
}

export default App;

// class App extends Component {
//   constructor() {
//     super();
//     this.state = { list: [],}
//   }
  
//   onAdd = () => {
//     if (document.getElementById('txt').value) {
//       const lal = [...this.state.list, document.getElementById('txt').value];
//       this.setState({ list: lal });
//       document.getElementById('txt').value = '';
//     }
//   }
  
//   onWrite = (e) => {
//     if (e.key == 'Enter' && e.target.value) {
//       const lal = [...this.state.list, e.target.value];
//       this.setState({ list: lal });
//       e.target.value = '';
//     }
//   }
  
//   onDel = (e) => {
//     e.target.parentNode.remove();
//   }
  
//   render() {
//     return (
//       <div>
//         <header className="App-header">
//         <h4>To-do's</h4>
//         <div>
//           <input type="text" id="txt" onKeyPress={this.onWrite} placeholder="todo...." /> <button onClick={this.OnAdd}>add</button>
//           </div>
//           <br />
//           <div>
//             <ul>
//             {
//                 this.state.list.map(e => <li>{e} <button id="del" onClick={this.onDel}>×</button></li>)
//             }
//             </ul>
//           </div>
//         </header>
//       </div>
//     )
//   }
// }
// export default App;