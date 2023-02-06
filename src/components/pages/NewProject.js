import ProjectForm from '../project/ProjectForm'
import { useNavigate } from 'react-router-dom'
import './NewProject.css'

function NewProject() {
  const navigate = useNavigate()

  function createPost(project) {
    project.cost = 0
    project.services = []

    fetch("http://localhost:5000/projects", {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(project)
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data)
        //redirect
        navigate('/projects', {
          state: {
            message: 'Project created!'
          }
        })
      })
      .catch(err => console.log(err))
  }

  return (
    <div className='newproject-container'>
      <h1>Create a new project</h1>
      <p>Create your project and add the services</p>
      <ProjectForm btnText="Create project" handleSubmit={createPost}/>
    </div>
  )
}

export default NewProject