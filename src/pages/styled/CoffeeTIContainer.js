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
    .nextButton {
      position: relative;
      width: 60px;
      height: 35px;
      margin-left: 635px;
      top: 40px;
      font-family: 'Cafe24Bold';
      background: #ccd9d9;
      border-radius: 10px;
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      line-height: 35px;
    }
    .firstBox {
      position: relative;
      margin-top: 130px;
      .result {
        position: relative;
        width: 300px;
        height: 60px;
        margin-left: 320px;
        border-radius: 20px;
        font-family: 'Cafe24';
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 60px;
        color: #f2f2f2;
      }
    }
    .select {
      position: relative;
      top: 20px;
    }

    .flavour {
      position: relative;
      display: flex;
      margin: 20px 345px 20px 345px;
      flex-wrap: wrap;
      justify-content: space-between;
      align-content: flex-start;
    }
    .Button {
      position: relative;
      width: 60px;
      height: 35px;
      margin-left: 635px;
      top: 40px;
      font-family: 'Cafe24Bold';
      background: #ccd9d9;
      border-radius: 10px;
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      line-height: 35px;
    }

    img {
      position: relative;
      top: 39px;
      margin-bottom: 10px;
    }

    .result {
      position: relative;
      .feature {
        position: relative;
        margin-top: 35px;
      }
    }
  }
`;

export default CoffeeTIContainer;
