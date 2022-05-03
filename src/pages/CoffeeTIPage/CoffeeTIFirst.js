import CoffeeTIContainer from '../styled/CoffeeTIContainer';
import react, { useState } from 'react';
import styled from 'styled-components';

const Button = styled.button`
  width: 190px;
  height: 80px;
  font-family: 'NanumGothic';
  font-style: normal;
  font-weight: 800;
  text-align: center;
  letter-spacing: -0.333333px;
  color: #ffffff;
  border-radius: 20px;
`;

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
        </div>
      </div>
    </CoffeeTIContainer>
  );
};

const CoffeeTISelect = () => {
  return (
    <CoffeeTIContainer className='select'>
      <div className='que'>
        <p>선호하는 바디감(쓴맛)의 정도를 선택해주세요.</p>
      </div>
      <div className='weak'>
        <p>약</p>
      </div>
      <label>
        <input type={'radio'} name='body' value={1} />
        <input type={'radio'} name='body' value={2} />
        <input type={'radio'} name='body' value={3} />
        <input type={'radio'} name='body' value={4} />
      </label>
      <div className='strong'>
        <p>강</p>
      </div>
    </CoffeeTIContainer>
  );
};

const CoffeeTIFlavour = () => {
  return (
    <CoffeeTIContainer>
      <div className='flavourBox'>
        <Button styled={{ background: '#A68C76', border: '#A68C76' }}>견과류</Button>
        <Button styled={{ background: '#F5D787', border: '#F5D787' }}>과일</Button>
        <Button styled={{ background: '#594031', border: '#594031' }}>초콜릿</Button>
        <Button styled={{ background: '#F9C7E2', border: '#F9C7E2' }}>꽃</Button>
      </div>
    </CoffeeTIContainer>
  );
};

export default CoffeeTIFirst;
