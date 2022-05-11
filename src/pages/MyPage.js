import { Link } from 'react-router-dom';
import MyPageContainer from './styled/MyPageContainer';
import HashTag from './styled/HashTag';
import styled from 'styled-components';

const MyPage = () => {
  const CafeContainer = styled.div`
    .cafeBox {
      position: relative;
      width: 940px;
      height: 104px;
      .cafe {
        position: relative;
        display: flex;
        margin-top: 15px;
        margin-left: 30px;
        .cafeName {
          position: relative;
          margin-right: 10px;
          font-family: 'NanumGothic';
          font-style: normal;
          font-weight: 700;
          font-size: 16px;
          line-height: 16px;
          color: #594031;
        }
        .cafeInfo {
          position: relative;
          font-family: 'NanumGothic';
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 16px;
          color: #594031;
        }
        .hashBox {
          position: relative;
          display: flex;
          margin: 6px 30px 10px 20px;
        }
      }
    }
  `;
  const Cafe = () => {
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
    </CafeContainer>;
  };
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
        </div>
      </section>
    </MyPageContainer>
  );
};

export default MyPage;
