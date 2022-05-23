import styled from 'styled-components';

const CoffeeTIContainer = styled.div`
  section {
    position: relative;
    width: 940px;
    height: 400px;
    background: #f2f2f2;
    p {
      position: relative;
      top: 30px;
      font-family: 'Cafe24Bold';
      font-style: normal;
      font-weight: 800;
      font-size: 20px;
      line-height: 20px;
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
      border-radius: 20px;
      font-family: 'Cafe24';
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
      border-radius: 20px;
      font-family: 'Cafe24';
      font-style: normal;
      font-weight: 700;
      font-size: 18px;
      line-height: 60px;
      color: #f2f2f2;
    }
    .que {
      p {
        position: relative;
        margin-top: 30px;
        font-family: 'Cafe24';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 16px;
        color: black;
      }
    }
    .select {
      position: relative;
      top: 20px;
    }

    .nextButton {
      position: absolute;
      bottom: 60px;
      left: 620px;
      padding: 5px 12px 5px 12px;
      font-family: 'Cafe24Bold';
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      background: #d2d9cc;
      border-radius: 10px;
    }
    .flavour {
      position: relative;
      display: flex;
      margin: 20px 345px 20px 345px;
      flex-wrap: wrap;
      justify-content: space-between;
      align-content: flex-start;
    }
    img {
      position: relative;
      top: 39px;
      margin-bottom: 10px;
    }
  }
`;

export default CoffeeTIContainer;
