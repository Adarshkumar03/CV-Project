import {useState} from 'react';
function GeneralInfo({setCV, cv}) {
  
  const [personal, setPersonal] = useState({
    fullName:"",
    mobile:0,
    email:""
  })

  const handleChange = (e) =>{
    const {name, value} = e.target;
    setPersonal({...personal, [name]:value});
    setCV({...cv, personalInfo:{...personal}});
  }
  return (
    <section className="general">
      <h2>General Information</h2> 
      <form>
        <div className="form-group">
          <label>Full Name:</label>
          <input type="text" name="firstName" onChange={handleChange} value={personal.fullName} placeholder="First Name" />
        </div>
        <div className="form-group">
          <label>Last Name:</label>
          <input type="text" name="lastName" onChange={handleChange} value={personal.fullName} placeholder="Last Name" />
        </div>
        <div className="form-group">
          <label>Mobile:</label>
          <input type="number" name="mobile" onChange={handleChange} value={personal.mobile} placeholder="Mobile" />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" name="email" onChange={handleChange} value={personal.email} placeholder="Email" />
        </div>
      </form>
    </section>
  );
}

export default GeneralInfo;
