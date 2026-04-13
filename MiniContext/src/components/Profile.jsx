import {React,useContext} from 'react'
import UserContext from '../context/userContext'

export default function Profile() {
    const user=useContext(UserContext);
  return (
    <>
    <div>Profile</div>
    <div >
        <h3>Name:{user.name}</h3>
     <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur impedit minus nemo voluptatum quod repellat mollitia veniam aliquam itaque, eaque ad deserunt voluptatibus placeat totam, odit molestias quam quos? Et?</p>
    </div>
    </>
    
  )
}
