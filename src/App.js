import React, { useEffect, useState } from 'react';
import './App.css';
import userApi from './Api/userApi';

const App = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const getUsers = async () => {
      const users = await userApi.getUsers();
      setUsers(users);
    };
    getUsers();
    // fetch('api')
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log('data: ', data);
    //     setUser(data);
    //   });
    console.log('useEffect ends...');
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {users.map((user) => (
          <li key={user.id}>
            <span>{user.id}</span>
            <span>{user.userId}</span>
            <span>{user.userPw}</span>
          </li>
        ))}
      </header>
    </div>
  );
};

export default App;
