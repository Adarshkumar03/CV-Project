import { useState } from "react";
import FormGroup from "./FormGroup";

function JobExp() {
  const [workEx, setWorkEx] = useState({
    jobTitle: "",
    company: "",
    yearsWorked: 0,
    location: ""
  });

  const [isFormActive, setIsFormActive] = useState(true);

  const [workExArray, setWorkExArray] = useState([]);

  const handleCancelCLick = () => {
    setIsFormActive(false);
  };

  const addWorkExp = () => {
    setIsFormActive(true);
  };

  const handleChange = (e) => {
    let workTemp = workEx;
    if (isNaN(e.target.value)) {
      workTemp[e.target.name] += e.target.value;
    } else {
      workTemp[e.target.name] =
        parseInt(workTemp[e.target.name]) + parseInt(e.target.value);
    }
    setWorkEx(workTemp);
  };

  const saveWork = (e) => {
    e.preventDefault();
    let temp = workExArray;
    temp.push(workEx);
    setWorkExArray(temp);
    setWorkEx({ jobTitle: "", company: "", yearsWorked: 0, location: "" });
    console.log(workExArray);
  };

  return (
    <section>
      <h2>Work Experience</h2>
      {workExArray.map((work, index) => {
        return (
          <div key={index}>
            <p>{work.jobTitle}</p>
            <p>{work.company}</p>
            <p>{work.yearsWorked}</p>
            <p>{work.location}</p>
            <hr />
          </div>
        );
      })}
      {isFormActive && (
        <form>
          <FormGroup
            label="Job Title:"
            type="text"
            name="jobTitle"
            value={workEx.jobTitle}
            onChange={handleChange}
          />
          <FormGroup
            label="Company:"
            type="text"
            name="company"
            value={workEx.company}
            onChange={handleChange}
          />
          <FormGroup
            label="Years Worked:"
            type="number"
            name="yearsWorked"
            value={workEx.yearsWorked}
            onChange={handleChange}
          />
          <FormGroup
            label="Location:"
            type="text"
            name="location"
            value={workEx.location}
            onChange={handleChange}
          />
          <button onClick={saveWork}>Save</button>
          <button onClick={handleCancelCLick}>Cancel</button>
        </form>
      )}
      <button onClick={addWorkExp}>Add Work Experience</button>
    </section>
  );
}

export default JobExp;
