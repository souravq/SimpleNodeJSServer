import { Outlet } from "react-router-dom";
import Header from "./components/Header.jsx";

export default function App() {
  return (
    <div style={{textAlign:"center"}}>

      <Header/>
      <Outlet></Outlet>
    </div>
  )
}
