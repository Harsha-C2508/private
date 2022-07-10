import React from 'react'
import { useEffect, useState } from "react";
import { Link,  useSearchParams } from "react-router-dom";


function User() {
  const [data, setData] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(Number(searchParams.get("page")) || 1);
  const [text, setText] = useState(searchParams.get("q") || "");

  useEffect(() => {
    fetch(`https://reqres.in/api/users?page=${page}&q=${text}`)
      .then((res) => res.json())
      .then((res) => {
        setData(res.data);
      });
  }, [page,text]);

  useEffect(() => {
    setSearchParams({
      page,
      q: text
    });
  }, [page,text,setSearchParams]);

  return (
    <div>
      <h3>Users Page</h3>
      <div>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="query"
        />
      </div>
      <div>
        <button disabled={page === 1} onClick={() => setPage(1)}>
          1
        </button>
        <button disabled={page === 2} onClick={() => setPage(2)}>
          2
        </button>
      </div>
      {data.map((user) => (
        <div key={user.id}>
          <h3> {user.first_name}</h3>
          <img width="100px" src={user.avatar} alt={user.id} />
          <div>
            <Link to={`/users/${user.id}`}>Show more details</Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default User;