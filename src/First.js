import React from 'react'
import './Style.css'

function First({name,handleChange}) {

  

   

   

  return (
    <div className='hello' >
        <div>
        {name}
        </div>
       <div>
       <input type="text" placeholder="Enter your name" onChange={handleChange} />
       </div>
    </div>
  )
}



export default First