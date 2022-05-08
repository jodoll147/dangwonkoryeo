import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import HomeContainer from '../styled/HomeContainer';
import sample from '../img/sample.png';
import CafeList from '../CafeList';

const Home = () => {
  return (
    <HomeContainer>
      <section>
        <div className='event_img'>
          <img src={sample} alt='예제' />
        </div>
        <div className='cafe_list'>
          <p>추천 카페</p>
          <CafeList />
        </div>
      </section>
    </HomeContainer>
  );
};

export default Home;
