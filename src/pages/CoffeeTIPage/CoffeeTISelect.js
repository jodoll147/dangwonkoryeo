import CoffeeTIContainer from '../styled/CoffeeTIContainer';

const CoffeeTISelect = () => {
  return (
    <CoffeeTIContainer>
      <p>선호하는 바디감(쓴맛)의 정도를 선택해주세요.</p>
      <p>약</p>
      <label>
        <input type={'radio'} name='body' value={1} />
        <input type={'radio'} name='body' value={2} />
        <input type={'radio'} name='body' value={3} />
        <input type={'radio'} name='body' value={4} />
      </label>
      <p>강</p>
    </CoffeeTIContainer>
  );
};

export default CoffeeTISelect;
