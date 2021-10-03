import { useState } from "react";

function EducationalExp({setCV, cv}) {
  const [eduEx, setEduEx] = useState({
    nameOfInstitution: "",
    stream: "",
    per: 0,
    yearOfpassing: new Date().getFullYear()
  });
  const [eduExArray, setEduExArray] = useState([]);

  const [isActive, setIsActive] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEduEx({ ...eduEx, [name]: value });
  };

  const saveEdu = (e) => {
    e.preventDefault();
    setEduExArray([...eduExArray, eduEx]);
    setCV({...cv, educationalInfo: [...cv.educationalInfo, eduEx]});
    setEduEx({
      nameOfInstitution: "",
      stream: "",
      per: 0,
      yearOfpassing: new Date().getFullYear()
    });
  };

  const addEdu = () => {
    setIsActive(true);
  };

  const cancelForm = () => {
    setIsActive(false);
  };

  const deleteEdu = (index) => {
    let tempArray = eduExArray;
    tempArray.splice(index, 1);
    setEduExArray(tempArray);
    setCV({...cv, educationalInfo: [...eduExArray]});
  }

  return (
    <section className="educational">
      <h2>Education</h2>
      {eduExArray.map((edu, index) => {
        return (
          <div key={index} className="edu-list-item">
            <p>Name of Institution:  {edu.nameOfInstitution}</p>
            <p>Stream:  {edu.stream}</p>
            <p>Percentage:  {edu.per}</p>
            <p>year of Passing:  {edu.yearOfpassing}</p>
            <button onClick={()=>deleteEdu(index)}>Delete</button>
          </div>
        );
      })}
      {isActive && (
        <form>
          <div className="form-group">
            <label>Name of Institution</label>
            <input
              type="text"
              name="nameOfInstitution"
              onChange={handleChange}
              value={eduEx.nameOfInstitution}
              required
            />
          </div>
          <div className="form-group">
            <label>Stream/Subject</label>
            <input
              type="text"
              name="stream"
              onChange={handleChange}
              value={eduEx.stream}
              required
            />
          </div>
          <div className="form-group">
            <label>Percentage</label>
            <input
              type="number"
              name="per"
              onChange={handleChange}
              value={eduEx.per}
              required
            />
          </div>
          <div className="form-group">
            <label>Year of Passing</label>
            <input
              type="text"
              name="yearOfpassing"
              onChange={handleChange}
              value={eduEx.yearOfpassing}
              required
            />
          </div>
          <button onClick={saveEdu}>Save</button>
          <button onClick={cancelForm}>Cancel</button>
        </form>
      )}

      {
        !isActive&&<button type="button" onClick={addEdu}>
        Add Education
      </button>
      }
    </section>
  );
}

export default EducationalExp;
