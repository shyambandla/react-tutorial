import React from 'react';

function Grid() {

    const [users, setUsers] = React.useState([
        {
            id:1,
            name: 'John Doe',
            job: 'Software Engineer',
        },
        {
            id:2,
            name: 'Jane Doe',
            job: 'Software Engineer',
        },
        {
            id:3,
            name: 'Shyam',
            job: 'Developer',
        },
        {
            id:4,
            name: 'Sita',
            job: 'Developer',
        },
        {
            id:5,
            name: 'Raj',
            job: 'Developer',
        }
        

    ]);


  return (
    <>
    <div className="container">
        <div className="row">
        <div className="col-12 text-center">
            <div className="my-5" style={{fontSize: '25px'}}>
            Indicative list of prominent flag suppliers
            </div>
        </div>
        </div>
        
        {
            users.map(user => {
                return (
                    <div className="row">
            <div className="col-6 border p-3 rounded" >
                <div className="">
                {user.name} 
                </div>
            </div>
            <div className="col-6 border p-3 rounded">
                <div className="">
                {user.job}
                </div>
            </div>
        </div>
                )
            })
        }
        
        
    </div>
    </>
  )
}

export default Grid;