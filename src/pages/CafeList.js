import React, { useState } from 'react';
import styled from 'styled-components';
import cafeImg from './img/cafe_img.png';
import CafeListContainer from './styled/CafeListContainer';

const CafeList = () => {
  return (
    <CafeListContainer>
      <section>
        <div className='box'>
          <img src={cafeImg} alt='cafe_img' />
          <p>카페명</p>
        </div>
      </section>
    </CafeListContainer>
  );
};

export default CafeList;
