import Message from "../layout/Message"
import { useLocation } from "react-router-dom"

function Projects() {
  const location = useLocation()
  let message = ''

  console.log(location)

  if (location.state) {
    message = location.state.message
  }

  return (
    <div>
      <h1>Projects</h1>
      {message && 
        <Message msg={message} type="success"/>
      }
    </div>
  )
}

export default Projects