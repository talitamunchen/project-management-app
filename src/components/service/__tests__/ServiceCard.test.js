import { fireEvent, render, screen } from "@testing-library/react"
import ServiceCard from "../ServiceCard"

describe("ServiceCard", () => {
  it("renders ServiceCard page", () => {
    render(
      <ServiceCard
        id="123"
        name="Sit amet"
        cost="200"
        description="Lorem ipsum"
        key="456"
        handleRemove={jest.fn()}
      />
    )
    const divElement = screen.getByTestId("service-card")
    expect(divElement).toBeInTheDocument()
  })

  it("calls remove function once clicked on remove button", () => {
    const handleRemove = jest.fn()
    render(
      <ServiceCard
        id="123"
        name="Sit amet"
        cost="200"
        description="Lorem ipsum"
        key="456"
        handleRemove={handleRemove}
      />
    )
    const buttonElement = screen.getByRole('button')
    fireEvent.click(buttonElement)
    expect(handleRemove).toHaveBeenCalled()
  })
})
