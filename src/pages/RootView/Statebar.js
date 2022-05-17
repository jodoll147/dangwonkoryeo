import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import StatebarContainer from '../styled/StatebarContainer';
import hashTag from '../img/hashTag.png';
import styled from 'styled-components';

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

    .bodyBox {
      position: relative;
      .bodyTitle {
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
    .SourBox {
      position: relative;
      .bodyTitle {
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
    .FlavourBox {
      position: relative;
      .bodyTitle {
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
    }
  }
`;

const HashFillter = () => {
  return (
    <HashTagContainer>
      <div className='hashTagBox'>
        <div className='hashTitle'>해시태그 필터</div>
        <div className='bodyBox'>
          <div className='bodyTitle'>바디감</div>
          <div className='hashBox'></div>
        </div>
        <div className='SourBox'>
          <div className='bodyTitle'>산미</div>
          <div className='hashBox'></div>
        </div>
        <div className='FlavourBox'>
          <div className='bodyTitle'>향</div>
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
  const onClickEvent = () => {
    setOnClick(!onClick);
    return false;
  };

  return (
    <StatebarContainer>
      <header>
        <section>
          <div className='statebar'>
            <div className='home'>
              <Link to='/home' style={{ textDecoration: 'none', color: '#F2F2F2' }}>
                당원커여
              </Link>
            </div>

            <div className='intro'>
              <Link to='/intro' style={{ textDecoration: 'none', color: '#F2F2F2' }}>
                당원커여 소개
              </Link>
            </div>

            <div className='coffeeTI'>
              <Link to='/coffeeTI/first' style={{ textDecoration: 'none', color: '#F2F2F2' }}>
                커피티아이
              </Link>
            </div>

            <div className='notice'>
              <Link to='/notice' style={{ textDecoration: 'none', color: '#F2F2F2' }}>
                공지사항
              </Link>
            </div>

            <div className='login'>
              <Link to='/login' style={{ textDecoration: 'none', color: '#F2F2F2' }}>
                LOGIN
              </Link>
            </div>

            <div className='join'>
              <Link to='/join' style={{ textDecoration: 'none', color: '#F2F2F2' }}>
                JOIN
              </Link>
            </div>
            <div className='hash'>
              <img src={hashTag} alt='hashTag' onClick={onClickEvent} />
            </div>
          </div>
          {onClick ? <HashFillter /> : null}
        </section>
      </header>
      <main>
        <Outlet />
      </main>
    </StatebarContainer>
  );
};

export default Home;
