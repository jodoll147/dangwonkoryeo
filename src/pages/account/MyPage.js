import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import MyPageContainer from '../styled/MyPageContainer';
import HashTag from '../tag/HashTag';
import styled from 'styled-components';
import { getMypageShop, getUserInfo, getUserFavor } from '../../api/constant';
import { id } from 'date-fns/locale';

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

const MyPage = () => {
  const [favorCafe, setFavorCafe] = []; // cafeId
  const [shop, setShop] = [{ name: '', exp: '' }];
  const info = getUserInfo();

  console.log(info?.user_id);
  useEffect(() => {
    getUserFavor().then(res => {
      if (res) {
        setFavorCafe(
          res.map(v => {
            return v.shop;
          }),
        );
      }
    });
    /*
        favorCafe.map(cafeId =>
      getMypageShop(cafeId).then(res => {
        if (res) {
          setShop(
            res.map(v => {
              console.log(v);
              return {
                name: v.shop_name,
                exp: v.shop_exp,
              };
            }),
          );
        }
      }),
    );
    
    */
  });

  const cafe = (
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

  return (
    <MyPageContainer>
      <section>
        <div className='myPageBox'>
          <div className='myPage'>MyPage</div>
        </div>
        <div className='nameBox'>
          <div className='name'>이름</div>
          <div className='userName'>{info?.username}</div>
        </div>
        <div className='coffeeTIBox'>
          <div className='coffeeTI'>커피티아이</div>
          <div className='type'>BABY</div>
          <div className='check'>
            <Link to='/coffeeTI/first' style={{ textDecoration: 'none', color: '#f2f2f2' }}>
              검사하기
            </Link>
          </div>
        </div>
        <HashTag />
        <div className='cafeListBox'>
          <div className='cafeList'>찜한 카페 목록</div>
          {cafe}
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
