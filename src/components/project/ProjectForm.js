import Button from "../form/Button"
import Input from "../form/Input"
import Select from "../form/Select"
import "./ProjectForm.css"
import { useEffect, useState } from "react"

function ProjectForm(props) {
  const [categories, setCategories] = useState([])

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

  return (
    <form className="form">
      <Input
        type="text"
        text="Project name"
        name="name"
        placeholder="Enter the project name"
      />
      <Input
        type="number"
        text="Budget"
        name="budget"
        placeholder="Enter the total budget"
      />
      <Select
        name="category_id"
        text="Select a category"
        options={categories}
      />
      <Button text={props.btnText} />
    </form>
  )
}

export default ProjectForm
