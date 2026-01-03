  import React,{useEffect} from 'react';
  import './Navbar.css';
  import axios from "axios"
  function Navbar() {
    useEffect(() => {
      const wakeServer = async () => {
        try {
          const res1 = await axios.get('https://disease-prediction-model-hekw.onrender.com');
          const res2=await axios.get('https://disease-prediction-model-backend.onrender.com');
          const res3=await axios.get('https://mediwise-erhi.onrender.com');
          console.log("Server awake:", res1.data);
          console.log("Server awake:", res2.data);
          console.log("Server awake:", res3.data);
        } catch (err) {
          console.log("Wake-up failed:", err);
        }
      };

      wakeServer();
    }, []);
    return (
      <div className="navbar">
        <div className="navbar-content">
          <h1 className="logo">MediWise</h1>
          <p className="tagline">AI-powered health prediction</p>
        </div>
      </div>
    );
  }

  export default Navbar;
