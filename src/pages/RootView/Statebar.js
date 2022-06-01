import React, { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import HashTag from '../tag/HashTag';
import styled from 'styled-components';
import MainContainer from '../styled/MainContainer';
import BottomContainer from '../styled/BottomContainer';
import StatebarContainer from '../styled/StatebarContainer';
import { getUserInfo } from '../../api/constant';
import hashTag from '../img/hashTag.png';
import hashTaghover from '../img/hashTagHover.png';

const HashTagContainer = styled.div`
  .hashTagBox {
    position: absolute;
    z-index: 100;
    width: 500px;
    height: 100vh;
    left: 438px;
    text-align: left;
    font-family: 'Cafe24';
    background: white;
    border: 1px solid #c4c4c4;
    .hashTitle {
      position: relative;
      top: 20px;
      left: 30px;
      font-family: 'Cafe24Bold';
      font-style: normal;
      font-weight: 700;
      font-size: 20px;
      line-height: 24px;
      color: #4ea6a6;
    }

    .beanBox {
      position: relative;
      .beanTitle {
        position: relative;
        margin-top: 40px;
        margin-left: 30px;
      }
      .hashBox {
        position: relative;
        display: flex;
        align-items: baseline;
        left: 30px;
        top: 10px;
        margin-bottom: 40px;
        .hash {
          position: relative;
          margin-right: 10px;
          margin-bottom: 10px;
        }
      }
    }
    .etcBox {
      position: relative;
      .etcTitle {
        position: relative;
        margin-top: 40px;
        margin-left: 30px;
      }
      .hashBox {
        position: relative;
        display: flex;
        align-items: baseline;
        margin-left: 30px;
        margin-top: 10px;
        margin-bottom: 40px;
        .hash {
          position: relative;
          margin-right: 10px;
          margin-bottom: 10px;
        }
      }
    }
    .searchBtn {
      position: relative;
      float: right;
      margin-top: 60px;
      margin-right: 20px;
      margin-bottom: 20px;
      width: 60px;
      height: 36px;
      border-radius: 10px;
      border: 1px #4ea6a6;
      background: #4ea6a6;
      font-family: 'Cafe24Bold';
      font-style: normal;
      font-weight: 800;
      font-size: 18px;
      color: #f2f2f2;
      cursor: pointer;
    }
  }
`;

const HashFillter = () => {
  return (
    <HashTagContainer>
      <div className='hashTagBox'>
        <div className='hashTitle'>해시태그 필터</div>
        <div className='beanBox'>
          <div className='beanTitle'>원두</div>
          <div className='hashBox'>
            <HashTag value={null} />
          </div>
        </div>
        <div className='etcBox'>
          <div className='etcTitle'>기타</div>
          <div className='hashBox'></div>
        </div>
        <button className='searchBtn'>검색</button>
      </div>
    </HashTagContainer>
  );
};

// 가장 먼저 보여지는 페이지
const Home = () => {
  const [onClick, setOnClick] = useState(false);
  const [hover, setHover] = useState(hashTag);
  const [hoverIndex, setHoverIndex] = useState(null);
  const info = getUserInfo();

  const onClickEvent = () => {
    setOnClick(!onClick);
    return false;
  };

  const mouseOverEvent = index => {
    setHoverIndex(index);
  };

  const mouseLeaveEvent = index => {
    setHoverIndex(p => (p === index ? null : p));
  };

  const originalMenuItems = [
    {
      className: 'intro',
      linkTo: '/intro',
      text: '당원커여 소개',
    },
    {
      className: 'coffeeTI',
      linkTo: '/coffeeTI/first',
      text: '커피티아이',
    },
    {
      className: 'notice',
      linkTo: '/notice',
      text: '공지사항',
    },
  ];
  const [menuItems, setMenuItems] = useState(originalMenuItems);

  useEffect(() => {
    const check = localStorage.getItem('token');
    setMenuItems(p => {
      const menuItems = [...originalMenuItems];
      if (check) {
        menuItems.push({
          className: 'username',
          text: info?.username,
        });
        menuItems.push({
          className: 'logout',
          text: 'logout',
          linkTo: '/dangwonkeoyeo',
          action: () => {
            localStorage.removeItem('token');
            setMenuItems(p => [...p]);
            //새로고침하기
          },
        });
        menuItems.push({
          className: 'mypage',
          text: 'MYPAGE',
          linkTo: '/mypage',
        });
      } else {
        menuItems.push({
          className: 'login',
          linkTo: '/login',
          text: 'LOGIN',
        });
        menuItems.push({
          className: 'join',
          linkTo: '/join',
          text: 'JOIN',
        });
      }
      return [...menuItems];
    });
  }, [menuItems]);

  return (
    <StatebarContainer>
      <header>
        <section>
          <div className='statebar'>
            <div className='home'>
              <Link to='/dangwonkeoyeo' style={{ textDecoration: 'none', color: '#F2F2F2' }}>
                당원커여
              </Link>
            </div>

            {menuItems.map((v, i) => {
              return v.className === 'username' ? (
                <div className={v.className}>{v.text}님</div>
              ) : (
                <Link
                  key={i}
                  className={v.className}
                  to={v.linkTo}
                  style={{
                    textDecoration: 'none',
                    color: hoverIndex === i ? '#CCD9D9' : '#F2F2F2',
                  }}
                  onClick={() => (v.action ? v.action() : undefined)}
                  onMouseOver={() => mouseOverEvent(i)}
                  onMouseLeave={() => mouseLeaveEvent(i)}
                >
                  {v.text}
                </Link>
              );
            })}

            <div className='hash'>
              <img
                src={hover}
                alt='hashTag'
                onClick={onClickEvent}
                onMouseOver={() => setHover(hashTaghover)}
                onMouseLeave={() => setHover(hashTag)}
              />
            </div>
          </div>
          {onClick ? <HashFillter key={'hashtagFilter'} /> : null}
        </section>
      </header>
      <main>
        <MainContainer>
          <Outlet />
        </MainContainer>
        <BottomContainer>
          <section>
            <div className='bottomBox'>
              <div className='textBox'>
                <p>Since 2022</p>
                <p>create by 김수진, 조윤지</p>
                <p>문의사항은 instargram </p>
              </div>
            </div>
          </section>
        </BottomContainer>
      </main>
    </StatebarContainer>
  );
};

export default Home;
