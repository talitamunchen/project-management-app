import { fireEvent, render, screen } from "@testing-library/react"
import { act } from "react-dom/test-utils"
import ProjectForm from "../ProjectForm"

describe("Project form", () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  beforeEach(() => {
    const categories = [
      { id: 1, name: "Infra" },
      { id: 2, name: "Dev" },
    ]

    global.fetch = jest.fn(() =>
      Promise.resolve({ json: () => Promise.resolve(categories) })
    )
  })

  it("renders users when API call succeeds", async () => {
    await act(async () => {
      render(<ProjectForm btnText="Create project" handleSubmit={jest.fn()} />)
    })
  })

  it("renders error when API call fails", async () => {
    global.fetch = jest.fn(() => Promise.reject("API error"))
    render(<ProjectForm btnText="Create project" handleSubmit={jest.fn()} />)
  })

  it("renders project form text input", async () => {
    await act(async () => {
      render(<ProjectForm btnText="Create project" handleSubmit={jest.fn()} />)
    })
    const textboxElement = screen.getByRole("textbox")
    expect(textboxElement).toBeInTheDocument()
    fireEvent.click(textboxElement)
    fireEvent.change(textboxElement, { target: { value: "ABC" } })
    expect(textboxElement.value).toBe("ABC")
  })

  it("renders project form number input", async () => {
    await act(async () => {
      render(<ProjectForm btnText="Create project" handleSubmit={jest.fn()} />)
    })
    const budgetElement = screen.getByRole("spinbutton")
    expect(budgetElement).toBeInTheDocument()
    fireEvent.click(budgetElement)
    fireEvent.change(budgetElement, { target: { value: "12" } })
    expect(budgetElement.value).toBe("12")
  })

  it("should call submit once the create button is clicked", async () => {
    const handleSubmit = jest.fn()
    await act(async () => {
      render(
        <ProjectForm btnText="Create project" handleSubmit={handleSubmit} />
      )
    })
    const buttonElement = screen.getByRole("button")
    fireEvent.click(buttonElement)
    expect(handleSubmit).toHaveBeenCalled()
  })

  it("should change selected option on categories dropdown", async () => {
    await act(async () => {
      render(<ProjectForm btnText="Create project" handleSubmit={jest.fn()} />)
    })
    const selectElement = screen.getByTestId("select")
    fireEvent.change(selectElement, { target: { value: "1" } })
    expect(screen.getByTestId("select").value).toBe("1")
  })
})
