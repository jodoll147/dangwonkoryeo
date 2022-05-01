import react, { useState } from 'react';
import { Link } from 'react-router-dom';
import { css, styled } from 'styled-components';
import CoffeTIContainer from './styled/CoffeeTIContainer';
import CoffeeTIFirst from './CoffeeTIPage/CoffeeTIFirst';
import CoffeeTISelect from './CoffeeTIPage/CoffeeTISelect';

const CoffeeTI = () => {
  return (
    <CoffeTIContainer>
      <section align='center'>
        <div className='back'>
          <div class='container'>
            <div className='logo'>
              <Link to='/' style={{ textDecoration: 'none', color: '#F2F2F2' }}>
                당원커여
              </Link>
            </div>
            <div className='coffeeti'>
              <p>CoffeeTI</p>
            </div>
            <div className='box'>
              <CoffeeTIFirst />
            </div>
          </div>
        </div>
      </section>
    </CoffeTIContainer>
  );
};

export default CoffeeTI;