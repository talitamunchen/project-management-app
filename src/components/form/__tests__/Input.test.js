import { render, screen } from "@testing-library/react"
import Input from "../Input"

it("should render input element", () => {
  render(
    <Input
      type="text"
      text="Project name"
      name="name"
      placeholder="Enter the project name"
      handleOnChange={() => {}}
      value={""}
    />
  )
  const inputElement = screen.getByPlaceholderText(/Enter the project name/i);
  expect(inputElement).toBeInTheDocument()
})
