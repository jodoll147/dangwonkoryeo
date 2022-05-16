import React, { useState } from 'react';
import cafeImg from '../img/cafe_img.png';
import CafeListContainer from '../styled/CafeListContainer';
import HashTag from '../styled/HashTag';

const CafeList = () => {
  const [cafe, setCafe] = useState([
    { img: cafeImg, name: 'sample카페명' },
    { img: cafeImg, name: 'sample카페명' },
  ]);

  const cafeList = cafe.map(cafe => (
    <CafeListContainer>
      <section>
        <div className='box'>
          <img src={cafe.img} alt='cafe_img' />
          <div className='subBox'>
            <div className='cafeName'>{cafe.name}</div>
            <HashTag />
          </div>
        </div>
      </section>
    </CafeListContainer>
  ));

  return cafeList;
};

export default CafeList;
