import CoffeeTIContainer from '../styled/CoffeeTIContainer';
import CoffeeTISelect from './CoffeeTISelect';

const CoffeeTIBody = () => {
  return (
    <div>
      <p>선호하는 산미(신맛)의 정도를 선택해주세요.</p>
      <CoffeeTISelect />
    </div>
  );
};

export default CoffeeTIBody;
