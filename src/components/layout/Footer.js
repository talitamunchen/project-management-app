import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <ul className="social-list">
        <li><FaFacebook/></li>
        <li><FaInstagram/></li>
        <li><FaLinkedin/></li>
      </ul>
      <p className='copy-right'><span>Costs</span> &copy;</p>
    </footer>
  )
}

export default Footer