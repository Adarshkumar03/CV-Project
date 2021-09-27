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
    <section>
      <form>
        <div>
          <label>Full Name</label>
          <input type="text" name="fullName" onChange={handleChange} value={personal.fullName} placeholder="Full Name" />
        </div>
        <div>
          <label>Mobile</label>
          <input type="number" name="mobile" onChange={handleChange} value={personal.mobile} placeholder="Mobile" />
        </div>
        <div>
          <label>Email</label>
          <input type="email" name="email" onChange={handleChange} value={personal.email} placeholder="Email" />
        </div>
      </form>
    </section>
  );
}

export default GeneralInfo;
