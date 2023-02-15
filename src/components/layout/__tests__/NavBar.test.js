import { fireEvent, render, screen } from "@testing-library/react"
import App from "../../../App"
import { BrowserRouter } from "react-router-dom"
import NavBar from "../NavBar"

const MockNav = () => {
  return (<BrowserRouter><NavBar /></BrowserRouter>)
}

it('Nav bar rendering', () => {
  render(<MockNav />)
  expect(screen.getByText(/about company/i)).toBeInTheDocument();
})

describe("Navigation", () => {
  it('Home link', () => {
    render(<App />)
    fireEvent.click(screen.getByRole('link', { name: "Home"}));
    expect(screen.getByTestId("home")).toBeInTheDocument();
  })
  
  it('Company link', () => {
    render(<App />)
    fireEvent.click(screen.getByRole('link', { name: "About company"}));
    expect(screen.getByTestId("company")).toBeInTheDocument();
  })
  
  it('Projects link', () => {
    render(<App />)
    fireEvent.click(screen.getByRole('link', { name: "Projects"}));
    expect(screen.getByTestId("projects")).toBeInTheDocument();
  })
  
  it('Contact Us link', () => {
    render(<App />)
    fireEvent.click(screen.getByRole('link', { name: "Contact Us"}));
    expect(screen.getByTestId("contact")).toBeInTheDocument();
  })
})