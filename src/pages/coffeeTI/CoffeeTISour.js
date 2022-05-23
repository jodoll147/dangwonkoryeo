import { Link } from 'react-router-dom';
import { useState } from 'react';
import CoffeeTIContainer from '../styled/CoffeeTIContainer';
import CoffeeTISelect from './CoffeeTISelect';

const CoffeeTIBody = () => {
  const [hover, setHover] = useState('#CCD9D9');

  return (
    <CoffeeTIContainer>
      <section>
        <p>coffeeTI</p>
        <div className='que'>
          <p>선호하는 산미(신맛)의 정도를 선택해주세요.</p>
        </div>
        <CoffeeTISelect />
        <div
          className='nextButton'
          style={{ background: hover }}
          onMouseOver={() => setHover('#4EA6A6')}
          onMouseLeave={() => setHover('#CCD9D9')}
        >
          <Link to='/coffeeTI/flavour' style={{ textDecoration: 'none', color: '#F2F2F2' }}>
            다음
          </Link>
        </div>
      </section>
    </CoffeeTIContainer>
  );
};

export default CoffeeTIBody;
