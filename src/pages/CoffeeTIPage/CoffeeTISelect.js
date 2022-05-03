import CoffeeTIContainer from '../styled/CoffeeTIContainer';

const CoffeeTISelect = () => {
  return (
    <CoffeeTIContainer className='select'>
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
    </CoffeeTIContainer>
  );
};

export default CoffeeTISelect;
