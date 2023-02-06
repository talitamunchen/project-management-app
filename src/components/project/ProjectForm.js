import Button from "../form/Button"
import Input from "../form/Input"
import Select from "../form/Select"
import "./ProjectForm.css"
import { useEffect, useState } from "react"

function ProjectForm(props) {
  const [categories, setCategories] = useState([])
  const [project, setProject] = useState(props.projectData || {})

  useEffect(() => {
    fetch("http://localhost:5000/categories", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setCategories(data)
      })
      .catch((err) => console.log(err))
  }, [])

  const submit = (e) => {
    e.preventDefault()
    props.handleSubmit(project)
  }

  function handleChange(e) {
    setProject({ ...project, [e.target.name]: e.target.value })
  }

  function handleSelect(e) {
    setProject({
      ...project,
      category: {
        id: e.target.value,
        name: e.target.options[e.target.selectedIndex].text,
      },
    })
  }

  return (
    <form onSubmit={submit} className="form">
      <Input
        type="text"
        text="Project name"
        name="name"
        placeholder="Enter the project name"
        handleOnChange={handleChange}
        value={project.name ? project.name : ""}
      />
      <Input
        type="number"
        text="Budget"
        name="budget"
        placeholder="Enter the total budget"
        handleOnChange={handleChange}
        value={project.budget ? project.budget : ""}
      />
      <Select
        name="category_id"
        text="Select a category"
        options={categories}
        handleOnChange={handleSelect}
        value={project.category ? project.category.id : ""}
      />
      <Button text={props.btnText} />
    </form>
  )
}

export default ProjectForm
