import './Loading.css'
import loading from '../../img/loading2.svg'

function Loading(){
  return (
    <div className='loader-container'>
      <img className='loader' src={loading} alt="loading" />
    </div>
  )
}

export default Loading