import styled from 'styled-components';

const NoticeContainer = styled.div`
  .section {
    position: relative;
    font-family: 'NanumGothic';
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    letter-spacing: -0.333333px;
    color: #000000;
  }
  .notice_title {
    p {
      position: absolute;
      left: 50px;
      top: 335px;
      font-style: normal;
      font-weight: 800;
      font-size: 35px;
      text-align: left;
      color: #594031;
    }
  }
  .write_table {
    table {
      position: absolute;
      width: 100%;
      height: 57px;
      top: 450px;
      border-top: 1px solid #4ea6a6;
      border-collapse: collapse;
      background: #f2f2f2;
      font-size: 30px;
      color: #4ea6a6;
      text-align: center;
    }
    th,
    td {
      border-bottom: 1px solid #4ea6a6;
      text-align: center;
    }
  }
  .writing {
    position: absolute;
    width: 125px;
    height: 50px;
    top: 1346px;
    left: 810px;
    background: #4ea6a6;
    border-radius: 20px;
    line-height: 50px;
    text-align: center;

    Link {
      position: absolute;
      top: 1346px;
      left: 810px;
      font-weight: 700;
      font-size: 30px;
      color: #f2f2f2;
      text-align: center;
      line-height: 50px;
    }
  }
`;

export default NoticeContainer;
