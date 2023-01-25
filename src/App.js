import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './App.css';

function App() {
  const [users, setUsers] = useState();

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(response => {
      const userData = response.data;
      setUsers(userData);
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
    </div>
  );
}

export default App;
