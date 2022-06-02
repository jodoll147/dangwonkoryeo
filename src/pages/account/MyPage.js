import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import MyPageContainer from '../styled/MyPageContainer';
import HashTag from '../tag/HashTag';
import styled from 'styled-components';
import {
  getShopList,
  getUserInfo,
  getUserFavor,
  getAllUser,
  getCoffeeTIResult,
} from '../../api/constant';
import { id } from 'date-fns/locale';

const CafeContainer = styled.div`
  .cafeBox {
    position: relative;
    width: 940px;
    height: 104px;
    align-items: baseline;
    border: 1px solid #f2f2f2;
    font-family: 'Cafe24';

    .cafe {
      position: relative;
      margin-top: 20px;
      margin-left: 30px;
      margin-top: 15px;
      .cafeNameBox {
        display: flex;
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
        .name {
          position: relative;
        }
      }
      .cafeInfoBox {
        position: relative;
        display: flex;
        margin-top: 10px;
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
      .info {
        position: relative;
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

const Tag = styled.div`
  .tag {
    position: relative;
    display: flex;
    align-items: baseline;
    .bean {
      position: relative;
      margin-left: 30px;
      margin-right: 10px;
    }
    .flavor {
      position: relative;
    }
  }
`;

const MyPage = () => {
  const [user, setUser] = useState({ userBean: '', userBody: '', userAcid: '', userFlavor: '' });
  const [favorCafe, setFavorCafe] = useState([]); // cafeId
  const [favorShop, setFavorShop] = useState([{ id: '', name: '', exp: '' }]);
  const info = getUserInfo();

  console.log(info?.user_id);

  useEffect(() => {
    getUserFavor(info?.user_id).then(res => {
      if (res) {
        setFavorCafe(
          res.map(v => {
            return v.shop;
          }),
        );
      }
    });
    getShopList(favorCafe).then(res => {
      if (res) {
        setFavorShop(
          res.map(v => {
            return {
              id: v.id,
              name: v.shop_name,
              exp: v.shop_exp,
            };
          }),
        );
      }
    });
    getAllUser().then(res => {
      if (res) {
        const tempUser = res.find(v => {
          return v.id == info.user_id;
        });
        setUser({
          userBean: tempUser.user_bean,
          userFlavor: tempUser.user_flavor,
        });
      }
    });
  }, []);

  const shopList = favorShop.map(v => (
    <CafeContainer>
      <div className='cafeBox'>
        <div className='cafe'>
          <div className='cafeNameBox'>
            <div className='cafeName'>카페이름</div>
            <div className='name'>{v.name}</div>
          </div>
          <div className='cafeInfoBox'>
            <div className='cafeInfo'>카페정보</div>
            <div className='info'>{v.exp}</div>
          </div>
        </div>
        <div className='hashBox'>
          <HashTag value={v.id} />
        </div>
      </div>
    </CafeContainer>
  ));

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
          <div className='type'></div>
          <div className='check'>
            <Link to='/coffeeTI/first' style={{ textDecoration: 'none', color: '#f2f2f2' }}>
              검사하기
            </Link>
          </div>
        </div>
        <Tag>
          <div className='tag'>
            <div className='bean'>{user.userBean}</div>
            <div className='flavor'>{user.userFlavor}</div>
          </div>
        </Tag>
        <div className='cafeListBox'>
          <div className='cafeList'>찜한 카페 목록</div>
          {shopList}
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
