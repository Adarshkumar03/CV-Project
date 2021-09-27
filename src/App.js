import Header from "./Header";
import GeneralInfo from "./Generalnfo";
import Footer from "./Footer";
import EducationalExp from "./EducationalExp";
import JobExp from "./JobExp";
import { useState } from "react/cjs/react.development";

function App() {
  const [cv, setCV] = useState({
    personalInfo:{
      fullName:"",
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
      <div>
        <p>{cv.personalInfo.fullName}</p>
        <p>{cv.personalInfo.mobile}</p>
        <p>{cv.personalInfo.email}</p>
        <h2>Edu Info</h2>
        {
          cv.educationalInfo.map((item, index)=>{
            return <div key={index}>
              <p>{item.nameOfInstitution}</p>
              <p>{item.stream}</p>
            </div>
          })
        }
        <h2>Job Info</h2>
        {
          cv.jobInfo.map((item, index)=>{
            return <div key={index}>
              <p>{item.jobTitle}</p>
              <p>{item.company}</p>
            </div>
          })
        }
      </div>
      <button>Save CV</button>
      <Footer />
    </div>
  );
}

export default App;
