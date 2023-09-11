import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';


export default function Phones() {
  const phoneData = useLoaderData();

  return (
    <div>
      <h1>All Phone Data</h1>
      {phoneData.map((data) => (
        <React.Fragment key={data.id}>
          <h3>
            <Link to={`/phones/${data.id}`}>{data.name}</Link>
          </h3>
        </React.Fragment>
      ))}
    </div>
  );
}
