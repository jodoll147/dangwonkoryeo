import CoffeeTIContainer from '../styled/CoffeeTIFirstContainerContainer';
import react, { useState } from 'react';
import { Link } from 'react-router-dom';

const CoffeeTIFirst = () => {
  const [isButtonOver, setButtonOver] = useState(false); // 버튼 마우스에 올리기

  return (
    <CoffeeTIContainer className='first'>
      <section>
        <div className='button1'>
          <Link
            to='/coffeeTI/result'
            style={{ textDecoration: 'none', color: '#F2F2F2' }}
            onMouseOver={() => {
              setButtonOver(true);
            }}
            onMouseLeave={() => {
              setButtonOver(false);
            }}
          >
            입문자용 추천 받기
          </Link>
        </div>
        <div className='button2'>
          <Link
            to='/coffeeTI/body'
            style={{ textDecoration: 'none', color: '#F2F2F2' }}
            onMouseOver={() => {
              setButtonOver(true);
            }}
            onMouseLeave={() => {
              setButtonOver(false);
            }}
          >
            나에게 맞는 향 추천 받기
          </Link>
        </div>
      </section>
    </CoffeeTIContainer>
  );
};

export default CoffeeTIFirst;
