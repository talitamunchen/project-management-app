import "./Input.css"

function Input(props) {
  return (
    <div className="form-control">
      <label htmlFor={props.name}>{props.text}:</label>
      <input
        type={props.type}
        name={props.name}
        id={props.name}
        placeholder={props.placeholder}
        onChange={props.handleOnChange}
        value={props.value}
      />
    </div>
  )
}

export default Input
