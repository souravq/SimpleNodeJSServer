import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';


export default function Phones() {
  const phoneData = useLoaderData();
// console.log(phoneData);
  return (
    <div>
      <h1>All Phones Data</h1>
      <div style={{display:'flex',flexWrap:"wrap",gap:"10px"}}>
      {
      phoneData.map((data) => (
        <React.Fragment key={data.id}>
          <div style={{flex:"1 0 30%", border:"2px solid red", padding:"10px", borderRadius:"10px"}}>
            <div>
              <img src={data.image} alt="phone image"/ >
            </div>
            <h3>{data.name}</h3>
            <Link to={`/phones/${data.id}`}><button style={{backgroundColor:"purple",color:"white", padding:"10px", border:"2px solid purple", borderRadius:"10px", cursor:"pointer"}}>View Deatils</button></Link>
          </div>
        </React.Fragment>
      ))
      }
      </div>
      
    </div>
  );
}
