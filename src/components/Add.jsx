// import React from 'react'
// import { useState } from 'react';
import './Navbar.css'
import DeleteOne from './DeleteOne';
import { fakeUserData } from '../api';
import { useDispatch } from "react-redux";
import { addUser } from '../store/slices/UserSlice';
import  { useSelector } from 'react-redux';
import { removeUser } from '../store/slices/UserSlice';
import { deleteUser } from '../store/slices/UserSlice';

function Add() {
   //  const [add, setAdd] = useState([]);
    const dispatch = useDispatch();
    const data = useSelector((state) => {
      return state.users;
    })
    
    const addfun = (payload) =>{
      //   setAdd(((prev) => [...prev, fakeUserData()]));
      // console.log(payload);
        dispatch(addUser(payload));
    }

   //  console.log(data);
   //  console.log(fakeUserData());

    const deleteOne = (value) => {
        // console.log("this is delete button" , value);
         dispatch(removeUser(value));
     }
    const deleteAll = () =>{
      //  setAdd([]);
         dispatch(deleteUser());
    } 
  return (
     <>
       <div className='add'>
         <table  className="addtext" >
            <thead  >
               <th id='text' >Please Click the add button</th>
               <th><button onClick={() => addfun(fakeUserData())} >Add</button></th>
            </thead>
            <tbody>
               {
                  data.map((content , index) =>{
                     return(
                    <tr key={index} >
                        <td>{content}</td>
                         <DeleteOne onDelete={() => deleteOne(index)} />
                     </tr>
                     )
                  })
               }
               
               <tr>
                  <td id='colone' colSpan="2" ><button id='btn' onClick={() => deleteAll()} >Delete All Data</button></td>
               </tr>
            </tbody>
         </table>
     </div>
     </>
  )
}

export default Add