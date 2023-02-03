import { Link } from "react-router-dom"
import "./NavBar.css"
import logo from "../../img/costs_logo.png"
import Container from "./Container"

function NavBar() {
  return (
    <nav className="nav-bar">
      <Container>
        <Link to="/"><img src={logo} alt='costs'></img></Link>
        <ul className="list">
          <li className="iten"><Link to="/">Home</Link></li>
          <li className="iten"><Link to="/company">About company</Link></li>
          <li className="iten"><Link to="/projects">Projects</Link></li>
          <li className="iten"><Link to="/contact">Contact Us</Link></li>
        </ul>
      </Container>
    </nav>
  )
}

export default NavBar