
// import React, { useEffect } from "react";
// import {useDispatch, useSelector } from "react-redux";
// import { setKycResult, type RootState } from "../store";
const Header: React.FC = () => {

    const divStyle= {
    border: '2px solid green',
    margin: '10px',
    padding: '10px'
  }
  return(
    <header style={divStyle}>
      <h1>Remote Header</h1>
    </header>
  )
}

export default Header;