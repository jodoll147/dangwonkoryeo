import styled from 'styled-components';

const NoticeContainer = styled.div`
  section {
    position: relative;
    width: 940px;
    margin-top: 20px;
    p {
      position: relative;
      margin-top: 20px;
      margin-left: 30px;
      font-family: 'Cafe24Bold';
      font-style: normal;
      font-weight: 800;
      font-size: 18px;
      line-height: 18px;
      color: #594031;
      text-align: left;
    }
    .writeTh {
      position: relative;
      margin-top: 20px;
      .hr {
        position: relative;
        display: flex;
        width: 940px;
        height: 35px;
        background: #d2d9cc;

        .title {
          position: relative;
          padding-top: 8px;
          width: 650px;
          height: 35px;
          font-family: 'Cafe24Bold';
          font-style: normal;
          font-weight: 800;
          font-size: 18px;
          color: #f2f2f2;
          text-align: center;
        }
        .date {
          position: relative;
          padding-top: 8px;
          width: 290px;
          height: 35px;
          font-family: 'Cafe24Bold';
          font-style: normal;
          font-weight: 800;
          font-size: 18px;
          color: #f2f2f2;
          text-align: center;
        }
      }
    }
    .writing {
      position: relative;
      float: right;
      width: 60px;
      height: 35px;
      background: #d2d9cc;
      border-radius: 10px;
      margin-top: 50px;
      margin-right: 30px;
      font-family: 'Cafe24Bold';
      line-height: 35px;
    }

    .contentBox {
      position: relative;
      font-family: 'Cafe24';
      p {
        position: relative;
        font-family: 'Cafe24Bold';
      }
      .titleBox {
        position: relative;
        display: flex;
        align-items: flex-end;

        .title {
          position: relative;
          margin-top: 35px;
          margin-left: 30px;
          margin-bottom: 15px;
          margin-right: 60px;
          font-family: 'Cafe24Bold';
          font-size: 16px;
        }
      }
      .content {
        position: relative;
        pre {
          position: relative;
          font-family: 'Cafe24';
          font-size: 14px;
        }
      }
      .date {
        position: relative;
        float: left;
        margin-top: 10px;
        margin-left: 30px;
        font-size: 12px;
      }
      .back {
        position: relative;
        width: 60px;
        height: 35px;
        margin-top: 60px;
        margin-right: 30px;
        float: right;
        font-family: 'Cafe24Bold';
        line-height: 35px;
        background: #ccd9d9;
        border-radius: 10px;
      }
    }
  }
`;

export default NoticeContainer;
