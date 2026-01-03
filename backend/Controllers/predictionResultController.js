import axios from "axios";
const fetchFromAPI=async(req,res)=>{
    try {
        const {symptoms}=req.body;
        const response=await axios.post('https://disease-prediction-model-backend.onrender.com/api/predict',{
            symptoms
        },{timeout:60000});

        if(response.data.message){
        res.json({status:true,message:response.data.message});
        }
        else{
            res.json({status:true,data:response.data});
        }
    } catch (error) {
        console.log(error);
        res.json({status:false,message:"Enter 3 valid Symptoms"});
}}
export default fetchFromAPI;