import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import HomeContainer from './styled/HomeContainer';

// 가장 먼저 보여지는 페이지
const Home = () => {
  const [visible, setVisible] = useState(false);

  const onMouseView = (
    <div
      className='onMouse'
      onMouseOver={() => 
        
        
        
        setVisible(!visible)}
      onMouseDown={() => 
        
        
        
        setVisible(!visible)}
    >
      <div className='notice'>
        <Link
          to='/notice'
          style={{ textDecoration: 'none', color: '#594031' }}
          onMouseOver={() => setVisible(!visible)}
          onMouseDown={() => setVisible(!visible)}
        >
          공지사항
        </Link>
      </div>
      <div className='FAQ'>
        <Link
          to='/FAQ'
          style={{ textDecoration: 'none', color: '#594031' }}
          onMouseOver={() => setVisible(!visible)}
          onMouseDown={() => setVisible(!visible)}
        >
          FAQ
        </Link>
      </div>
      <div className='service_center'>
        <Link
          to='/service_center'
          style={{ textDecoration: 'none', color: '#594031' }}
          onMouseOver={() => setVisible(!visible)}
          onMouseDown={() => setVisible(!visible)}
        >
          고객센터
        </Link>
      </div>
    </div>
  );

  return (
    <HomeContainer>
      <header>
        <section align='center'>
          <div className='main'>
            <div className='login'>
              <Link to='/login' style={{ textDecoration: 'none', color: '#4EA6A6' }}>
                login
              </Link>
            </div>
            <div className='join'>
              <Link to='/join' style={{ textDecoration: 'none', color: '#4EA6A6' }}>
                join
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
            <div className='statebar'>
              <div className='intro'>
                <Link to='/intro' style={{ textDecoration: 'none', color: '#F2F2F2' }}>
                  당원커여 소개
                </Link>
              </div>
              <div className='coffeeTI'>
                <Link to='/coffeeTI' style={{ textDecoration: 'none', color: '#F2F2F2' }}>
                  커피티아이
                </Link>
              </div>
              <div className='notice'>
                <Link
                  to='/notice'
                  style={{ textDecoration: 'none', color: '#F2F2F2' }}
                  onMouseOver={() => setVisible(!visible)}
                  onMouseDown={() => setVisible(!visible)}
                >
                  공지사항
                </Link>
              </div>
            </div>
          </div>
          {/* onMouseOver 수정하기 */}
          <div onMouseOver={() => setVisible(1)} onMouseOut={() => setVisible(0)}>
            {visible ? <div>{onMouseView}</div> : ''}
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
