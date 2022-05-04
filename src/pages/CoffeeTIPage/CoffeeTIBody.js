import { Link } from 'react-router-dom';
import CoffeeTIContainer from '../styled/CoffeeTIContainer';
import CoffeeTISelect from './CoffeeTISelect';

const CoffeeTIBody = () => {
  return (
    <div>
      <CoffeeTIContainer className='select'>
        <section>
          <div className='que'>
            <p>선호하는 바디감(쓴맛)의 정도를 선택해주세요.</p>
          </div>
          <CoffeeTISelect />
          <div className='nextButton'>
            <Link to='/coffeeTI/sour' style={{ textDecoration: 'none', color: '#F2F2F2' }}>
              다음
            </Link>
          </div>
        </section>
      </CoffeeTIContainer>
    </div>
  );
};

export default CoffeeTIBody;
