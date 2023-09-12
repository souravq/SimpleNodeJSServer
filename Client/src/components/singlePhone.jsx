import { useLoaderData } from 'react-router-dom'

export default function SinglePhone() {
    const singlePhoneData = useLoaderData();

  return (
    <div style={{border:"2px solid tomato", borderRadius:"10px", width:"500px", margin:"100px auto", padding:"20px"}}>
        <div>
          <img src={singlePhoneData.image} alt="Phone Image"/>
        </div>
        <div>
          <h3>Phone Model: {singlePhoneData.name}</h3>
          <p>Phone Price: ${singlePhoneData.price} </p>
          <p>Phone Details: {singlePhoneData.description}</p>
        </div>
    </div>
  )
}
