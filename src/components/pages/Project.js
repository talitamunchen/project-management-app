import "./Project.css"
import { parse, v4 as uuidv4 } from 'uuid'
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import Loading from "../layout/Loading"
import Container from "../layout/Container"
import ProjectForm from "../project/ProjectForm"
import Message from "../layout/Message"
import ServiceForm from "../service/ServiceForm"

function Project() {
  const { id } = useParams()

  const [project, setProject] = useState([])
  const [showProjectForm, setShowProjectForm] = useState(false)
  const [showServiceForm, setShowServiceForm] = useState(false)
  const [message, setMessage] = useState()
  const [type, setType] = useState()

  useEffect(() => {
    setTimeout(() => {
      fetch(`http://localhost:5000/projects/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setProject(data)
        })
        .catch(err => console.log(err))
    }, 300)
  }, [id])

  function toggleProjectForm() {
    setShowProjectForm(!showProjectForm)
  }

  function toggleServiceForm() {
    setShowServiceForm(!showServiceForm)
  }

  function editPost(project) {
    setMessage('')
    if(project.budget < project.cost) {
      setMessage('Budget is lower than the project cost!')
      setType('error')
      return false
    }

    fetch(`http://localhost:5000/projects/${project.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(project)
    })
      .then((response) => response.json())
      .then((data) => {
        setProject(data)
        setShowProjectForm(false)
        setMessage('Project updated!')
        setType('success')
      })
      .catch((err) => console.log(err))
  }

  function createService(project){
    setMessage('')
    const lastService = project.services[project.services.length - 1]
    lastService.id = uuidv4() //add unique id

    const lastServiceCost = lastService.cost 
    const newCost = parseFloat(project.cost) + parseFloat(lastServiceCost)

    if (newCost > parseFloat(project.budget)){
      setMessage('Budget exceeded, check the values')
      setType('error')
      project.services.pop()
      return false
    }

    project.cost = newCost

    fetch(`http://localhost:5000/projects/${project.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(project)
    })
      .then((response) => response.json())
      .then((data) => {
        // show services
        console.log(data)
      })
      .catch((err) => console.log(err))

  }

  return (
    <>
      {project.name ? (
        <div className="project-details">
          <Container customClass="column">
            {message && <Message type={type} msg={message}/>}
            <div className="details-container">
              <h1>Projeto: {project.name}</h1>
              <button onClick={toggleProjectForm} className="btn">
                {!showProjectForm ? "Edit project" : "Close edition"}
              </button>
              {!showProjectForm ? (
                <div className="project-info">
                  <p>
                    <span>Category: </span>
                    {project.category.name}
                  </p>
                  <p>
                    <span>Total budget: </span>${project.budget}
                  </p>
                  <p>
                    <span>Total used: </span>${project.cost}
                  </p>
                </div>
              ) : (
                <div className="project-info">
                  <ProjectForm
                    handleSubmit={editPost}
                    btnText="Finish edition"
                    projectData={project}
                  />
                </div>
              )}
            </div>
            <div className="service-form-container">
              <h2>Add a new service:</h2>
              <button onClick={toggleServiceForm} className="btn">
                {!showServiceForm ? "Add service" : "Close"}
              </button>
              <div className="project-info">
                {showServiceForm && (
                  <ServiceForm handleSubmit={createService} btnText="Add service" projectData={project}/>
                )}
              </div>
            </div>
            <h2>Services:</h2>
            <Container customClass="start">
              <p>Servicesssss</p>
            </Container>
          </Container>
        </div>
      ) : (
        <Loading />
      )}
    </>
  )
}

export default Project
