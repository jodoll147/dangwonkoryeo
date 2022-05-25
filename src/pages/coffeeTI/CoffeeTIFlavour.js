import CoffeeTIContainer from '../styled/CoffeeTIContainer';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Flavour = styled.div`
  position: relative;
  display: line;
  top: 36px;
  margin-bottom: 20px;
  width: 100px;
  height: 50px;
  background: rgba(166, 140, 118, 0.7);
  border-radius: 10px;
  font-family: 'Cafe24';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 50px;
  color: #f2f2f2;
  cursor: pointer;
`;

const CoffeeTIFlavour = () => {
  const [hover, setHover] = useState('#CCD9D9');
  const [click, setClick] = useState(null);
  const checkedList = ['견과류', '과일', '초콜릿', '꽃'];

  const onClickEvent = index => {
    setClick(index);
  };

  return (
    <CoffeeTIContainer>
      <section>
        <p>coffeeTI</p>
        <div className='que'>
          <p>원하는 향을 한 가지 선택해주세요.</p>
        </div>
        <div className='flavour' value=''>
          {checkedList.map((flavours, i) => (
            <Flavour
              style={{
                background: click === i ? '#594031' : 'rgba(166, 140, 118, 0.7)',
              }}
              onClick={() => onClickEvent(i)}
            >
              {flavours}
            </Flavour>
          ))}
        </div>

        <div
          className='nextButton'
          style={{ background: hover }}
          onMouseOver={() => setHover('#4EA6A6')}
          onMouseLeave={() => setHover('#CCD9D9')}
        >
          <Link to='/coffeeTI/result' style={{ textDecoration: 'none', color: '#F2F2F2' }}>
            다음
          </Link>
        </div>
      </section>
    </CoffeeTIContainer>
  );
};

export default CoffeeTIFlavour;
