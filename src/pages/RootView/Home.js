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
    dots: true, // 캐러셀이미지가 몇번째인지 알려주는 점을 보여줄지 정한다.
    infinite: true, // loop를 만들지(마지막 이미지-처음 이미지-중간 이미지들-마지막 이미지)
    speed: 500, // 애미메이션의 속도, 단위는 milliseconds
    slidesToShow: 1, // 한번에 몇개의 슬라이드를 보여줄 지
    slidesToScroll: 1, // 한번 스크롤시 몇장의 슬라이드를 넘길지
  };

  return (
    <Slider {...setting}>
      <div>
        <Link to='/'>
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
