import Header from "./Header";
import GeneralInfo from "./Generalnfo";
import Footer from "./Footer";
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
      <section>
        <p>{cv.personalInfo.firstName}</p>
        <p>{cv.personalInfo.lastName}</p>
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
      </section>
      <button onClick={()=>{window.print()}}>Print</button>
      <Footer />
    </div>
  );
}

export default App;
