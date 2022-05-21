import styled from 'styled-components';

const JoinContainer = styled.div`
  section {
    position: relative;
    width: 940px;
    font-family: 'Cafe24';
    font-size: 14px;
    line-height: 14px;
    color: black;
    .joinBox {
      position: relative;
      width: 353px;
      height: 350px;
      margin-top: 20px;
      margin-left: 353px;
      text-align: left;
      .join {
        position: relative;
        padding-top: 40px;
        margin-bottom: 20px;
        font-family: 'Cafe24Bold';
        font-size: 18px;
        line-height: 18px;
        color: #594031;
      }
      .name {
        position: relative;
        display: flex;
        align-items: baseline;
        margin-bottom: 15px;

        p {
          position: relative;
          margin-right: 10px;
        }
        input {
          position: relative;
          width: 90px;
          height: 20px;
          background: #d2d9cc;
          border-radius: 5px;
          border: #d2d9cc;
        }
      }
      .id {
        position: relative;
        display: flex;
        align-items: baseline;

        margin-bottom: 15px;

        p {
          position: relative;
          margin-right: 10px;
        }
        input {
          position: relative;
          margin-right: 10px;
          width: 90px;
          height: 20px;
          background: #d2d9cc;
          border-radius: 5px;
          border: #d2d9cc;
        }
        .idCheck {
          position: relative;
          width: 55px;
          height: 20px;
          background: #4ea6a6;
          border-radius: 5px;
          border: #4ea6a6;
          font-size: 12px;
          line-height: 20px;
          color: #f2f2f2;
          text-align: center;
        }
      }
      .pwd {
        position: relative;
        display: flex;
        align-items: baseline;
        margin-bottom: 15px;

        p {
          position: relative;
          margin-right: 10px;
        }
        input {
          position: relative;
          width: 90px;
          height: 20px;
          background: #d2d9cc;
          border-radius: 5px;
          border: #d2d9cc;
        }
      }
      .phone {
        position: relative;
        display: flex;
        align-items: baseline;
        margin-bottom: 15px;

        p {
          position: relative;
          margin-right: 10px;
        }
        input {
          position: relative;
          width: 50px;
          height: 20px;
          margin-right: 10px;
          background: #d2d9cc;
          border-radius: 5px;
          border: #d2d9cc;
        }
      }
      .birthday {
        position: relative;
        display: flex;
        align-items: baseline;

        margin-bottom: 74px;

        p {
          position: relative;
          margin-right: 10px;
        }
        input {
          position: relative;
          width: 90px;
          height: 20px;
          background: #d2d9cc;
          border-radius: 5px;
          border: #d2d9cc;
        }
      }
      .complete {
        position: relative;
        margin-left: 263px;
        width: 60px;
        height: 35px;
        font-family: Cafe24Bold;
        font-size: 16px;
        line-height: 40px;
        color: #f2f2f2;
        background: #d2d9cc;
        border-radius: 10px;
        text-align: center;
      }
    }
  }
`;

export default JoinContainer;
