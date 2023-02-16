import { fireEvent, getByRole, render, screen } from "@testing-library/react"
import ServiceForm from "../ServiceForm"

const mockProject = {
  name: "Lorem ipsum I",
  budget: "1200",
  category: {
    id: "1",
    name: "Infra",
  },
  cost: 200,
  services: [
    {
      name: "Sit amet",
      description: "Lorem ipsum",
      cost: "200",
      id: "9cedae36-8ba6-42fb-aa36-c9bc63b161b9",
    },
  ],
  id: 1,
}

const MockServiceForm = ({}) => {
  return (
    <ServiceForm
      handleSubmit={jest.fn()}
      btnText="Add service"
      projectData={mockProject}
    />
  )
}

describe("ServiceForm", () => {
  it("renders ServiceForm", () => {
    render(<MockServiceForm />)
    const divElement = screen.getByTestId("service-form")
    expect(divElement).toBeInTheDocument()
  })

  it("should call submit once the create button is clicked", () => {
    const handleSubmit = jest.fn()
    render(
      <ServiceForm
        handleSubmit={handleSubmit}
        btnText="Add service"
        projectData={mockProject}
      />
    )

    const buttonElement = screen.getByRole("button")
    fireEvent.click(buttonElement)
    expect(handleSubmit).toHaveBeenCalled()
  })

  it("should call handleChange once inputs change", () => {
    render(<MockServiceForm />)
    const inputElement = screen.getByPlaceholderText(/Enter the service name/i)
    fireEvent.change(inputElement, { target: { value: "ABC" } })
    expect(inputElement.value).toBe("ABC")
  })
})
