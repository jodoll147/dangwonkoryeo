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
        align-items: baseline;

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
        align-items: baseline;

        .cafeInfo {
          position: relative;
          font-family: 'Cafe24';
          font-style: normal;
          font-weight: 700;
          font-size: 16px;
          line-height: 16px;
          color: #594031;
        }
      }
      .info {
        position: relative;
        margin-left: 10px;
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
  const [testBtnHover, setTestBtnHover] = useState('#D2D9CC');
  const [businessPageHover, setBusinessPageHover] = useState('#4EA6A6');
  const [favorShop, setFavorShop] = useState([{ id: '', name: '', exp: '' }]);
  const info = getUserInfo();

  useEffect(() => {
    if (info?.user_id) {
      getUserFavor(info.user_id).then(res => {
        if (res) {
          const favorCafe = res.map(v => {
            return v.shop;
          });
          getShopList().then(res => {
            if (res) {
              setFavorShop(
                res
                  .filter(v => favorCafe.includes(v.id))
                  .map(v => {
                    return {
                      id: v.id,
                      name: v.shop_name,
                      exp: v.shop_exp,
                    };
                  }),
              );
            }
          });
        }
      });
    }

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
          <Link to='/accountmodify'>계정 수정</Link>
        </div>
        <div className='coffeeTIBox'>
          <div className='coffeeTI'>커피티아이</div>
          <div
            className='check'
            onMouseOver={() => setTestBtnHover('#4EA6A6')}
            onMouseLeave={() => setTestBtnHover(' #D2D9CC')}
            style={{ background: testBtnHover }}
          >
            <Link to='/coffeeTI/first' style={{ textDecoration: 'none', color: '#f2f2f2' }}>
              검사하기
            </Link>
          </div>
        </div>
        <Tag>
          {user.userBean == null ? (
            <></>
          ) : (
            <div className='tag' style={{ top: '5px' }}>
              <div className='bean' style={{ color: '#4EA6A6' }}>
                #{user.userBean}
              </div>
              <div className='flavor' style={{ color: '#4EA6A6' }}>
                #{user.userFlavor}
              </div>
            </div>
          )}
        </Tag>
        <div className='cafeListBox'>
          <div className='cafeList' style={{ top: '5px' }}>
            찜한 카페 목록
          </div>
          {favorShop == null ? <></> : shopList}
        </div>
        <div className='busniessPage' style={{ background: businessPageHover }}>
          <Link
            to='/business'
            onMouseOver={() => setBusinessPageHover('#306666')}
            onMouseLeave={() => setBusinessPageHover('#4EA6A6')}
            style={{ textDecoration: 'none', color: '#f2f2f2' }}
          >
            사장님 페이지
          </Link>
        </div>
      </section>
    </MyPageContainer>
  );
};

export default MyPage;
