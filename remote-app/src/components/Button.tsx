import React from 'react';
interface ButtonProps {
  text: string;
  onClick?: ()=> void;
}
const Button : React.FC<ButtonProps> = ({text, onClick}) => {

    const divStyle= {
    border: '2px solid green',
    margin: '10px',
    padding: '10px'
  }

 return (
  <div style={divStyle}>
  <button onClick={onClick} >{text}</button>
  </div>
 )
}

export default Button