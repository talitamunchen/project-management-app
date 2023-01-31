import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Container from "./components/layout/Container"
import Company from "./components/pages/Company"
import Contact from "./components/pages/Contact"
import Home from "./components/pages/Home"
import NewProject from "./components/pages/NewProject"

function App() {
  return (
    <Router>
      <ul>
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/company">About company</Link>
        <Link to="/newproject">New Project</Link>
      </ul>

      <Container customClass='min-height'>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/company" element={<Company />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/newproject" element={<NewProject />} />
        </Routes>
      </Container>

      <p>Footer</p>
    </Router>
  )
}

export default App
