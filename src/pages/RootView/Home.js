import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import HomeContainer from '../styled/HomeContainer';
import coffeeTI from '../img/coffeeTIBanner.png';
import dangwonkeoyeo from '../img/dangwonkeoyeoBanner.png';
import CafeList from '../rootView/CafeList';
import { hover } from '@testing-library/user-event/dist/hover';

const Slide = () => {
  const setting = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...setting}>
      <div>
        <Link to='/intro'>
          <img src={dangwonkeoyeo} alt='dangwonkeoyeo' />
        </Link>
      </div>
      <div>
        <Link to={'/coffeeTI/first'}>
          <img src={coffeeTI} alt='coffeeTI' />
        </Link>
      </div>
    </Slider>
  );
};

const Home = () => {
  const [hover, setHover] = useState('#4ea6a6');

  return (
    <HomeContainer>
      <section>
        <div className='event_img'>
          <Slide />
        </div>
        <div className='cafe_list'>
          <p>추천 카페</p>
          <CafeList />
        </div>
        <div
          className='landmarkBtn'
          style={{ background: hover }}
          onMouseOver={() => setHover('#377575')}
          onMouseLeave={() => setHover('#4ea6a6')}
        >
          <Link to='/landmark' style={{ textDecoration: 'none', color: '#F2F2F2' }}>
            더보기
          </Link>
        </div>
      </section>
    </HomeContainer>
  );
};

export default Home;
