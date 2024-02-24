// import React, { useState } from 'react'

function DeleteOne({onDelete}) {

  return (
    <>
       <td><button onClick={onDelete}>Delete</button></td>            
    </>
  )
}

export default DeleteOne