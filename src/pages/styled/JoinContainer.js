import styled from 'styled-components';

const JoinContainer = styled.div`
  section {
    position: relative;
    left: 336px;
    margin-top: 40px;

    .join{
        p{
            position: relative;
            font-family: 'NanumGothicBold';
            font-style: normal;
            font-weight: 800;
            font-size: 18px;
            line-height: 18px
            color: #594031;
            text-align: left;
        }
    }

    .name {
      position: relative;
      display: table;
      padding-bottom: 15px;
      p {
        position: relative;
        font-family: 'NanumGothic';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 14px;
        display: table-cell;
        padding-right: 10px;
      }
      input {
        position: relative;
        width: 90px;
        height: 20px;
        display: table-cell;
        background: #d2d9cc;
        border-radius: 5px;
        border: #d2d9cc;
        font-family: 'NanumGothic';
      }
    }
    .id {
      position: relative;
      display: table;
      padding-bottom: 15px;
      p {
        position: relative;
        font-family: 'NanumGothic';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 14px;
        display: table-cell;
        padding-right: 10px;
        
      }
      input {
        position: relative;
        width: 90px;
        height: 20px;
        display: table-cell;
        background: #d2d9cc;
        border-radius: 5px;
        border: #d2d9cc;s
        font-family: 'NanumGothic';
        margin-right: 10px;
      }
      
      .id_check{
        position: relative;
        width: 60px;
        height: 20px;
        display: table-cell;
        background: #4EA6A6;
        border-radius: 5px;
        border: 1px #4EA6A6;
        text-align: middle;

        p{
          position: relative;
          left: 5px;
          font-family: 'NanumGothicBold';
          font-style: normal;
          font-weight: 700;
          font-size: 12px;
          line-height: 20px;
          color: #F2F2F2;
        }

      }
    }
    .pwd {
      position: relative;
      display: table;
      padding-bottom: 15px;
      p {
        position: relative;
        font-family: 'NanumGothic';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 14px;
        display: table-cell;
        padding-right: 10px;
      }
      input {
        position: relative;
        width: 90px;
        height: 20px;
        display: table-cell;
        background: #d2d9cc;
        border-radius: 5px;
        border: #d2d9cc;
        font-family: 'NanumGothic';
      }
    }
    .birthday {
      position: relative;
      display: table;
      padding-bottom: 15px;
      p {
        position: relative;
        font-family: 'NanumGothic';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 14px;
        display: table-cell;
        padding-right: 10px;
      }
      input {
        position: relative;
        width: 90px;
        height: 20px;
        display: table-cell;
        background: #d2d9cc;
        border-radius: 5px;
        border: #d2d9cc;
        font-family: 'NanumGothic';
      }
    }
    .phone {
      position: relative;
      display: table;
      p {
        position: relative;
        font-family: 'NanumGothic';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 14px;
        display: table-cell;
        padding-right: 10px;
      }
      input {
        position: relative;
        width: 50px;
        height: 20px;
        background: #d2d9cc;
        border-radius: 5px;
        border: #d2d9cc;
        margin-right: 10px;
        font-family: 'NanumGothic';
      }
    }

    .complete{
      position: relative;
      top: 62px;
      left: 240px;
      width: 60px;
      height: 35px;
      background: #D2D9CC;
      border-radius: 10px;
      border: 1px #D2D9CC;

      p{
        position: relative;
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 35px;
        color: #F2F2F2;
      }
    }
  }
`;

export default JoinContainer;
