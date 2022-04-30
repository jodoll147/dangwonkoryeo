import styled from 'styled-components';

const ServiceCenterContainer = styled.div`
  .section {
    position: relative;
    font-family: 'NanumGothic';
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    letter-spacing: -0.333333px;
    color: #594031;
  }
  .notice_title {
    p {
      position: absolute;
      left: 50px;
      top: 370px;
      font-style: normal;
      font-weight: 800;
      font-size: 35px;
      text-align: left;
      color: #594031;
    }
  }
  .inquiry {
    p {
      position: absolute;
      width: 120px;
      height: 50px;
      top: 450px;
      left: 50px;
      color: #594031;
      background: #f2f2f2;
      border-radius: 20px;
      text-align: center;
    }
  }
  .write_table {
    table {
      position: absolute;
      width: 100%;
      height: 50px;
      top: 560px;
      left: -10px;
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

export default ServiceCenterContainer;
