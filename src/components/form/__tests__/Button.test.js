import { render, screen } from "@testing-library/react"
import Button from "../Button"

it("should render button element", () => {
  render(<Button text={"Button test"} />)
  const buttonElement = screen.getByText("Button test")
  expect(buttonElement).toBeInTheDocument()
})
