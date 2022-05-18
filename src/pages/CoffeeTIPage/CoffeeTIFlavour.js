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
  const [clickList, setClickList] = useState({ background: '' });
  const checkedList = ['견과류', '과일', '초콜릿', '꽃'];
  const list = checkedList.map(checklist => <Flavour>{checklist}</Flavour>);

  return (
    <CoffeeTIContainer>
      <section>
        <p>coffeeTI</p>
        <div className='que'>
          <p>원하는 향을 한 가지 선택해주세요.</p>
        </div>
        <div className='flavour'>{list}</div>

        <div className='nextButton'>
          <Link to='/coffeeTI/result' style={{ textDecoration: 'none', color: '#F2F2F2' }}>
            다음
          </Link>
        </div>
      </section>
    </CoffeeTIContainer>
  );
};

export default CoffeeTIFlavour;
