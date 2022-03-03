import React from 'react';
import Button from './button';

class Tables02 extends React.Component{
  constructor(){
    super();
    this.state = {name: "Abc",email:'email',phone:6789, address: 'abc', button1: 'Edit', button2: 'Delete'};
    // this. clickState = this.clickState.bind(this)
  }
  clickState(value) {
    // alert('You clicked this button, '+value);
    if (value === '1'){
      this.setState({
        button1:"Hello button 1",
       });
    }
    else if (value === '2'){
      this.setState({
        button2:"Hello button 2",
       });
    }
  } 

  render(){
    const {name,email,phone,address,button1,button2} = this.state
      return(
        <table>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone No.</th>
              <th>Address</th>
              <th>Actions</th>
            </tr>
            <tr>
              <td>{name}</td>
              <td>{email}</td>
              <td>{phone}</td>
              <td>{address}</td>
              <span>
              {/* <button onClick={() => this.clickState(name)}>Edit</button>
              <button onClick={() => this.clickState(name)}>Delete</button> */}
              <Button onButtonClick={() => this.clickState('1')}title={button1}/>
              <Button onButtonClick={() => this.clickState('2')}title={button2}/>
            </span>
            </tr>
          </table>
      );
    }
}

// ReactDOM.render(<Tables02 name='Abc'email='abc@gmail.com'phone='12345' place='Place Abc'/>,
// document.getElementById('root'));

export default Tables02;
