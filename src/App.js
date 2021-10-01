import Header from "./Header";
import GeneralInfo from "./Generalnfo";
import EducationalExp from "./EducationalExp";
import JobExp from "./JobExp";
import { useState } from "react/cjs/react.development";

function App() {
  const [cv, setCV] = useState({
    personalInfo:{
      firstName:"",
      lastName:"",
      mobile:0,
      email:""
    },
    educationalInfo:[],
    jobInfo:[]
  });
  return (
    <div className="App">
      <Header />
      <GeneralInfo setCV={setCV} cv={cv} />
      <JobExp setCV={setCV} cv={cv} />
      <EducationalExp setCV={setCV} cv={cv} />
      <section className="actual-cv">
        <h2>Personal Info</h2> 
        <p>{cv.personalInfo.firstName}</p>
        <p>{cv.personalInfo.lastName}</p>
        <p>{cv.personalInfo.mobile}</p>
        <p>{cv.personalInfo.email}</p>
        <hr/>
        <h2>Edu Info</h2>
        {
          cv.educationalInfo.map((item, index)=>{
            return <div key={index}> 
              <p>{item.nameOfInstitution}</p>
              <p>{item.stream}</p>
              <p>{item.per}</p>
              <p>{item.yearOfpassing}</p>
            </div>
          })
        }
        <hr/>
        <h2>Job Info</h2>
        {
          cv.jobInfo.map((item, index)=>{
            return <div key={index}>
              <p>{item.jobTitle}</p>
              <p>{item.company}</p>
              <p>{item.yearsWorked}</p>
              <p>{item.location}</p>
            </div>
          })
        }
      </section>
      <button onClick={()=>{
        const cv = document.getElementsByClassName("actual-cv");
        cv.print();
        }}>Print</button>
    </div>
  );
}

export default App;
