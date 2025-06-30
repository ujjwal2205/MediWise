import React from 'react';
import './Symptoms_Bar.css';

function Symptoms_Bar({ symptoms, setSymptoms, symptomsSubmit, setSymptomsSubmit }) {

  const handleSubmit = () => {
    const symptomList = symptoms
      .split(',')
      .map(sym => sym.trim().toLowerCase());

    setSymptomsSubmit(symptomList);
  };
  const handleKeyDown=(event)=>{
    if(event.key=='Enter'){
      handleSubmit();
    }
  }
  const handleChange = (e) => {
    setSymptoms(e.target.value);
  };

  return (
    <div className='symptoms-container'>
      <textarea
        className="symptoms-textarea"
        placeholder="Enter your minimum 3 Valid Symptoms here (comma separated)"
        value={symptoms}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <br />
      <button onClick={handleSubmit}  className="submit-button">Submit</button>
    </div>
  );
}

export default Symptoms_Bar;

