import React,{useState} from 'react';
import './Symptoms_Bar.css';
import Select from 'react-select';
function Symptoms_Bar({symptomsSubmit, setSymptomsSubmit }) {
  const signs= [
  { value: "abdominalcramps", label: "Abdominal Cramps" },
  { value: "abdominalpain", label: "Abdominal Pain" },
  { value: "abnormalmenstruation", label: "Abnormal Menstruation" },
  { value: "acidity", label: "Acidity" },
  { value: "acuteliverfailure", label: "Acute Liver Failure" },
  { value: "alteredsensorium", label: "Altered Sensorium" },
  { value: "anxiety", label: "Anxiety" },
  { value: "backpain", label: "Back Pain" },
  { value: "bellypain", label: "Belly Pain" },
  { value: "blackheads", label: "Blackheads" },
  { value: "bladderdiscomfort", label: "Bladder Discomfort" },
  { value: "blister", label: "Blister" },
  { value: "bloodinsputum", label: "Blood In Sputum" },
  { value: "bloodystool", label: "Bloody Stool" },
  { value: "blurredanddistortedvision", label: "Blurred And Distorted Vision" },
  { value: "bodypain", label: "Body Pain" },
  { value: "breathlessness", label: "Breathlessness" },
  { value: "brittlenails", label: "Brittle Nails" },
  { value: "bruising", label: "Bruising" },
  { value: "burningmicturition", label: "Burning Micturition" },
  { value: "chestpain", label: "Chest Pain" },
  { value: "chills", label: "Chills" },
  { value: "coldhandsandfeets", label: "Cold Hands And Feet" },
  { value: "coma", label: "Coma" },
  { value: "congestion", label: "Congestion" },
  { value: "constipation", label: "Constipation" },
  { value: "continuousfeelofurine", label: "Continuous Feel Of Urine" },
  { value: "continuoussneezing", label: "Continuous Sneezing" },
  { value: "cough", label: "Cough" },
  { value: "cramps", label: "Cramps" },
  { value: "darkurine", label: "Dark Urine" },
  { value: "dehydration", label: "Dehydration" },
  { value: "depression", label: "Depression" },
  { value: "diarrhoea", label: "Diarrhoea" },
  { value: "dischromicpatches", label: "Dischromic Patches" },
  { value: "distentionofabdomen", label: "Distention Of Abdomen" },
  { value: "dizziness", label: "Dizziness" },
  { value: "dryingandtinglinglips", label: "Drying And Tingling Lips" },
  { value: "enlargedthyroid", label: "Enlarged Thyroid" },
  { value: "excessivehunger", label: "Excessive Hunger" },
  { value: "extramaritalcontacts", label: "Extramarital Contacts" },
  { value: "familyhistory", label: "Family History" },
  { value: "fastheartrate", label: "Fast Heart Rate" },
  { value: "fatigue", label: "Fatigue" },
  { value: "fever", label: "Fever" },
  { value: "fluidoverload", label: "Fluid Overload" },
  { value: "foulsmellofurine", label: "Foul Smell Of Urine" },
  { value: "headache", label: "Headache" },
  { value: "highfever", label: "High Fever" },
  { value: "hipjointpain", label: "Hip Joint Pain" },
  { value: "historyofalcoholconsumption", label: "History Of Alcohol Consumption" },
  { value: "increasedappetite", label: "Increased Appetite" },
  { value: "indigestion", label: "Indigestion" },
  { value: "inflammatorynails", label: "Inflammatory Nails" },
  { value: "internalitching", label: "Internal Itching" },
  { value: "irregularsugarlevel", label: "Irregular Sugar Level" },
  { value: "irritability", label: "Irritability" },
  { value: "itching", label: "Itching" },
  { value: "jointpain", label: "Joint Pain" },
  { value: "kneepain", label: "Knee Pain" },
  { value: "lethargy", label: "Lethargy" },
  { value: "lossofappetite", label: "Loss Of Appetite" },
  { value: "lossofbalance", label: "Loss Of Balance" },
  { value: "lossofsmell", label: "Loss Of Smell" },
  { value: "malaise", label: "Malaise" },
  { value: "mildfever", label: "Mild Fever" },
  { value: "moodswings", label: "Mood Swings" },
  { value: "movementstiffness", label: "Movement Stiffness" },
  { value: "musclepain", label: "Muscle Pain" },
  { value: "muscleweakness", label: "Muscle Weakness" },
  { value: "nausea", label: "Nausea" },
  { value: "neckpain", label: "Neck Pain" },
  { value: "obesity", label: "Obesity" },
  { value: "painbehindtheeyes", label: "Pain Behind The Eyes" },
  { value: "palpitations", label: "Palpitations" },
  { value: "phlegm", label: "Phlegm" },
  { value: "rash", label: "Rash" },
  { value: "restlessness", label: "Restlessness" },
  { value: "runnynose", label: "Runny Nose" },
  { value: "shivering", label: "Shivering" },
  { value: "skinrash", label: "Skin Rash" },
  { value: "sneezing", label: "Sneezing" },
  { value: "stomachpain", label: "Stomach Pain" },
  { value: "sweating", label: "Sweating" },
  { value: "swellingjoints", label: "Swelling Joints" },
  { value: "throatirritation", label: "Throat Irritation" },
  { value: "vomiting", label: "Vomiting" },
  { value: "weightgain", label: "Weight Gain" },
  { value: "weightloss", label: "Weight Loss" },
  { value: "yellowingofeyes", label: "Yellowing Of Eyes" },
  { value: "yellowishskin", label: "Yellowish Skin" },
  { value: "yellowurine", label: "Yellow Urine" }
];
  const [symptoms,setSymptoms]=useState([]);
  const handleSubmit = () => {
    setSymptomsSubmit(symptoms);
    setSymptoms([]);
  };
  const handleKeyDown=(event)=>{
    if(event.key=='Enter'){
      handleSubmit();
    }
  }
  const handleChange = (selectedOption) => {
    setSymptoms(prevItems=>[...prevItems,selectedOption.value]);
  };

  return (
    <div className='symptoms-container'>
    <Select
  className="symptoms-textarea"
  classNamePrefix="symptoms"
  options={signs.sort((a,b)=>a.label.localeCompare(b.label))}
  isSearchable
  placeholder="Enter your symptom*"
  onChange={handleChange}
/>
<Select
  className="symptoms-textarea"
  classNamePrefix="symptoms"
  options={signs.sort((a,b)=>a.label.localeCompare(b.label))}
  isSearchable
  placeholder="Enter your symptom*"
  onChange={handleChange}
/>
<Select
  className="symptoms-textarea"
  classNamePrefix="symptoms"
  options={signs.sort((a,b)=>a.label.localeCompare(b.label))}
  isSearchable
  placeholder="Enter your symptom*"
  onChange={handleChange}
  onKeyDown={handleKeyDown}
/>
      <br />
      <button onClick={handleSubmit}  className="submit-button">Submit</button>
    </div>
  );
}

export default Symptoms_Bar;

