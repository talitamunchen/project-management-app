import { Link } from "react-router-dom"
import './LinkButton.css'

function LinkButton(props) {
  return (
    <Link className="btn" to={props.to}>
      {props.text}
    </Link>
  )
}

export default LinkButton