import { render, screen } from "@testing-library/react"
import { act } from "react-dom/test-utils"
import Message from "../Message"

describe("If there is a message", () => {
  it("should render the component with error message", () => {
    render(<Message type="error" msg={"Error message"} />)
    const divElement = screen.getByTestId("message-container")
    expect(divElement).toHaveClass("error")
  })

  it("should render the component with success message", () => {
    render(<Message type="success" msg={"Success message"} />)
    const divElement = screen.getByTestId("message-container")
    expect(divElement).toHaveClass("success")
  })

  it("should remove message after 3 seconds", () => {
    jest.useFakeTimers()
    render(<Message type="success" msg={"Success message"} />)
    
    act(() => {
      jest.runAllTimers()  
    })

    expect(screen.queryByTestId("message-container")).toBeNull()
  })
})

describe("If there isn't a message", () => {
  it("should not render message div", () => {
    render(<Message type="" msg="" />)
    expect(screen.queryByTestId("message-container")).toBeNull()
  })
})
