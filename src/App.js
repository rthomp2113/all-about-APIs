import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './App.css';

function App() {
  const [users, setUsers] = useState();
  const [posts, setPosts] = useState();


  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(response => {
      const userData = response.data;
      setUsers(userData);
    })
  }, [])

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
      const postResponseData = response.data;
      setPosts(postResponseData);
    })
  }, [])

  return (
    <div className="App">
      <h1>User Accounts</h1>
      {!users && 'loading'}
      {users && users.map(user => {
        const { id, name, username, email, address : {city}} = user;
        const userDataString = `id - ${id} | username - ${username} | name - ${name} | email - ${email} | city - ${city}`
        return <h6 key={id}>{userDataString}</h6>
      })} 
     <h1>User Posts</h1>
     {!posts && 'loading'}
     {posts && posts.map(post => {
        const { id, body } = post;
        return <h6 key={id}>{`User ${id} said:  ${body}`}</h6>
     })}
    </div>
  );
}

export default App;
