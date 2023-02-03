import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Container from "./components/layout/Container"
import Footer from "./components/layout/Footer"
import NavBar from "./components/layout/NavBar"
import Company from "./components/pages/Company"
import Contact from "./components/pages/Contact"
import Home from "./components/pages/Home"
import NewProject from "./components/pages/NewProject"
import Projects from "./components/pages/Projects"

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Container customClass="min-height">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/company" element={<Company />} />
            <Route exact path="/projects" element={<Projects />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/newproject" element={<NewProject />} />
          </Routes>
        </Container>
        <Footer />
      </Router>
    </>
  )
}

export default App
