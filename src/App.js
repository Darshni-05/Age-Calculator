import React, { useState } from 'react';

function App() {
  const [dob, setDob] = useState('');
  const [age, setAge] = useState('');

  const calculateAge = () => {
    const today = new Date();
    const birthDate = new Date(dob);
    const ageInMilliseconds = today - birthDate;
    const ageInYears = Math.floor(ageInMilliseconds / (365.25 * 24 * 60 * 60 * 1000));
    setAge(ageInYears);
  };

  const handleInputChange = (e) => {
    setDob(e.target.value);
  };
  var mydivstyle = {
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        textAlign:"center",
        border: "2px solid black",
        padding: "16px",
        boxShadow: "0 2px 14px rgba(0, 0, 0, 0.8)"
  }
  var mybuttonstyle = {
    backgroundColor:"#000",
    color:"white",
    border:"0px",
    width:"120px",
    height:"40px"
  }
  var myinputstyle = {
    width:"350px",
    height:"30px",
    fontFamily: "serif"
  }
  return (
    <div style={mydivstyle} className="App">
      <h1 style={{fontFamily: "fantasy"}}>Age Calculator</h1><br/>
      <h5 style={{fontFamily: "serif"}}>Enter your date of birth</h5>
      <input style={myinputstyle} type="date" id="dob" value={dob} onChange={handleInputChange} /><br/><br/>
      <button style={mybuttonstyle} onClick={calculateAge}>Calculate Age</button>
      {age && <h2 style={{fontFamily: "serif"}}>You are {age} years old</h2>}
    </div>
  );
}

export default App;