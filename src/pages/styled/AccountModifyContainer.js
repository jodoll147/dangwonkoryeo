import styled from 'styled-components';

const AccountModifyContainer = styled.div`
  section {
    position: relative;
    width: 940px;
    text-align: left;
    font-family: 'Cafe24';
    font-size: 14px;

    .title {
      position: relative;
      margin-top: 40px;
      margin-left: 336px;
      font-family: 'Cafe24Bold';
      font-weight: 800;
      font-size: 18px;
      line-height: 18px;
      color: #594031;
    }
    .box {
      .nameBox {
        position: relative;
        display: flex;
        align-items: baseline;
        p {
          margin-left: 362px;
          margin-right: 10px;
        }
        .nameBtn {
          position: relative;
          margin-left: 10px;
          width: 50px;
          height: 24px;
          background: #ccd9d9;
          border-radius: 5px;
          font-family: 'Cafe24Bold';
          color: #f2f2f2;
          text-align: center;
          line-height: 24px;
          cursor: pointer;
        }
      }
      .idBox {
        position: relative;
        display: flex;
        align-items: baseline;
        p {
          margin-left: 349px;
          margin-right: 10px;
        }
        .id {
        }
      }
      .pwdBox {
        pposition: relative;
        display: flex;
        align-items: baseline;
        p {
          margin-left: 336px;
          margin-right: 10px;
        }
        .pwd {
          width: 60px;
          height: 24px;
          background: #ccd9d9;
          border-radius: 5px;
          font-family: 'Cafe24Bold';
          line-height: 24px;
          text-align: center;
        }
      }
      .emailBox {
        position: relative;
        display: flex;
        align-items: baseline;
        p {
          margin-left: 349px;
          margin-right: 10px;
        }
        input {
          margin-right: 10px;
          width: 200px;
          height: 20px;
          background: #d2d9cc;
          border: 1px #d2d9cc;
          border-radius: 5px;
        }
        .emailBtn {
          width: 50px;
          height: 24px;
          background: #ccd9d9;
          border-radius: 5px;
          font-family: 'Cafe24Bold';
          color: #f2f2f2;
          text-align: center;
          line-height: 24px;
          cursor: pointer;
        }
      }

      .phoneBox {
        position: relative;
        display: flex;
        align-items: baseline;
        p {
          margin-left: 336px;
          margin-right: 10px;
        }
        input {
          margin-right: 10px;
          width: 50px;
          height: 20px;
          background: #d2d9cc;
          border: 1px #d2d9cc;
          border-radius: 5px;
        }
        .phoneBtn {
          width: 50px;
          height: 24px;
          background: #ccd9d9;
          border-radius: 5px;
          font-family: 'Cafe24Bold';
          color: #f2f2f2;
          text-align: center;
          line-height: 24px;
          cursor: pointer;
        }
      }

      .birthBox {
        position: relative;
        display: flex;
        align-items: baseline;
        p {
          margin-left: 336px;
          margin-right: 10px;
        }
        input {
          width: 90px;
          height: 20px;
          margin-right: 10px;
          background: #d2d9cc;
          border: 1px #d2d9cc;
          border-radius: 5px;
        }
        .birthBtn {
          width: 50px;
          height: 24px;
          background: #ccd9d9;
          border-radius: 5px;
          font-family: 'Cafe24Bold';
          color: #f2f2f2;
          text-align: center;
          line-height: 24px;
          cursor: pointer;
        }
      }
    }
  }
`;

export default AccountModifyContainer;
