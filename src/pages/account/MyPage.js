import { Link } from 'react-router-dom';
import React from 'react';
import MyPageContainer from '../styled/MyPageContainer';
import HashTag from '../tag/HashTag';
import styled from 'styled-components';

const Cafe = () => {
  const CafeContainer = styled.div`
    .cafeBox {
      position: relative;
      width: 940px;
      height: 104px;
      align-items: baseline;
      border: 1px solid #f2f2f2;

      .cafe {
        position: relative;
        display: flex;
        margin-top: 20px;
        margin-left: 30px;
        margin-top: 15px;
        .cafeName {
          position: relative;
          margin-right: 10px;
          font-family: 'Cafe24';
          font-style: normal;
          font-weight: 700;
          font-size: 16px;
          line-height: 16px;
          color: #594031;
        }
        .cafeInfo {
          position: relative;
          font-family: 'Cafe24';
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 16px;
          color: #594031;
        }
      }
      .hashBox {
        position: relative;
        margin-top: 10px;
        margin-left: 15px;
        width: 940px;
        height: 30px;
        .hashList {
          position: relative;
          display: flex;
        }
      }
    }
  `;
  return (
    <CafeContainer>
      <div className='cafeBox'>
        <div className='cafe'>
          <div className='cafeName'>카페이름</div>
          <div className='cafeInfo'>카페정보</div>
        </div>
        <div className='hashBox'>
          <HashTag />
        </div>
      </div>
    </CafeContainer>
  );
};
const MyPage = () => {
  const cafelist = [Cafe, Cafe, Cafe, Cafe];
  const cafelistMap = cafelist.map(temp => <div>{temp}</div>);
  return (
    <MyPageContainer>
      <section>
        <div className='myPage'>MyPage</div>
        <div className='nameBox'>
          <div className='name'>이름</div>
          <div className='userName'>김첨지</div>
        </div>
        <div className='coffeeTIBox'>
          <div className='coffeeTI'>커피티아이</div>
          <div className='type'>BABY</div>
          <div className='check'>검사하기</div>
        </div>
        <HashTag />
        <div className='cafeListBox'>
          <div className='cafeList'>찜한 카페 목록</div>
          <Cafe />
          <Cafe />
        </div>
        <Link
          to='/business'
          className='busniessPage'
          style={{ textDecoration: 'none', color: 'black' }}
        >
          사장님 페이지
        </Link>
      </section>
    </MyPageContainer>
  );
};

export default MyPage;
