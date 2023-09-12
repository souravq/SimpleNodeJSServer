import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div style={{display:"flex",justifyContent:"space-around",alignItems:"center"}}>
      <div style={{flex:"1 0 20%"}}>
        <Link to="/phones"><h1>Phone World</h1></Link>
      </div>
      <div style={{display:"flex", flex:"1 0 50%", justifyContent:"space-evenly"}}>
      <Link to="/phones"><p>Home</p></Link>
      <Link to="/phones"><p>All Phones</p></Link>
      <Link to="/phones"><p>About Us</p></Link>
      <Link to="/phones"><p>Contact Us</p></Link>
      <Link to="/phones"><p>Blog</p></Link>
      </div>
    </div>
  )
}
