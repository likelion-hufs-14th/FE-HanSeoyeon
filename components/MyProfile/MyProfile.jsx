import './MyProfile.css'
import lion from '../../src/assets/small_lion.jpg'


function MyProfile() {
  return (
    <div className='myprofile-container'>
      <h2 className='myprofile-name'>
        한서연
      </h2>
      <img src={lion} alt='small_lion.jpg' width='150px' /> 
      
      <div className='myprofile-position'>멋쟁이사자처럼 14기 프론트</div>
      <hr /><br/>      

      <div className='myprofile-writing'>글 수: 3개<br/>댓글 수: 4개</div>
      <br/><hr />
      <h4 className='myprofile-recent'>
        최근 활동
      </h4>
      <ul className='myprofile-recentact'>
        <li>
          Comment: 나도 집에 가고 싶어.
        </li>
        <li>
          Comment: 안녕하세요. 반갑습니다.
        </li>
      </ul>



    </div>
  )
}

export default MyProfile
