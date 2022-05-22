import styled from 'styled-components';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BusinessContainer from '../styled/BusinessContainer';

const CafeListContainer = styled.div`
  position: relative;
  display: flex;
  width: 940px;
  height: 70px;
  border: 1px solid #f2f2f2;
  font-family: 'Cafe24';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 70px;
  .num {
    position: relative;
    width: 20px;
    margin-left: 30px;
    color: #4ea6a6;
  }
  .name {
    position: relative;
    margin-left: 10px;
    color: black;
  }
`;

const CafeList = () => {
  const [cafe, setcafe] = useState([
    { num: 0, name: '김첨지커피' },
    { num: 1, name: '명선이커피' },
  ]);
  const cafeList = cafe.map(temp => (
    <CafeListContainer>
      <div className='num'>{temp.num}</div>
      <div className='name'>{temp.name}</div>
    </CafeListContainer>
  ));

  return cafeList;
};

const ShopModify = () => {
  return (
    <div className='shopModifyBox'>
      <div className='title'>Business Page</div>
      <div className='userNameBox'>
        <div className='userName'>김첨지</div>
        <div className='info'>사장님 반갑습니다!</div>
      </div>
      <div className='shop'>
        <p>내 가게 관리하기</p>
        <CafeList />
        <div className='shopadd'>
          <Link to='/shopadd' style={{ textDecoration: 'none', color: '#F2F2F2' }}>
            추가
          </Link>
        </div>
      </div>
    </div>
  );
};

const Business = () => {
  return (
    <BusinessContainer>
      <section>
        <ShopModify />
      </section>
    </BusinessContainer>
  );
};

export default Business;
