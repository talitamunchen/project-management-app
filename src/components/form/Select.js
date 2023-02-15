import "./Select.css"

function Select(props) {
  return (
    <div className="form-control">
      <label htmlFor={props.name}>{props.text}:</label>
      <select
        data-testid="select"
        name={props.name}
        id={props.name}
        onChange={props.handleOnChange}
        value={props.value || ""}
      >
        <option>Select an option</option>
        {props.options.map((option) => (
          <option value={option.id} key={option.id} data-testid={`option-${option.id}`}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  )
}

export default Select
