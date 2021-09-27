import { useState } from "react";

function JobExp({setCV, cv}) {
  const [workEx, setWorkEx] = useState({
    jobTitle: "",
    company: "",
    yearsWorked: 0,
    location: ""
  });

  const [isFormActive, setIsFormActive] = useState(false);

  const [workExArray, setWorkExArray] = useState([]);

  const handleCancelCLick = () => {
    setIsFormActive(false);
  };

  const addWorkExp = () => {
    setIsFormActive(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setWorkEx({ ...workEx, [name]: value });
  };

  const saveWork = (e) => {
    e.preventDefault();
    setWorkExArray([...workExArray, workEx]);
    setCV({...cv, jobInfo: [...cv.jobInfo, workEx]});
    setWorkEx({ jobTitle: "", company: "", yearsWorked: 0, location: "" });
    console.log(cv);
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
          <div>
            <label>Title</label>
            <input
              type="text"
              name="jobTitle"
              onChange={handleChange}
              value={workEx.jobTitle}
            />
          </div>
          <div>
            <label>Company</label>
            <input
              type="text"
              name="company"
              onChange={handleChange}
              value={workEx.company}
            />
          </div>
          <div>
            <label>Years Worked</label>
            <input
              type="number"
              name="yearsWorked"
              onChange={handleChange}
              value={workEx.yearsWorked}
            />
          </div>

          <div>
            <label>Location</label>
            <input
              type="text"
              name="location"
              onChange={handleChange}
              value={workEx.location}
            />
          </div>
          <button onClick={saveWork}>Save</button>
          <button onClick={handleCancelCLick}>Cancel</button>
        </form>
      )}
      <button onClick={addWorkExp}>Add Work Experience</button>
    </section>
  );
}

export default JobExp;
