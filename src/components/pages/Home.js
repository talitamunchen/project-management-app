import './Home.css'
import savings from "../../img/savings.svg"
import LinkButton from '../layout/LinkButton'

function Home () {
  return (
    <section className='home-container'>
      <h1>Welcome to <span>Costs</span></h1>
      <p>Starts managing your projects right now!</p>
      <LinkButton to="/newproject" text="Create a project"/>
      <img src={savings} alt="savings"></img>
    </section>
  )
}

export default Home