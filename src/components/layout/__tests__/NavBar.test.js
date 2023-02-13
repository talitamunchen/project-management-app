import { fireEvent, render, screen } from "@testing-library/react"
import App from "../../../App"
import { BrowserRouter } from "react-router-dom"
import NavBar from "../NavBar"

const MockNav = () => {
  return (<BrowserRouter><NavBar /></BrowserRouter>)
}

test('Nav bar rendering', () => {
  render(<MockNav />)
  expect(screen.getByText(/about company/i)).toBeInTheDocument();
})

describe("Navigation", () => {
  test('Home link', () => {
    render(<App />)
    fireEvent.click(screen.getByRole('link', { name: "Home"}));
    expect(screen.getByTestId("home")).toBeInTheDocument();
  })
  
  test('Company link', () => {
    render(<App />)
    fireEvent.click(screen.getByRole('link', { name: "About company"}));
    expect(screen.getByTestId("company")).toBeInTheDocument();
  })
  
  test('Projects link', () => {
    render(<App />)
    fireEvent.click(screen.getByRole('link', { name: "Projects"}));
    expect(screen.getByTestId("projects")).toBeInTheDocument();
  })
  
  test('Contact Us link', () => {
    render(<App />)
    fireEvent.click(screen.getByRole('link', { name: "Contact Us"}));
    expect(screen.getByTestId("contact")).toBeInTheDocument();
  })
})