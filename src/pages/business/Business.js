import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import BusinessContainer from '../styled/BusinessContainer';
import { getShopList, getUserInfo } from '../../api/constant';

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

const ShopModify = () => {};

const Business = () => {
  const navigate = useNavigate();
  const [allCafe, setAllCafe] = useState([{ userNum: null, id: null, name: null }]);
  const info = getUserInfo();
  const userInfo = { userId: info.user_id, userName: info.username };

  useEffect(() => {
    getShopList().then(res => {
      if (res) {
        setAllCafe(
          res.map(v => {
            return {
              userNum: v.user_num,
              id: v.id,
              name: v.shop_name,
            };
          }),
        );
      }
    });
  }, []);

  const cafe = allCafe.filter(v => v.userNum == userInfo.userId);

  const cafeList = cafe.map((cafe, i) => {
    return (
      <Link to={`/shopmodify?id=${cafe.id}`} style={{ textDecoration: 'none' }}>
        <CafeListContainer>
          <div className='num'>{i}</div>
          <div className='name'>{cafe.name}</div>
        </CafeListContainer>
      </Link>
    );
  });

  return (
    <BusinessContainer>
      <section>
        <div className='shopModifyBox'>
          <div className='title'>Business Page</div>
          <div className='userNameBox'>
            <div className='userName'>{userInfo.userName}</div>
            <div className='info'>사장님 반갑습니다!</div>
          </div>
          <div className='shop'>
            <p>내 가게 관리하기</p>
            {cafeList}
            <div className='shopadd'>
              <Link to='/shopadd' style={{ textDecoration: 'none', color: '#F2F2F2' }}>
                추가
              </Link>
            </div>
          </div>
        </div>
      </section>
    </BusinessContainer>
  );
};

export default Business;
