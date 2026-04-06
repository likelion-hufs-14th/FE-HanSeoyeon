import './Introduce.css'
import logo from '../../src/assets/meotsa_logo.png'

function Introduce() {

  return(
      <div className='meotsa-introduce'>

        <div className='meotsa-introduce-text'>
          <h3>멋쟁이사자처럼 블로그에 방문하신 것을 환영합니다.</h3>

          <div className="meotsa-sec-container">

            <img src={logo} alt='멋사 로고' className='meotsa-logo' />
            <ul className="meotsa-introduce-specific">
                <li>
                    IT 창업 연합동아리 멋쟁이사자처럼입니다.
                </li>
                <li>
                    전국 대학생들과 함께 기술과 창업 지식을 교류하는 커뮤니티입니다.
                </li>
                <li>단순히 코딩 교육을 넘어, 팀 빌딩부터 서비스 배포까지 전 과정을 경험하며 '내 아이디어'를 세상에 내보내는 실현의 장입니다.</li>

            </ul>
          </div>
              
        </div>
      </div>
  )
}

export default Introduce
