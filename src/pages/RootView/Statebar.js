import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import HomeContainer from '../styled/HomeContainer';
import hashTag from '../img/hashTag.png';
// 가장 먼저 보여지는 페이지
const Home = () => {
  const [isMouseOver, setMouseOver] = useState(false);

  return (
    <HomeContainer>
      <header>
        <section align='center'>
          <div className='main'>
            <div>
              {/*
            {who}
            <button onClick={구리구리}>누군지 알아보기</button>
                */}
            </div>
            <div className='login'>
              <Link to='/login' style={{ textDecoration: 'none', color: '#4EA6A6' }}>
                LOGIN
              </Link>
            </div>

            <div className='join'>
              <Link to='/join' style={{ textDecoration: 'none', color: '#4EA6A6' }}>
                JOIN
              </Link>
            </div>

            <div className='home'>
              <Link to='/' style={{ textDecoration: 'none', color: '#4EA6A6' }}>
                당원커여
              </Link>
            </div>
            <div className='search_box'>
              <input type={'text'} />
            </div>
            <div className='search_btn'>
              <input type={'button'} value={'검색'} />
            </div>

            <div className='hash'>
              <img src={hashTag} alt='hashTag' />
            </div>

            <ul>
              <li>
                <Link to='/intro' style={{ textDecoration: 'none', color: '#F2F2F2' }}>
                  당원커여 소개
                </Link>
              </li>
              <li>
                <Link to='/coffeeTI/first' style={{ textDecoration: 'none', color: '#F2F2F2' }}>
                  커피티아이
                </Link>
              </li>
              <li>
                <div
                  className='notice'
                  onMouseOver={() => {
                    setMouseOver(true);
                  }}
                  onMouseLeave={() => {
                    setMouseOver(false);
                  }}
                >
                  <Link to='/notice' style={{ textDecoration: 'none', color: '#F2F2F2' }}>
                    공지사항
                  </Link>
                  {isMouseOver && (
                    <div className='sub'>
                      <ul>
                        <li>
                          <Link to='/notice' style={{ textDecoration: 'none', color: '#594031' }}>
                            공지사항
                          </Link>
                        </li>
                        <li>
                          <Link to='/FAQ' style={{ textDecoration: 'none', color: '#594031' }}>
                            FAQ
                          </Link>
                        </li>
                        <li>
                          <Link
                            to='/servicecenter'
                            style={{ textDecoration: 'none', color: '#594031' }}
                          >
                            고객센터
                          </Link>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </li>
            </ul>
          </div>
        </section>
      </header>
      <main>
        <Outlet />
      </main>
    </HomeContainer>
  );
};

export default Home;
