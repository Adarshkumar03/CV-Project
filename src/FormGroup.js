function FormGroup(props) {
  return (
    <div className="form-group">
      <label>{props.label}</label>
      <input type={props.type} placeholder={props.placeholder} />
    </div>
  );
}

export default FormGroup;
