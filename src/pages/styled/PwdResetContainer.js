import styled from 'styled-components';

const PwdResetContainer = styled.div`
  section {
    position: relative;
    .title {
      position: relative;
      margin-top: 20px;
      font-family: 'Cafe24Bold';
      font-style: normal;
      font-weight: 800;
      font-size: 20px;
      color: #4ea6a6;
    }
    .pwdBox {
      position: relative;

      .pwdSet {
        position: relative;
        display: flex;
        margin-top: 30px;
        align-items: baseline;
        p {
          position: relative;
          margin-left: 329px;
          margin-right: 15px;
          font-family: 'Cafe24';
          font-size: 20px;
          color: #4ea6a6;
        }
        input {
          position: relative;
          width: 190px;
          height: 35px;
          background: #ccd9d9;
          border-radius: 10px;
          font-family: 'Cafe24';
          border: 1px #ccd9d9;
        }
      }
      .pwdCheck {
        position: relative;
        display: flex;
        align-items: baseline;
        p {
          position: relative;
          margin-left: 287px;
          margin-right: 15px;
          font-family: 'Cafe24';
          font-size: 20px;
          color: #4ea6a6;
        }
        input {
          position: relative;
          font-family: 'Cafe24';
          width: 190px;
          height: 35px;
          background: #ccd9d9;
          border-radius: 10px;
          border: 1px #ccd9d9;
        }
      }
      .resBtn {
        position: relative;
        width: 330px;
        height: 45px;
        left: 287px;
        top: 44px;
        background: #4ea6a6;
        border-radius: 10px;
        font-family: 'Cafe24Bold';
        font-style: normal;
        font-weight: 800;
        font-size: 20px;
        line-height: 45px;
      }
    }
  }
`;

export default PwdResetContainer;
