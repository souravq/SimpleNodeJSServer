import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Header from "./components/Header.jsx";

export default function App() {

  const navigate =  useNavigate();
  React.useEffect(()=>{
    navigate("/phones");
  },[navigate])
  
  return (
    <div style={{textAlign:"center"}}>
      <Header/>
      <Outlet></Outlet>
    </div>
  )
}
