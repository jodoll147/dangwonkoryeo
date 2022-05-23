import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HomeContainer from '../styled/HomeContainer';
import banner from '../img/banner.png';
import CafeList from '../rootView/CafeList';

const Home = () => {
  return (
    <HomeContainer>
      <section>
        <div className='event_img'>
          <Link to={'/coffeeTI/first'}>
            <img src={banner} alt='예제' />
          </Link>
        </div>
        <div className='cafe_list'>
          <p>추천 카페</p>
          <CafeList />
        </div>
        <div className='landmarkBtn'>
          <Link to='/landmark' style={{ textDecoration: 'none', color: '#F2F2F2' }}>
            더보기
          </Link>
        </div>
      </section>
    </HomeContainer>
  );
};

export default Home;
