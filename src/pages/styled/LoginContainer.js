import styled from 'styled-components';

const LoginContainer = styled.div`
  section {
    position: relative;
    width: 940px;

    .title {
      position: relative;
      margin-top: 40px;
      font-family: 'Cafe24Bold';
      font-style: normal;
      font-size: 20px;
      color: #4ea6a6;
    }
    .id {
      position: relative;
      display: flex;
      margin-top: 30px;
      align-items: baseline;
      width: 264px;
      height: 35px;
      left: 347px;

      p {
        position: relative;
        font-family: 'Cafe24';
        font-style: normal;
        font-weight: 700;
        margin-right: 10px;
      }

      input {
        position: relative;
        width: 190px;
        height: 35px;
        background: #d2d9cc;
        border: 1px #d2d9cc;
        border-radius: 10px;
        font-family: 'Cafe24';
        font-style: normal;
        font-weight: 700;
      }
    }

    .pwd {
      position: relative;
      display: flex;
      margin-top: 15px;
      align-items: baseline;
      width: 282px;
      height: 35px;
      left: 329px;

      p {
        position: relative;
        margin-right: 10px;
        font-family: 'Cafe24';
        font-style: normal;
        font-weight: 700;
      }

      input {
        position: relative;
        width: 190px;
        height: 35px;
        background: #d2d9cc;
        border: 1px #d2d9cc;
        border-radius: 10px;
        font-family: 'Cafe24';
        font-style: normal;
        font-weight: 700;
      }
    }

    .login_btn {
      position: relative;
      margin-top: 20px;
      width: 282px;
      height: 45px;
      left: 329px;
      background: #4ea6a6;
      border-radius: 10px;
      font-family: 'Cafe24';
      font-style: normal;
      font-weight: 700;
      color: #f2f2f2;
      line-height: 45px;
      text-align: center;
    }

    .error {
      position: relative;
      margin-top: 30px;
      font-family: 'Cafe24';
      font-size: 14px;
      color: red;
    }

    .find {
      position: relative;
      margin-top: 30px;
      font-family: 'Cafe24';
    }

    .join {
      position: relative;
      margin-top: 15px;
      font-family: 'Cafe24';
    }
  }
`;

export default LoginContainer;
