import React from 'react'
import './Style.css'

function Second(props) {



  return (
    <div className="hello">
        <div>
        {props.name}
        </div>
       <div>
       <input type="text" placeholder="Enter your name" onChange={props.handleChange} />
       </div>
    </div>
  )
}

export default Second