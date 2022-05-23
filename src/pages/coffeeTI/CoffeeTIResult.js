import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import CoffeeTIContainer from '../styled/CoffeeTIContainer';
import coffeeTI_img from '../img/coffeeTI_img.png';
const CoffeeTIResult = () => {
  const CoffeeTI = styled.div`
    position: relative;
    top: 25px;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 16px;
    color: #4ea6a6;
  `;
  const [hover, setHover] = useState('#CCD9D9');

  const coffeeTI = 'BABY';

  return (
    <CoffeeTIContainer>
      <section>
        <p>coffeeTI</p>
        <CoffeeTI>{coffeeTI}</CoffeeTI>
        <img src={coffeeTI_img} alt='커피티아이 img' />
        <div
          className='nextButton'
          style={{ background: hover }}
          onMouseOver={() => setHover('#4EA6A6')}
          onMouseLeave={() => setHover('#CCD9D9')}
        >
          <Link to='/dangwonkeoyeo' style={{ textDecoration: 'none', color: '#F2F2F2' }}>
            돌아가기
          </Link>
        </div>
      </section>
    </CoffeeTIContainer>
  );
};

export default CoffeeTIResult;
