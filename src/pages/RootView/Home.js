import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import HomeContainer from '../styled/HomeContainer';
import Statebar from '../RootView/Statebar';

const Home = () => {
  return (
    <HomeContainer>
      <section>
        <Statebar />
        <div className='event_img'>
          <img src='' alt='예제' />
        </div>
      </section>
    </HomeContainer>
  );
};

export default Home;
