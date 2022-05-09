import styled from 'styled-components';

const CoffeeTIContainer = styled.div`
  section {
    width: 940px;
    height: 400px;
    background: #f2f2f2;
    p {
      position: relative;
      top: 30px;
      font-family: 'NanumGothicExtraBold';
      font-style: normal;
      font-weight: 800;
      font-size: 18px;
      line-height: 18px;
      color: #594031;
    }
    .next {
      position: relative;
      left: 320px;
      margin-top: 80px;
      margin-bottom: 10px;
      width: 300px;
      height: 60px;
      display: block;
      background: rgba(166, 140, 118, 0.5);
      border-radius: 20px;
      font-family: 'NanumGothic';
      font-style: normal;
      font-weight: 700;
      font-size: 18px;
      line-height: 60px;
      color: #f2f2f2;
    }
    .result {
      position: relative;
      left: 320px;
      width: 300px;
      height: 60px;
      display: block;
      background: rgba(78, 166, 166, 0.7);
      border-radius: 20px;
      font-family: 'NanumGothic';
      font-style: normal;
      font-weight: 700;
      font-size: 18px;
      line-height: 60px;
      color: #f2f2f2;
    }
  }
`;

export default CoffeeTIContainer;
