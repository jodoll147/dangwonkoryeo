import CafeList from './CafeList';
import styled from 'styled-components';
import { FontStyle } from 'quill';

const LandMarkContainer = styled.div`
  section {
    position: relative;
    p {
      position: relative;
      top: 20px;
      left: 20px;
      font-family: 'Cafe24Bold';
      font-size: 16px;
      line-height: 16px;
    }
  }
`;

const LandMark = () => {
  return (
    <LandMarkContainer>
      <section>
        <p style={{ textAlign: 'left' }}>추천 카페</p>
        <CafeList />
      </section>
    </LandMarkContainer>
  );
};

export default LandMark;
