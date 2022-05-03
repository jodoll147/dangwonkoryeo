import CoffeeTIContainer from '../styled/CoffeeTIContainer';
import styled from 'styled-components';

const Button = styled.button`
  width: 190px;
  height: 80px;
  font-family: 'NanumGothic';
  font-style: normal;
  font-weight: 800;
  text-align: center;
  letter-spacing: -0.333333px;
  color: #ffffff;
  border-radius: 20px;
`;

const CoffeeTIFlavour = () => {
  return (
    <CoffeeTIContainer className='flavourBox'>
      <Button styled={{ background: '#A68C76', border: '#A68C76' }}>견과류</Button>
      <Button styled={{ background: '#F5D787', border: '#F5D787' }}>과일</Button>
      <Button styled={{ background: '#594031', border: '#594031' }}>초콜릿</Button>
      <Button styled={{ background: '#F9C7E2', border: '#F9C7E2' }}>꽃</Button>
    </CoffeeTIContainer>
  );
};

export default CoffeeTIFlavour;
