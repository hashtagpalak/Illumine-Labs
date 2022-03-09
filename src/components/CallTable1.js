import React, {Component} from "react";
import Button from "./Button";
// import CallButton1 from "./CallButton1";

class CallTable1 extends Component{
    constructor(){
      super();
      this.state = {
          details1: [{name: "Abc", email:'Abc@gmail.com', phone: '12345XXX', address: 'Place Abc', },
          {name: "Abc", email:'Abc@gmail.com', phone: '12345XXX', address: 'Place Abc' },
          {name: "Abc", email:'Abc@gmail.com', phone: '12345XXX', address: 'Place Abc'}
        ],

         details2: [{name: 'Pqrst', email:'pqrst@gmail.com', phone: 'XXX67890', address: 'Place Pqrst', },
          {name: 'Pqrst', email:'pqrst@gmail.com', phone: 'XXX67890', address: 'Place Pqrst' },
          {name: 'Pqrst', email:'pqrst@gmail.com', phone: 'XXX67890', address: 'Place Pqrst'}
        ],
        tableDetails:[{name: "Abc", email:'Abc@gmail.com', phone: '12345XXX', address: 'Place Abc', },
        {name: "Abc", email:'Abc@gmail.com', phone: '12345XXX', address: 'Place Abc' },
        {name: "Abc", email:'Abc@gmail.com', phone: '12345XXX', address: 'Place Abc'}
      ],
        button1: 'Edit',
        button2: 'Delete',
        buttonTitle: 'Show Table 2'
      }
    }

    clickState() {
      const {buttonTitle, details1, details2, button1, button2} = this.state
      if (buttonTitle === 'Show Table 2'){
        
        this.setState({
          buttonTitle: 'Show Table 1',
          tableDetails: details2
        })
      }
      else {
       
      this.setState({
        buttonTitle: 'Show Table 2',
        tableDetails: details1
      })
      }
    };
  
    render(){
      const {name,email,phone,address,buttonTitle,tableDetails,button1,button2} = this.state
        return(
        <>
          <table>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone No.</th>
                <th>Address</th>
                <th>Actions</th>
              </tr>
              
              {
                tableDetails.map(item => 
                <tr>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.phone}</td>
                  <td>{item.address}</td>
                  <span>
                    <Button onButtonClick={() => this.clickState()}title={button1}/>
                    <Button onButtonClick={() => this.clickState()}title={button2}/>
                  </span>   
                </tr>
                )
              }
            </table>

        <br></br>
        <span>
          <Button onButtonClick={() => this.clickState()}title={buttonTitle}/>
        </span>
        </>
        );
      }
  }

  export default CallTable1;