import React from "react";

function clickState() {
    alert('You clicked the button');
}

// const data = [
//     this.name = 'Xyz', 
//     this.email = 'xyz@getDefaultNormalizer.com', 
//     this.phone = 67890, 
//     this.address = 'Place Xyz'
// ]

function Details(){
    return(
        <tr>
            <td>Abc</td>
            <td>abc</td>
            <td>abc</td>
            <td>abc</td>
            <td><span>
              <button onClick={clickState} >Edit</button>
              <button onClick={clickState} >Delete</button>
            </span></td>
        </tr>
    )
}

export default Details;