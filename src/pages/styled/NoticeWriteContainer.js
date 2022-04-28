import styled from 'styled-components';

const NoticeWrtieContainer = styled.div`
  .noticeWrite {
    position: relative;
    top: 300px;
    font-family: 'NanumGothic';
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 30px;
    letter-spacing: -0.333333px;
    color: #594031;

    h1 {
      position: absolute;
      top: 50px;
      left: 43px;
      font-style: normal;
      font-weight: 1000;
      font-size: 40px;
      text-align: left;
    }

    p {
      position: absolute;
      top: 120px;
      left: 43px;
      font-weight: 700;
      font-size: 30px;
      line-height: 50px;
      width: 120px;
      height: 50px;
      background: #f2f2f2;
      border-radius: 20px;
      text-align: center;
    }

    input {
      position: relative;
      width: 95px;
      height: 50px;
      top: 1300px;
      left: 845px;
      font-weight: 700;
      font-size: 30px;
      line-height: 50px;
      text-align: center;
      color: #f2f2f2;
      background: #4ea6a6;
      border: 1px solid #4ea6a6;
      border-radius: 20px;
    }
  }

  .editor {
    position: relative;
    top: 480px;
  }
`;

export default NoticeWrtieContainer;
