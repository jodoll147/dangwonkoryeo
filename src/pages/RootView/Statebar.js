import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import StatebarContainer from '../styled/StatebarContainer';
import hashTag from '../img/hashTag.png';
// 가장 먼저 보여지는 페이지
const Home = () => {
  const [isMouseOver, setMouseOver] = useState(false);

  return (
    <StatebarContainer>
      <header>
        <section>
          <div className='statebar'>
            <ul>
              <li>
                <div className='home'>
                  <Link to='/' style={{ textDecoration: 'none', color: '#F2F2F2' }}>
                    당원커여
                  </Link>
                </div>
              </li>
              <li>
                <div className='intro'>
                  <Link to='/intro' style={{ textDecoration: 'none', color: '#F2F2F2' }}>
                    당원커여 소개
                  </Link>
                </div>
              </li>
              <li>
                <div className='coffeeTI'>
                  <Link to='/coffeeTI/first' style={{ textDecoration: 'none', color: '#F2F2F2' }}>
                    커피티아이
                  </Link>
                </div>
              </li>
              <li>
                <div className='notice'>
                  <Link to='/notice' style={{ textDecoration: 'none', color: '#F2F2F2' }}>
                    공지사항
                  </Link>
                </div>
              </li>
              <li>
                <div className='login'>
                  <Link to='/login' style={{ textDecoration: 'none', color: '#F2F2F2' }}>
                    LOGIN
                  </Link>
                </div>
              </li>
              <li>
                <div className='join'>
                  <Link to='/join' style={{ textDecoration: 'none', color: '#F2F2F2' }}>
                    JOIN
                  </Link>
                </div>
              </li>
              <li>
                <div className='hash'>
                  <img src={hashTag} alt='hashTag' />
                </div>
              </li>
            </ul>
          </div>
        </section>
      </header>
      <main>
        <Outlet />
      </main>
    </StatebarContainer>
  );
};

export default Home;
