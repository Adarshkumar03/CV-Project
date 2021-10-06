import Header from "./Header";
import GeneralInfo from "./Generalnfo";
import { EducationalExp } from "./EducationalExp";
import { JobExp } from "./JobExp";
import { useState } from "react";

function App() {
  const [cv, setCV] = useState({
    personalInfo: {
      firstName: "",
      lastName: "",
      mobile: 0,
      email: ""
    },
    educationalInfo: [],
    jobInfo: []
  });

  const printCV = () => {
    var divContents = document.getElementById("CV").innerHTML;
    console.log(divContents);
    var printWindow = window.open("", "", "height=200,width=400");
    printWindow.document.write("<html><head><title>Print DIV Content</title>");
    printWindow.document.write("</head><body >");
    printWindow.document.write(divContents);
    printWindow.document.write("</body></html>");
    printWindow.document.close();
    printWindow.print();
  };

  return (
    <div className="App">
      <Header />
      <GeneralInfo setCV={setCV} cv={cv} />
      <JobExp setCV={setCV} cv={cv} />
      <EducationalExp setCV={setCV} cv={cv} />
      <section className="actual-cv" id="CV">
        <h2>Personal Info</h2>
        <p>{cv.personalInfo.firstName}</p>
        <p>{cv.personalInfo.lastName}</p>
        <p>{cv.personalInfo.mobile}</p>
        <p>{cv.personalInfo.email}</p>
        <hr />
        <h2>Edu Info</h2>
        {cv.educationalInfo.map((item, index) => {
          return (
            <div key={index}>
              <p>{item.nameOfInstitution}</p>
              <p>{item.stream}</p>
              <p>{item.per}</p>
              <p>{item.yearOfpassing}</p>
            </div>
          );
        })}
        <hr />
        <h2>Job Info</h2>
        {cv.jobInfo.map((item, index) => {
          return (
            <div key={index}>
              <p>{item.jobTitle}</p>
              <p>{item.company}</p>
              <p>{item.yearsWorked}</p>
              <p>{item.location}</p>
            </div>
          );
        })}
      </section>
      <button onClick={printCV}>Print</button>
    </div>
  );
}

export default App;
