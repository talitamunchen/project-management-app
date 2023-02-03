import ProjectForm from '../project/ProjectForm'
import './NewProject.css'

function NewProject() {
  return (
    <div className='newproject-container'>
      <h1>Create a new project</h1>
      <p>Create your project and add the services</p>
      <ProjectForm btnText="Create project"/>
    </div>
  )
}

export default NewProject