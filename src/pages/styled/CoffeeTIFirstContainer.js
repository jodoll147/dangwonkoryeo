import styled from 'styled-components';

const CoffeeTIFirstContainer = styled.div`
.first{
  section {
    position: relative;
    width: 940px;
    height: 100vh: 
    font-family: 'NanumGothic';
    font-style: normal;
    font-weight: 800;
    font-size: 40px;
    letter-spacing: -0.333333px;
    margin: 0 auto;
    color: #f2f2f2;
    :not(:disabled) {
      cursor: pointer;
    }

    .button1 {
        position: relative;
        width: 510px;
        height: 120px;
        top: -500px;
        left: 230px;
        background: #a68c76;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 10px;
        text-align: center;
        display: table-cell;
        vertical-align: middle;
      }
    
      .button2 {
        position: relative;
        width: 510px;
        height: 120px;
        top: -320px;
        left: -240px;
        background: #4ea6a6;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 10px;
        text-align: center;
        display: table-cell;
        vertical-align: middle;
      }
  }
}

`;

export default CoffeeTIFirstContainer;
