import styled from 'styled-components';

const BusinessContainer = styled.div`
  section {
    position: relative;
    width: 940px;
    height: 680px;

    .shopAdd {
      position: relative;
      .title {
        position: relative;
        margin-top: 40px;
        font-family: 'Cafe24Bold';
        font-style: normal;
        font-size: 18px;
        line-height: 18px;
        color: #4ea6a6;
      }
      .explan {
        position: relative;
        margin-top: 20px;
        font-family: 'Cafe24';
        font-size: 16px;
        font-weight: 400;
        color: black;
      }
      .shopBox {
        position: relative;
        display: flex;
        align-items: baseline;
        margin-top: 40px;

        p {
          position: relative;
          margin-left: 337px;
          margin-right: 10px;
          font-family: 'Cafe24';
          font-size: 16px;
          font-weight: 700;
          line-height: 16px;
          color: #4ea6a6;
        }
        input {
          position: relative;
          width: 200px;
          height: 25px;
          background: #d2d9cc;
          border-radius: 5px;
          border: #d2d9cc;
        }
      }

      .documentBox {
        position: relative;
        display: flex;
        align-items: baseline;

        p {
          position: relative;
          margin-left: 293px;
          margin-right: 10px;
          font-family: 'Cafe24';
          font-size: 16px;
          font-weight: 700;
          line-height: 16px;
          color: #4ea6a6;
        }
        input {
          position: relative;
          font-family: 'Cafe24';
          font-size: 14px;
          line-height: 14px;
        }
      }
      .saveButton {
        position: relative;
        width: 290px;
        height: 54px;
        margin-left: 325px;
        margin-top: 30px;
        background: #4ea6a6;
        border-radius: 10px;
        font-family: 'Cafe24Bold';
        font-style: normal;
        font-size: 20px;
        line-height: 54px;
        color: #f2f2f2;
        cursor: pointer;
      }
      .infoBox {
        position: relative;
        margin-top: 50px;
        margin-left: 293px;
        p {
          position: relative;
          width: 328px;
          height: 24px;
          font-family: 'Cafe24';
          font-size: 12px;
          line-height: 12px;
          font-weight: 400;
          color: #686868;
          text-align: left;
        }
      }
    }
    .shopModifyBox {
      position: relative;
      text-align: left;

      .title {
        position: relative;
        margin-top: 40px;
        margin-left: 30px;
        margin-top: 20px;
        font-family: 'Cafe24Bold';
        font-style: normal;
        font-weight: 800;
        font-size: 18px;
        line-height: 18px;
        color: #4ea6a6;
      }
      .userNameBox {
        position: relative;
        display: flex;
        margin-left: 30px;
        margin-top: 20px;
        .userName {
          position: relative;
          font-family: 'Cafe24';
          font-style: normal;
          font-weight: 800;
          font-size: 18px;
          line-height: 18px;
        }
        .info {
          position: relative;
          margin-left: 10px;
          font-family: 'Cafe24';
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 16px;
        }
      }
      .shop {
        position: relative;
        margin-top: 40px;
        margin-bottom: 10px;
        font-family: 'Cafe24Bold';
        font-style: normal;
        font-weight: 800;
        font-size: 18px;
        line-height: 18px;
        p {
          position: relative;
          margin-top: 40px;
          margin-left: 30px;
        }
      }
      .shopadd {
        position: relative;
        float: right;
        margin-top: 30px;
        margin-right: 30px;
        width: 60px;
        height: 35px;
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 35px;
        background: #d2d9cc;
        border-radius: 10px;
        text-align: center;
      }
    }
  }
`;

export default BusinessContainer;
