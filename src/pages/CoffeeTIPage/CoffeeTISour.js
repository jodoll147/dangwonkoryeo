import CoffeeTIContainer from '../styled/CoffeeTIContainer';
import CoffeeTISelect from './CoffeeTISelect';
import { Link } from 'react-router-dom';

const CoffeeTIBody = () => {
  return (
    <CoffeeTIContainer>
      <section>
        <p>coffeeTI</p>
        <div className='que'>
          <p>선호하는 산미(신맛)의 정도를 선택해주세요.</p>
        </div>
        <CoffeeTISelect />
        <div className='nextButton'>
          <Link to='/coffeeTI/flavour' style={{ textDecoration: 'none', color: '#F2F2F2' }}>
            다음
          </Link>
        </div>
      </section>
    </CoffeeTIContainer>
  );
};

export default CoffeeTIBody;
