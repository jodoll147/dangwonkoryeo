import CoffeeTIContainer from '../styled/CoffeeTIContainer';
import NextButton from './NextButton';

const CoffeeTISelect = () => {
  return (
    <CoffeeTIContainer className='select'>
      <div className='que'>
        <p>선호하는 바디감(쓴맛)의 정도를 선택해주세요.</p>
      </div>
      <div className='weak'>
        <p>약</p>
      </div>
      <label>
        <input type={'radio'} name='body' value={1} />
        <input type={'radio'} name='body' value={2} />
        <input type={'radio'} name='body' value={3} />
        <input type={'radio'} name='body' value={4} />
      </label>
      <div className='strong'>
        <p>강</p>
      </div>
      <NextButton />
    </CoffeeTIContainer>
  );
};

export default CoffeeTISelect;
