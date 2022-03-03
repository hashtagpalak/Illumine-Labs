import './App.css';
//import ReactDOM from 'react-dom';
import Tables01 from './components/table01';
import Tables02 from './components/table02';
import Button from './components/button';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <h4>Assignment - 01</h4>
        <h5>Table using functional component</h5>
        <Tables01/>
        <br></br>
        <Button title={'Assign'}/>
        <h5>Table using class component</h5>
        <Tables02/>
      </header>
    </div>
  );
}

export default App;

