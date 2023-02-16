import { fireEvent, render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import ProjectCard from "../ProjectCard"

const MockProjectCard = ({handleRemove}) => {
  return (
    <BrowserRouter>
      <ProjectCard
        id="123"
        name="Project name"
        budget="1200"
        category="Infra"
        key="456"
        handleRemove={handleRemove}
      />
    </BrowserRouter>
  )
}

describe("ProjectCard", () => {
  it("renders ProjectCard page", () => {
    render(<MockProjectCard handleRemove={() => {}} />)
    const divElement = screen.getByTestId("project-card")
    expect(divElement).toBeInTheDocument()
  })

  it("calls remove function once clicked on remove button", () => {
    const mockRemove = jest.fn();
    render(<MockProjectCard handleRemove={mockRemove}/>)
    const buttonElement = screen.getByRole("button")
    fireEvent.click(buttonElement)
    expect(mockRemove).toHaveBeenCalled()
  })
})
