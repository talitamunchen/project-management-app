import { fireEvent, render, screen } from "@testing-library/react"
import { act } from "react-dom/test-utils"
import { BrowserRouter } from "react-router-dom"
import { MemoryRouter } from 'react-router';
import Projects from "../Projects"

const MockPojects = () => {
  return (<BrowserRouter><Projects /></BrowserRouter>)
}

const projectsMock = [
  {
    name: "name 1",
    budget: "1200",
    category: { id: "1", name: "Infra" },
    costs: 200,
    services: [],
    id: 1,
  },
  {
    name: "name 2",
    budget: "2200",
    category: { id: "2", name: "Infra" },
    costs: 200,
    services: [],
    id: 2,
  }
]

describe("Projects", () => {
  beforeEach(() => {
    const projects = projectsMock

    global.fetch = jest.fn(() =>
      Promise.resolve({ json: () => Promise.resolve(projects) })
    )
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it("fetch API sucessfully", async () => {
    jest.useFakeTimers()
    await act(async () => {
      render(<MockPojects />)
    })
    act(() => {
      jest.runAllTimers()  
    })
  })

  it("fetch API call fails", async () => {
    jest.useFakeTimers()
    global.fetch = jest.fn(() => Promise.reject("API error"))
    await act(async () => {
      render(<MockPojects />)
    })

    act(() => {
      jest.runAllTimers()  
    })
  })

  it('should render message text when create a new project', async () => {
    render(
      <MemoryRouter initialEntries={[{ pathname: '/', state: {message: 'hi'} }]}>
        <Projects />
      </MemoryRouter>
    )

    expect(screen.getByText(/hi/i)).toBeInTheDocument()
  })
})

describe ('Project card', () => {
  beforeEach(async () => {
    const projects = projectsMock

    global.fetch = jest.fn(() =>
      Promise.resolve({ json: () => Promise.resolve(projects) })
    )

    jest.useFakeTimers()      
    render(<MockPojects />)   

    await act(async () => {
      jest.runAllTimers()  
    })

  })

  it('should render Project card', async () => {
    const divElement = screen.getByText("name 1")
    expect(divElement).toBeInTheDocument()
  })

  it('should render Project card', async () => {
    const buttonElement = screen.getAllByText(/Remove/i)
    expect(buttonElement[0]).toBeInTheDocument()
    fireEvent.click(buttonElement[0])
  })

  it("fetch API call fails", async () => {
    global.fetch = jest.fn(() => Promise.reject("API error"))
    const buttonElement = screen.getAllByText(/Remove/i)
    expect(buttonElement[0]).toBeInTheDocument()
    fireEvent.click(buttonElement[0])
  })
})

