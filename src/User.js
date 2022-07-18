import React from 'react';
import './User.css';



function User(props) {

    const [style, setStyle] = React.useState({
        margin:"0px"
    });

    const handleMouseEnter = () => {
        console.log('mouse enter');
        setStyle({
            margin:"20px",
            border:"1px solid black",
            shadow:"0px 0px 10px black"
        });
    }

    const handleMouseLeave = () => {
        console.log('mouse leave');
        setStyle({
            margin:"0px"
        });
    }

  return (
    <>
    <div className="card" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={style}>
        <div className="card-body">
            <h5 className="card-title">{`${props.prefix} ${props.firstName} ${props.lastName} ${props.suffix}`}</h5>
            <p className="card-text">{props.jobTitle}</p>
            <p className="card-text">{props.jobArea}</p>
            <p className="card-text">{props.phone}</p>
        </div>
    </div>
    </>
  )
}

export default User;