import styled from 'styled-components';

const CoffeeTIContainer = styled.div`
  section {
    position: relative;
    width: 940px;
    height: 100vh: 
    font-family: 'NanumGothic';
    font-style: normal;
    letter-spacing: -0.333333px;
    margin: 0 auto;

    .back {
      position: relative;
      width: 100%;
      height: 100vh;
      text-align: center;
      background: linear-gradient(180deg, rgba(166, 140, 118, 0.61) 0%, #ccd9d5 63.26%);
    }
  }

  .box{
    position: relative;
    left: 145px;
    top: 10px;
    width: 650px;
    height: 600px;
    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    text-align: center;
  }

  .logo {
    position: relative;
    top: 90px;
    left: 145px;
    font-weight: 800;
    font-size: 30px;
    text-align: left;
    color: #f2f2f2;
  }

  .coffeeti{
    p{
      position: relative;
      top: 45px;    
      font-weight: 800;
      font-size: 64px;
      color: #594031;
      text-align: center;
    }
  }

  .first{
    position: relative;
    input{
      font-weight: 800;
      font-size: 40px;
      text-align: center;
      color: #F2F2F2;
      width: 510px;
      height: 120px;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 10px;
      :not(:disabled) {
        cursor: pointer;
      }
    }

    .button1{
      position: relative;
      top: 160px;
    }

    .button2{
      position: relative;
      top: 200px;
    }
  }
`;

export default CoffeeTIContainer;
