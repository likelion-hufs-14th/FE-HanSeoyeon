import './Neighbor.css'
import lion from '../../src/assets/small_lion.jpg'

function Neighbor() {

  return (
    <div className="neighbor-container">

      <div className="neighbor-title">
        이웃
      </div><hr/>

      <img src={lion} alt='small_lion.jpg' width='50px' /> 
      <img src={lion} alt='small_lion.jpg' width='50px' /> 
      <img src={lion} alt='small_lion.jpg' width='50px' /> 
      

    </div>
  )
}

export default Neighbor
