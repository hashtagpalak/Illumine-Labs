import React from "react";

function clickState() {
    alert('You clicked the button');
}

function Details(){
    return(
        <tr>
            <td>Xyz</td>
            <td>Xyz@gmail.com</td>
            <td>67890</td>
            <td>Place Xyz</td>
            <span>
              <button onClick={clickState}>Edit</button>
              <button onClick={clickState}>Delete</button>
            </span>
        </tr>
    )
}

export default Details;