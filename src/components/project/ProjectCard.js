import './ProjectCard.css'
import { BsPencil, BsFillTrashFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'

function ProjectCard(props) {
  const remove = (e) => {
    e.preventDefault()
    props.handleRemove(props.id)
  }

  return (
    <div className='project-card'>
      <h4>{props.name}</h4>
      <p>
        <span>Budget:</span> ${props.budget}
      </p>
      <p className='category-text'>
        <span className={`${props.category.toLowerCase()}`}></span> {props.category}
      </p>
      <div className='project-card-action'>
        <Link to={`/project/${props.id}`}>
          <BsPencil /> Edit
        </Link>
        <button onClick={remove}>
          <BsFillTrashFill /> Remove
        </button>
      </div>
    </div>
  )
}

export default ProjectCard