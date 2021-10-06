import { useState } from "react";

export const JobExp = ({setCV, cv}) => {
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

  const deleteJob = (index) => {
    let tempArray = workExArray;
    tempArray.splice(index, 1);
    setWorkExArray(tempArray);   
    setCV({...cv, jobInfo: [...workExArray]});
  }

  return (
    <section className="job">
      <h2>Work Experience</h2>
      {workExArray.map((work, index) => {
        return (
          <div key={index} className="job-list-item">
            <p>Job Title:  {work.jobTitle}</p>
            <p>Company:  {work.company}</p>
            <p>Years Worked:  {work.yearsWorked}</p>
            <p>Location:  {work.location}</p>
            <button onClick={()=>deleteJob(index)}>Delete</button>
          </div>
        );
      })}
      {isFormActive && (
        <form>
          <div className="form-group">
            <label>Title:</label>
            <input
              type="text"
              name="jobTitle"
              onChange={handleChange}
              value={workEx.jobTitle}
              required
            />
          </div>
          <div className="form-group">
            <label>Company:</label>
            <input
              type="text"
              name="company"
              onChange={handleChange}
              value={workEx.company}
              required
            />
          </div>
          <div className="form-group">
            <label>Years Worked:</label>
            <input
              type="number"
              name="yearsWorked"
              onChange={handleChange}
              value={workEx.yearsWorked}
              required
            />
          </div>

          <div className="form-group">
            <label>Location:</label>
            <input
              type="text"
              name="location"
              onChange={handleChange}
              value={workEx.location}
              required
            />
          </div>
          <button onClick={saveWork}>Save</button>
          <button onClick={handleCancelCLick}>Cancel</button>
        </form>
      )}
      {
        !isFormActive&&<button onClick={addWorkExp}>Add Work Experience</button>
      }
      
    </section>
  );
}