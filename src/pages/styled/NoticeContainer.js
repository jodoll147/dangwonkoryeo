import styled from 'styled-components';

const NoticeContainer = styled.div`
  section {
    position: relative;
    p {
      position: relative;
      font-family: 'ExtraBold';
      font-style: normal;
      font-weight: 800;
      font-size: 18px;
      line-height: 18px;
      color: #594031;
      text-align: left;
    }
    .write_th {
      position: relative;
      width: 100%;
      height: 35px;
      display: table;
      background: #d2d9cc;

      p {
        font-family: '';
        font-style: normal;
        font-weight: 800;
        font-size: 18px;
        line-height: 35px;
        color: #f2f2f2;
      }
      .title {
        position: relative;
        left: 250px;
        display: table-cell;
      }
      .date {
        position: relative;
        left: 250px;
        display: table-cell;
      }
    }
    .noticeList {
      position: relative;
      width: 938px;
      height: 50px;
      border: 1px solid #f2f2f2;
    }
    .writing {
      position: relative;
      margin-top: 50px;
      margin-left: 850px;
      width: 60px;
      height: 35px;
      font-family: 'Bold';
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      line-height: 35px;
      background: #d2d9cc;
      border-radius: 10px;
    }
  }
`;

export default NoticeContainer;
