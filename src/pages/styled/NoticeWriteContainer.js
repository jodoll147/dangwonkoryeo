import styled from 'styled-components';

const NoticeWrtieContainer = styled.div`
  section {
    position: relative;
    margin-top: 20px;
    h1 {
      position: relative;
      padding-top: 20px;
      padding-left: 30px;
      padding-bottom: 20px;
      font-family: 'Cafe24Bold';
      font-style: normal;
      font-weight: 800;
      font-size: 18px;
      line-height: 18px;
      color: #594031;
      text-align: left;
    }
    .complete {
      position: relative;
      width: 60px;
      height: 35px;
      top: 25px;
      left: 850px;
      background: #d2d9cc;
      border-radius: 10px;
      cursor: pointer;
      p {
        position: relative;
        font-family: 'NanumGothicBold';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 35px;
        text-align: center;
        color: #f2f2f2;
      }
    }
  }
`;

export default NoticeWrtieContainer;
