import FormGroup from "./FormGroup";

function GeneralInfo() {
  return (
    <section>
      <form>
        <FormGroup label="First Name:" type="text" placeholder="First Name" />
        <FormGroup label="Last Name:" type="text" placeholder="Last Name" />
        <FormGroup label="Mobile:" type="number" placeholder="Mobile" />
        <FormGroup label="Email:" type="email" placeholder="Email" />
      </form>
    </section>
  );
}

export default GeneralInfo;
