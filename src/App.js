import { useState, useEffect } from 'react';
import './App.css';
import AddUser from './components/AddUser';

import User from './components/users/User';


function App() {

  const [users, setUsers] = useState([]);
  const [showForm, setShowForm] = useState(false);

  let showFormHandler = () => {
    setShowForm(!showForm);
  }

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=10")
      .then(res => res.json())
      .then(users => {
        let rawUsers = users.results;

        let filteredUser = rawUsers.map(user => {
          return {
            uuid: user.login.uuid,
            name: `${user.name.first} ${user.name.last}`,
            phone: user.phone,
            cell: user.cell,
            image: user.picture.thumbnail
          }

        });
        setUsers(filteredUser);
      })
      .catch(err => console.log(err));
  }, []);

  const removeUserHandler = (uuid) => {
    let remainUsers = users.filter(usr => usr.uuid !== uuid);
    setUsers(remainUsers);
  }

  const addUserHandler = (user) => {
    let newUsers = [user, ...users];
    setUsers(newUsers);
    setShowForm(!showForm);
  }

  return (
    <div className="container">
       <button className='btn btn-info btn-sm my-4' onClick={showFormHandler}>Add User</button>
      {
        showForm && <AddUser addUser={addUserHandler} />
      }
      
      {
        users.map(usr => <User key={usr.uuid} user={usr} remove={removeUserHandler} />)
      }
    </div>
  );
}

export default App;
