import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <ul className="social-list">
        <li className="iten"><FaFacebook/></li>
        <li className="iten"><FaInstagram/></li>
        <li className="iten"><FaLinkedin/></li>
      </ul>
      <p className='copy-right'><span>Costs</span> &copy;</p>
    </footer>
  )
}

export default Footer