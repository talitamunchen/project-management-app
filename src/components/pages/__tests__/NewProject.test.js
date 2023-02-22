import { fireEvent, render, screen } from "@testing-library/react"
import { act } from "react-dom/test-utils"
import { BrowserRouter } from "react-router-dom"
import NewProject from "../NewProject"

const MockNewProject = () => {
  return (
    <BrowserRouter>
      <NewProject />
    </BrowserRouter>
  )
}

describe("NewProject", () => {
  beforeEach(() => {
    const projects = [
      {
        name: "name 1",
        budget: "1200",
        category: { id: "1", name: "Infra" },
        costs: 200,
        services: [],
        id: 1,
      },
    ]

    global.fetch = jest.fn(() =>
      Promise.resolve({ json: () => Promise.resolve(projects) })
    )
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it("renders NewProject page", async () => {
    await act(async () => {
      render(<MockNewProject />)
    })
    const titleElement = screen.getByText(/Create a new project/i)
    expect(titleElement).toBeInTheDocument()
  })

  it("calls createPost function and fetch API sucessfully", async () => {
    await act(async () => {
      render(<MockNewProject />)
    })
    const element = screen.getByRole("button")
    
    await act(async () => {
      fireEvent.click(element)
    })
  })

  it("calls createPost function and fetch API fails", async () => {
    global.fetch = jest.fn(() => Promise.reject("API error"))
    render(<MockNewProject />)
    const element = screen.getByRole("button")
    fireEvent.click(element)
  })
})
