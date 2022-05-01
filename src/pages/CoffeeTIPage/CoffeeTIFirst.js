import CoffeeTIContainer from '../styled/CoffeeTIContainer';
import react, { useState } from 'react';
import { css } from 'styled-components';

const CoffeeTIFirst = () => {
  const [isButtonOver, setButtonOver] = useState(false); // 버튼 마우스에 올리기

  return (
    <CoffeeTIContainer>
      <div className='first'>
        <div className='button1'>
          <input
            type={'button'}
            style={{ background: '#A68C76', border: '#A68C76' }}
            onMouseOver={() => {
              setButtonOver(true);
            }}
            onMouseLeave={() => {
              setButtonOver(false);
            }}
            value='입문자용 추천 받기'
          />
        </div>
        <div className='button2'>
          <input
            type={'button'}
            style={{ background: '#4EA6A6', border: '#4EA6A6' }}
            onMouseOver={() => {
              setButtonOver(true);
            }}
            onMouseLeave={() => {
              setButtonOver(false);
            }}
            value='나에게 맞는 향 추천 받기'
          />
          {isButtonOver &&
            css`
              background: #594031;
            `}
        </div>
      </div>
    </CoffeeTIContainer>
  );
};

export default CoffeeTIFirst;
