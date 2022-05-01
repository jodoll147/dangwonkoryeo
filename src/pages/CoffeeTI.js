import react, { useState } from 'react';
import { Link } from 'react-router-dom';
import CoffeTIContainer from './styled/CoffeeTIContainer';
import CoffeeTI_first from './CoffeeTIPage/CoffeeTI_first';
import CoffeeTI_select from './CoffeeTIPage/CoffeeTI_select';
const coffeetiPage = () => {};

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
            <div className='box'></div>
          </div>
        </div>
      </section>
    </CoffeTIContainer>
  );
};

export default CoffeeTI;
