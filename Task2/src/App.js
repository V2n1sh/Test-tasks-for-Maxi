import React, {useEffect, useState} from 'react';
import './App.css';
import Card  from './components/cards/card';
import axios from 'axios';


function App () {
    const [Users, setUsers] = useState([]);
    useEffect(() => {
      axios.get("https://randomuser.me/api/?results=5").then((Response) => {
        setUsers(Response.data.results);
      })
    }, [])
  

  return (
    <div className="App">
      <div className="all-cards">
      {Users.map((user, i) => (<Card key={i} picture={user.picture.medium} gender={user.gender} name={user.name} date={user.dob.date} city={user.location.city} country={user.location.country}/>))}
      </div>
    </div>
  );
}


export default App;