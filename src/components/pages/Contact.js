import "./Info.css"

function Contact() {
  return (
    <div className="info-container">
      <h1>Contact Us</h1>
      <div className="mail">
        <h3>Snail mail</h3>
        <p>Loren Ipsum</p>
        <p>PO Box 1234</p>
        <p>Austin, TX 1234</p>
      </div>
      <hr />
      <div className="mail">
        <h3>Eletronic mail</h3>
        <p>lorenipsum@lorenipsum.com</p>
      </div>
      <hr />
      <div className="mail">
        <h3>Phone Support</h3>
        <p>Hours: 9am - 5pm (CST), Monday - Friday</p>
        <p>123-456-789</p>
      </div>
    </div>
  )
}

export default Contact    