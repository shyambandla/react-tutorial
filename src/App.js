import logo from './logo.svg';
import './App.css';
import First from './First';
import Second from './Second';
import { useState } from 'react';


function App() {

  const [name,setName] = useState('');
  const [name2,setName2] = useState('');

  const handleChange = (e) => {
    setName(e.target.value);
  }

  const handleChange2 = (e) => {
    setName2(e.target.value);
  }




  return (
    <>
   <div> 
    <First name={name2} handleChange={handleChange} />
   </div>
   <div> 
    <First name={name2} handleChange={handleChange} />
   </div>
   <div> 
    <First name={name2} handleChange={handleChange} />
   </div>
   <div>
<Second name={name} handleChange={handleChange2}/>
   </div>
   <div>
<Second name={name} handleChange={handleChange2}/>
   </div>
   <div>
<Second name={name} handleChange={handleChange2}/>
   </div>
    </>
  );
}

export default App;
