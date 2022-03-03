import React from "react";

const Button =(props) => {
 return (
     <button onClick={()=>props.onButtonClick()}>
        {props.title}
     </button>
 )
}

export default Button;