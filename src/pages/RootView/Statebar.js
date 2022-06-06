import React, { useEffect, useState } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import HashTag from '../tag/HashTag';
import styled from 'styled-components';
import MainContainer from '../styled/MainContainer';
import BottomContainer from '../styled/BottomContainer';
import StatebarContainer from '../styled/StatebarContainer';
import { getUserInfo, hashTagPost } from '../../api/constant';
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
      input {
        position: relative;
        margin-left: 30px;
        width: 20px;
        height: 20px;
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
    .flavors {
      position: relative;

      margin-top: 40px;
      margin-left: 30px;
    }
    .flavor {
      position: relative;
      margin-left: 20px;
      margin-bottom: 10px;
      font-size: 16px;
      font-family: 'Cafe24Bold';
      width: 60px;
      height: 36px;
      cursor: pointer;
      border-radius: 10px;
      border: 1px #4ea6a6;
      background: #4ea6a6;
      line-height: 36px;
      color: #f2f2f2;
      text-align: center;
    }
    .etcBox {
      position: relative;
      .etcTitle {
        position: relative;
        margin-top: 40px;
        margin-left: 30px;
      }
      .parking {
        position: relative;
        margin-left: 20px;
        margin-bottom: 10px;
        font-size: 16px;
        font-family: 'Cafe24Bold';
        width: 80px;
        height: 36px;
        cursor: pointer;
        border-radius: 10px;
        border: 1px #4ea6a6;
        background: #4ea6a6;
        line-height: 36px;
        color: #f2f2f2;
        text-align: center;
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

const flavorValue = ['과일', '꽃', '초콜릿', '견과류'];

const HashFillter = () => {
  const value = [1, 2, 3, 4, 5];
  const [body, setBody] = useState('3');
  const [sour, setSour] = useState('3');
  const [flavor, setFlavor] = useState('');
  const [FlavorHover, setFlavorHover] = useState('');
  const [parking, setParking] = useState('True');
  const [parkingText, setParkingText] = useState('주차불가');
  const navigate = useNavigate();

  const setOnClickParking = () => {
    parking === 'True' ? setParking('False') : setParking('True');
    parking === 'True' ? setParkingText('주차가능') : setParkingText('주차불가');
  };

  return (
    <HashTagContainer>
      <div className='hashTagBox'>
        <div className='hashTitle'>해시태그 필터</div>
        <div className='beanBox'>
          <div>
            <div className='beanTitle'>바디감</div>
            <label onChange={e => setBody(e.target.value)}>
              {value.map(v => (
                <input type={'radio'} name='body' defaultChecked={v == 3} value={v} />
              ))}
            </label>
          </div>
          <div>
            <div className='beanTitle'>산미</div>
            <label onChange={e => setSour(e.target.value)}>
              {value.map(v => (
                <input type={'radio'} name='sour' defaultChecked={v == 3} value={v} />
              ))}
            </label>
          </div>
        </div>
        <div>
          <div className='flavors'>향</div>
          {flavorValue.map((v, i) => (
            <div
              key={i}
              className='flavor'
              value={v}
              style={{ background: FlavorHover == i ? '#2C5E5E' : '#4A9E9E' }}
              onClick={e => {
                setFlavor(v);
                setFlavorHover(i);
              }}
            >
              {v}
            </div>
          ))}
        </div>

        <div className='etcBox'>
          <div>
            <div className='etcTitle'>기타</div>
            <div
              className='parking'
              style={{ background: parking == 'True' ? '#4A9E9E' : '#2C5E5E' }}
              onClick={() => setOnClickParking()}
            >
              {parkingText}
            </div>
          </div>
        </div>
        <button
          className='searchBtn'
          onClick={e => {
            hashTagPost(body, sour, flavor, parking)
              .then(res => {
                navigate(`/search?data=${btoa(JSON.stringify(res?.shop_id ?? []))}`);
              })
              .catch(e => {
                alert('검색에 실패하였습니다.', e);
              });
          }}
        >
          검색
        </button>
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
            window.location.reload();
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
  }, []);

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
                  onMouseOver={() => {
                    setHoverIndex(i);
                  }}
                  onMouseLeave={() => {
                    setHoverIndex(p => (p === i ? null : p));
                  }}
                >
                  {v.text}
                </Link>
              );
            })}

            <div
              className='hash'
              style={{ left: localStorage.getItem('token') == null ? '200px' : '30px' }}
            >
              <img
                src={hover}
                alt='hashTag'
                onClick={() => {
                  setOnClick(!onClick);
                  return false;
                }}
                onMouseOver={() => setHover(hashTaghover)}
                onMouseLeave={() => setHover(hashTag)}
              />
            </div>
          </div>
          {onClick ? <HashFillter key={'hashtagFilter'} /> : <></>}
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
                <p>문의사항은 instargram @dangwonkeoyeo</p>
              </div>
            </div>
          </section>
        </BottomContainer>
      </main>
    </StatebarContainer>
  );
};

export default Home;
