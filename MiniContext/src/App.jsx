import { React,useState } from 'react'
import './App.css'
import UserContext from './context/userContext';
import Profile from './components/Profile';

function App() {
  const [user, setUser] = useState({
    name:"Kshitij",
    loggedIn:true
  });

  return (
    <>
    <UserContext.Provider value={user}>
     <Profile/>
    </UserContext.Provider>
    </>
  )
}

export default App
