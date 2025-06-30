import React,{useState} from 'react'
import Navbar from './Components/Navbar/Navbar.jsx'
import Symptoms_Bar from './Components/Symptoms_Bar/Symptoms_Bar.jsx';
import Disease from './Components/Disease/Disease.jsx';
function App() {
  const [symptomsSubmit,setSymptomsSubmit]=useState([]);
  const [symptoms,setSymptoms]=useState('');
  return (
    <div>
      <Navbar/>
      <Symptoms_Bar setSymptomsSubmit={setSymptomsSubmit} symptomsSubmit={symptomsSubmit} symptoms={symptoms} setSymptoms={setSymptoms}/>
      <Disease symptomsSubmit={symptomsSubmit}/>
    </div>
  )
}

export default App
