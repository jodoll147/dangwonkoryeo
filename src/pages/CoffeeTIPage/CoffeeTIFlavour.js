import CoffeeTIContainer from '../styled/CoffeeTIContainer';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Button = styled.button`
  width: 190px;
  height: 80px;
  font-family: 'NanumGothic';
  font-size: 30px;
  font-style: normal;
  font-weight: 800;
  text-align: center;
  letter-spacing: -0.333333px;
  color: #ffffff;
  border-radius: 20px;
  :not(:disabled) {
    cursor: pointer;
  }
`;

const CoffeeTIFlavour = () => {
  const [checkedList, setCheckedList] = useState([
    { name: '견과류' },
    { name: '과일' },
    { name: '초콜릿' },
    { name: '꽃' },
  ]);

  const list = checkedList.map(checklist => <Button>{checklist.name}</Button>);

  return (
    <CoffeeTIContainer className='select'>
      <section>
        <div className='que'>
          <p>원하는 향을 두 가지 선택해주세요.</p>
        </div>
        {list}
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
