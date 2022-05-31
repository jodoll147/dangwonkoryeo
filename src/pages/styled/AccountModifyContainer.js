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
        .name {
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
        }
        .emailBtn {
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
        }
        .phoneBtn {
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
        }
        .birthBtn {
        }
      }
    }
  }
`;

export default AccountModifyContainer;
