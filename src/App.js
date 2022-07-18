import logo from './logo.svg';
import './App.css';
import First from './First';
import Second from './Second';
import { useEffect, useState } from 'react';
import axios from 'axios';
import User from './User';

function App() {

 
  const [users, setUsers] = useState([]);

  useEffect(() => {
    
    axios.get('http://localhost:3000/users').then(res => {
      setUsers(res.data);
    }).catch(err => {
      console.log(err);
    });


  }, []);

 



  return (
    <>
  <div>
    {

   
      users.map(user => {
        return <User key={user.phone} prefix={user.prefix} firstName={user.firstName} 
        lastName={user.lastName} suffix={user.suffix}
        jobArea={user.jobArea} jobTitle={user.jobTitle} 
        phone={user.phone} />
      } )
    }
  </div>
    </>
  );
}

export default App;
