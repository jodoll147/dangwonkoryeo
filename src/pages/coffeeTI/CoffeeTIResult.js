import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import CoffeeTIContainer from '../styled/CoffeeTIContainer';
import coffeeTI_img from '../img/coffeeTI_img.png';

const CoffeeTI = styled.div`
  position: relative;
  top: 25px;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 16px;
  color: #4ea6a6;
`;

const CoffeeTIResult = props => {
  const { u_bean, feature } = props.result;
  console.log(u_bean);
  const [hover, setHover] = useState('#CCD9D9');

  const coffeeTI = 'BABY';
  console.log(props.result);
  return (
    <CoffeeTIContainer>
      <section>
        <p>coffeeTI</p>
        <div className='result'>
          <CoffeeTI>{u_bean}</CoffeeTI>
          {/*<img src={coffeeTI_img} alt='커피티아이 img' />*/}
          <div className='feature'>{feature}</div>
          <Link
            className='Button'
            to='/dangwonkeoyeo'
            style={{ textDecoration: 'none', color: '#F2F2F2', width: '60px', height: '35px' }}
            onMouseOver={() => setHover('#4EA6A6')}
            onMouseLeave={() => setHover('#CCD9D9')}
          >
            돌아가기
          </Link>
        </div>
      </section>
    </CoffeeTIContainer>
  );
};

export default CoffeeTIResult;
