import { useLoaderData } from 'react-router-dom'

export default function SinglePhone() {
    const singlePhoneData = useLoaderData();

  return (
    <div>
        
            <h3>{singlePhoneData.name}</h3>
        
    </div>
  )
}
