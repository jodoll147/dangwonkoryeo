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
      height: 1024px;
      text-align: center;
      background: linear-gradient(180deg, rgba(166, 140, 118, 0.61) 0%, #ccd9d5 63.26%);
    }
  }
  

  .box{
    position: relative;
    left: 145px;
    top: 5px;
    width: 650px;
    height: 600px;
    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    text-align: center;
  }

  .logo {
    position: relative;
    top: 50px;
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
          top: -600px;
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
          top: -450px;
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
  
  .select{
    font-weight: 800;
    font-size: 30px;
    text-align: center;
    color: #A68C76;

    .flavour{
      position: relative;
      top: -650px;
      left: 350px;
      
    }

    .que{
      p{
        position: relative;
        top: -650px;  
        color: black;
        font-weight: 800;
        font-size: 30px;
        text-align: center;
      }
    }

    .weak{
      p{
        position: relative;
        top: -600px;
        left: -250px;
        text-align: center;
      }
    }

    .strong{
      p{
        position: relative;
        top: -800px;
        right: -250px;
        text-align: center;
      }
    }



    input{
      position: relative;
      top: -700px;
      width: 60px;
      height: 60px;
      margin: 20px;
      :not(:disabled) {
        cursor: pointer;
      }
    }



    .nextButton{
      position: relative;
      top: -610px;
      left: 675px;
      width: 100px;
      height: 50px;
      font-weight: 800;
      font-size: 30px;
      color: #F2F2F2;
      background: #D2D9CC;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border: #D2D9CC;
      border-radius: 10px;
      text-align: center;
      display: table-cell;
      vertical-align: middle;
      :not(:disabled) {
          cursor: pointer;
        }
    }



  }


`;

export default CoffeeTIContainer;
