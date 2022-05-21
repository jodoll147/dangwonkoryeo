import styled from 'styled-components';

const LoginContainer = styled.div`
  section {
    position: relative;
    width: 940px;
    height: 400px;
    top: 20px;
    p {
      font-family: 'Cafe24Bold';
      font-style: normal;
      font-weight: 800;
      font-size: 20px;
      color: #4ea6a6;
    }

    .id {
      position: relative;
      display: table;
      width: 264px;
      height: 35px;
      left: 347px;
      top: 30px;
      display: table;

      p {
        position: relative;
        top: 22.86%;
        bottom: 20%;
        display: table-cell;
        vertical-align: middle;
        font-family: 'Cafe24';
        font-style: normal;
        font-weight: 700;
      }

      input {
        position: relative;
        width: 190px;
        height: 35px;
        display: table-cell;
        vertical-align: middle;
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
      width: 282px;
      height: 35px;
      left: 329px;
      top: 45px;
      display: table;

      p {
        position: relative;
        top: 22.86%;
        bottom: 20%;
        display: table-cell;
        vertical-align: middle;
        font-family: 'Cafe24';
        font-style: normal;
        font-weight: 700;
      }

      input {
        position: relative;
        width: 190px;
        height: 35px;
        display: table-cell;
        vertical-align: middle;
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
      width: 282px;
      height: 45px;
      left: 329px;
      top: 44px;
      background: #4ea6a6;
      border-radius: 10px;

      p {
        position: relative;
        font-family: 'Cafe24';
        font-style: normal;
        font-weight: 700;
        color: #f2f2f2;
        line-height: 45px;
        text-align: center;
      }
    }

    .find {
      position: relative;
      font-family: 'Cafe24';
      top: 75px;
    }

    .join {
      position: relative;
      font-family: 'Cafe24';
      top: 85px;
    }
  }
`;

export default LoginContainer;
