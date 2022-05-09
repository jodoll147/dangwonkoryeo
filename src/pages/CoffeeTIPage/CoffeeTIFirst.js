import react, { useState } from 'react';
import { Link } from 'react-router-dom';
import CoffeeTIContainer from '../styled/CoffeeTIContainer';

const CoffeeTIFirst = () => {
  const [isButtonOver, setButtonOver] = useState(false); // 버튼 마우스에 올리기

  return (
    <CoffeeTIContainer>
      <section>
        <p>coffeeTI</p>
        <Link
          className='next'
          to='/coffeeTI/body'
          style={{ textDecoration: 'none', color: '#F2F2F2' }}
        >
          입문자용 커피 추천 받기
        </Link>
        <Link
          className='result'
          to='/coffeeTI/result'
          style={{ textDecoration: 'none', color: '#F2F2F2' }}
        >
          나에게 맞는 향 추천 받기
        </Link>
      </section>
    </CoffeeTIContainer>
  );
};

export default CoffeeTIFirst;
