import react, { useState } from 'react';
import { Link } from 'react-router-dom';
import CoffeeTIContainer from '../styled/CoffeeTIContainer';

const CoffeeTIFirst = () => {
  const [resultHover, setresultHover] = useState('rgba(78, 166, 166, 0.7)'); // 버튼 마우스에 올리기

  return (
    <CoffeeTIContainer>
      <section>
        <p>coffeeTI</p>
        <div className='firstBox'>
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
        </div>
      </section>
    </CoffeeTIContainer>
  );
};

export default CoffeeTIFirst;
