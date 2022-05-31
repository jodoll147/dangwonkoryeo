import { BackgroundStyle } from 'quill';
import react, { useState } from 'react';
import { Link } from 'react-router-dom';
import CoffeeTIContainer from '../styled/CoffeeTIContainer';

const CoffeeTIFirst = () => {
  const [nextHover, setNextHover] = useState('rgba(166, 140, 118, 0.5)'); // 버튼 마우스에 올리기
  const [resultHover, setresultHover] = useState('rgba(78, 166, 166, 0.7)'); // 버튼 마우스에 올리기

  return (
    <CoffeeTIContainer>
      <section>
        {console.log(localStorage.getItem('token'))}
        <p>coffeeTI</p>
        <div
          className='next'
          style={{ background: nextHover }}
          onMouseOver={() => setNextHover('#A68C76')}
          onMouseLeave={() => setNextHover('rgba(166, 140, 118, 0.5)')}
        >
          <Link to='/coffeeTI/result' style={{ textDecoration: 'none', color: '#F2F2F2' }}>
            입문자용 커피 추천 받기
          </Link>
        </div>
        <div
          className='result'
          style={{ background: resultHover }}
          onMouseOver={() => setresultHover('#4EA6A6')}
          onMouseLeave={() => setresultHover('rgba(78, 166, 166, 0.7)')}
        >
          <Link to='/coffeeTI/body' style={{ textDecoration: 'none', color: '#F2F2F2' }}>
            나에게 맞는 향 추천 받기
          </Link>
        </div>
      </section>
    </CoffeeTIContainer>
  );
};

export default CoffeeTIFirst;
