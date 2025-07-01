import React from 'react'
import './Disease.css';
import axios from "axios";
import { useEffect,useState } from 'react';
function Disease({symptomsSubmit}) {
    const[predictionResult,setPredictionResult]=useState([]);
    const[loading,setLoading]=useState(false);
    const[message,setMessage]=useState('');
    const url="https://mediwise-erhi.onrender.com"
    const fetchData=async()=>{
    if(symptomsSubmit.length==0){
      console.log("symptoms not Entered");
      return;
    }
    setLoading(true);
    try {
      const res=await axios.post(`${url}/api/predict`,{
        symptoms:symptomsSubmit
      });
      console.log(res.data);
      if(res.data.status){
        if(res.data.message){
         console.log(res.data.message);
         setMessage(res.data.message);
         setPredictionResult([]);
        }
        else{
          console.log(res.data.data);
          setPredictionResult([res.data.data]);
          setMessage('');
          
        }
      }
      else{
        console.log(symptomsSubmit);
        setMessage(res.data.message);
        setPredictionResult([]);
      }
    } catch (error) {
       console.log(error);
       setMessage(error.message);
       setPredictionResult([]);
    }
    setLoading(false);
  }
    useEffect(()=>{
      setPredictionResult([]);
      setMessage('');
      fetchData();
    },[symptomsSubmit]
    )
    
const openMaps = async (specialist) => {
  const mapsUrl =`https://www.google.com/maps/search/${specialist}+near+me`;
  window.open(mapsUrl, "_blank");
};
 const Result = predictionResult.length > 0 ? predictionResult[0] : null;
  return (
<div className="prediction-card">
  {loading?(
    <div className="loader-container">
          <div className="spinner"></div>
          <p className="loading-text">Analyzing symptoms and predicting disease...</p>
        </div>
  ):
  message?(<p>{message}</p>):
  Result?
  <>
  <h2>Predicted Disease: <span>{Result["Predicted Disease"]}</span></h2>
  <p><strong>Specialist:</strong>{Result["Doctor Type"]}</p>
  <div className="precautions">
    <strong>Precautions:</strong>
    <ul>
    {Result.Precautions[0].split(",").map((option,index)=>(
      <li key={index}>{option}</li>
    ))}</ul>
    <button className='location' onClick={()=>openMaps(Result["Doctor Type"])}>View Nearby {Result["Doctor Type"]}</button>
  </div>
</>
:null  
  
  }
</div>
  )
}

export default Disease
