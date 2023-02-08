import "../project/ProjectCard.css"
import { BsFillTrashFill } from "react-icons/bs"

function ServiceCard(props) {
  const remove = (e) => {
    e.preventDefault()
    props.handleRemove(props.id, props.costs)
  }

  return (
    <div className="project-card">
      <h4>{props.name}</h4>
      <p>
        <span>Total value: </span> ${props.cost}
      </p>
      <p>{props.description}</p>
      <div className="project-card-action">
        <button onClick={remove}>
          <BsFillTrashFill />
          Remove
        </button>
      </div>
    </div>
  )
}

export default ServiceCard
