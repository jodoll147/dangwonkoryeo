import React, { useState } from 'react';
import styled from 'styled-components';
import cafeImg from '../img/cafe_img.png';
import CafeListContainer from '../styled/CafeListContainer';
import HashTag from '../styled/HashTag';

const CafeList = () => {
  return (
    <CafeListContainer>
      <section>
        <div className='box'>
          <img src={cafeImg} alt='cafe_img' />
          <div className='subBox'>
            <div className='cafe_name'>카페명</div>
            <HashTag className='hashTag' />
          </div>
        </div>
      </section>
    </CafeListContainer>
  );
};

export default CafeList;
