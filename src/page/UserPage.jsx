import React from 'react'
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function UserPage() {
  const [data, setData] = useState({});
  const params = useParams();

  useEffect(() => {
    fetch(`https://reqres.in/api/users/${params.user_id}`)
      .then((res) => res.json())
      .then((res) => {
        setData(res.data);
      });
  }, [params.user_id]);
  console.log(data);
  return (
    <div>
      <h1>User Single Page</h1>
      <h3>
        {" "}
        Name: {data.first_name} {data.last_name}
      </h3>
      <img src={data.avatar} alt={data.first_name} />
      <div>
        <Link to="/users">Go back</Link>
      </div>
    </div>
  );
}

export default UserPage;
