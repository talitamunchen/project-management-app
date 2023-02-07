import '../project/ProjectForm.css'
import { useState } from "react"
import Input from '../form/Input'
import Button from "../form/Button"

function ServiceForm(props) {
  const [service, setService] = useState({})

  function submit(e) {
    e.preventDefault()
    props.projectData.services.push(service)
    props.handleSubmit(props.projectData)
  }

  function handleChange(e) {
    setService({...service, [e.target.name]: e.target.value})
  }

  return (
    <form onSubmit={submit} className="form">
      <Input
        type="text"
        text="Service name"
        name="name"
        placeholder="Enter the service name"
        handleOnChange={handleChange}
      />
      <Input
        type="number"
        text="Service value"
        name="cost"
        placeholder="Enter the total value"
        handleOnChange={handleChange}
      />
      <Input
        type="text"
        text="Service description"
        name="description"
        placeholder="Enter the service description"
        handleOnChange={handleChange}
      />
      <Button text={props.btnText} />
    </form>
  )
}

export default ServiceForm