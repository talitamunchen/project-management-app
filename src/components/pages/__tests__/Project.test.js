import { fireEvent, render, screen } from "@testing-library/react"
import { act } from "react-dom/test-utils"
import ProjectForm from "../../project/ProjectForm"
import Project from "../project"

const projectMock = 
  {
    name: "project 1",
    budget: "1200",
    category: { id: "1", name: "Infra" },
    costs: 200,
    services: [
      {
        name: "Sit amet",
        description: "Lorem ipsum dolor sit",
        cost: "200",
        id: "9cedae36-8ba6-42fb-aa36-c9bc63b161b9"
      }
    ],
    id: 1
  }

describe ('Project', () => {
  beforeEach(() => {
    const projects = projectMock

    global.fetch = jest.fn(() =>
      Promise.resolve({ json: () => Promise.resolve(projects) })
    )
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('fetch API call sucessfully', async () => {
    jest.useFakeTimers()      
    render(<Project />)   

    await act(async () => {
      jest.runAllTimers()  
    })

    const divElement = screen.getByTestId("project-details")
    expect(divElement).toBeInTheDocument()
  })

  it("fetch API call fails", async () => {
    jest.useFakeTimers()
    global.fetch = jest.fn(() => Promise.reject("API error"))
    await act(async () => {
      render(<Project />)
    })

    act(() => {
      jest.runAllTimers()  
    })
  })

  it('should toggle edit button form', async () => {
    jest.useFakeTimers()      
    render(<Project />)   

    await act(async () => {
      jest.runAllTimers()  
    })
    const buttonElement = screen.getByTestId("btn-form")
    const divElement = screen.getByText("Edit project")
    expect(buttonElement).toBeInTheDocument()
    fireEvent.click(buttonElement)
    expect(divElement).toBeInTheDocument()
  })

  it('should toggle add button service', async () => {
    jest.useFakeTimers()      
    render(<Project />)   

    await act(async () => {
      jest.runAllTimers()  
    })
    const buttonElement = screen.getByTestId("btn-serv")
    expect(buttonElement).toBeInTheDocument()
    fireEvent.click(buttonElement)
  })
})