import styled from 'styled-components';

const LoginContainer = styled.div`
  section{
    position: relative;
    width: 940px;
    height: 100%: 
    font-family: 'NanumGothic';
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    margin: 0 auto;
    letter-spacing: -0.333333px;
  }
  .home{
    position: relative;
    font-size: 60px;
    font-weight: 800;
    top: 140px;
    left: 340px;
    color: #4EA6A6;
  }
  .id{
    p{
        position: absolute;
        font-size: 40px;
        color: #4EA6A6;
        left: 244px;
        top: 270px;
        text-align: left;

    }
    input{
        position: absolute;
        width: 350px;
        height: 40px;
        left: 367px;
        top: 310px;
        text-align: left;
        background: #D2D9CC;
        border-radius: 50px;
        font-size: 30px;
        border: 1px solid #D2D9CC;
    }
}
  .pwd{
      p{
        position: absolute;
        font-size: 40px;
        color: #4EA6A6;
        top: 335px;
        left: 207px;
        text-align: left;
        
      }
      input{
        position: absolute;
        width: 350px;
        height: 40px;
        left: 367px;        
        top: 375px;
        text-align: left;
        background: #D2D9CC;
        border-radius: 50px;
        border: 1px solid #D2D9CC;
      }
  }
  .login_btn{
      input{
          position: absolute;
          width: 510px;
          height: 70px;
          left: 212px;
          top: 475px;          
          text-align: left;
          background: #D2D9CC;
          border-radius: 50px;
          background: #4EA6A6;
          border-radius: 20px;
          font-weight: 800;
          font-size: 50px;
          text-align: center;
          color: #F2F2F2;
          border: 1px solid #4EA6A6;

      }
  }
  .id_find{
    position: absolute;
    left: 304px;
    top: 589px;
    color: #A68C76;
    font-weight: 700;
    font-size: 35px;
  }
  .join{
    position: absolute;
    left: 410px;
    top: 639px;
    color: #A68C76;
    font-weight: 700;
    font-size: 35px;
  }
`;

export default LoginContainer;