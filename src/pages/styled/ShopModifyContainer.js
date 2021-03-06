import styled from 'styled-components';

const ShopModifyContainer = styled.div`
  section {
    position: relative;
    font-family: 'Cafe24';
    text-align: left;
    .title {
      position: relative;
      margin-top: 30px;
      margin-left: 30px;
      font-family: 'Cafe24Bold';
      font-style: normal;
      font-weight: 800;
      font-size: 18px;
      line-height: 18px;
      color: #4ea6a6;
    }
    .shopModify {
      position: relative;
      margin-top: 30px;
      margin-left: 30px;
      margin-bottom: 10px;
      font-family: 'Cafe24Bold';
      font-weight: 800;
      font-size: 18px;
      line-height: 18px;
      color: #594031;
    }
    .shopModifyBox {
      position: relative;
      width: 940px;
      height: 1000px;
      border: 1px solid #f2f2f2;
      font-weight: 400;
      font-size: 14px;
      line-height: 14px;

      .shopNameBox {
        position: relative;
        margin-top: 20px;
        margin-left: 30px;
        display: flex;
        align-items: baseline;

        p {
          position: relative;
          margin-right: 10px;
          font-family: 'Cafe24Bold';
        }
        input {
          position: relative;
          margin-left: 27px;
          width: 200px;
          height: 20px;
          border: 1px solid #c4c4c4;
          border-radius: 5px;
        }
      }
      .shopInfo {
        position: relative;
        display: flex;
        margin-top: 20px;
        margin-left: 30px;
        align-items: flex-start;

        p {
          position: relative;
          text-height: 14px;
          font-family: 'Cafe24Bold';
        }
        textarea {
          position: relative;
          width: 300px;
          height: 120px;
          margin-left: 40px;
          border: 1px solid #c4c4c4;
          border-radius: 5px;
        }
      }
      .info {
        position: relative;
        margin-top: 10px;
        margin-left: 97px;
        font-family: 'Cafe24';
        font-style: normal;
        font-weight: 400;
        font-size: 10px;
        line-height: 10px;
        color: rgba(166, 140, 118, 0.7);
      }
      .phoneBox {
        position: relative;
        display: flex;
        margin-top: 20px;
        align-items: baseline;
        margin-left: 30px;
        p {
          position: relative;
          margin-right: 14px;
          font-family: 'Cafe24Bold';
        }

        input {
          position: relative;
          margin-right: 10px;
          width: 60px;
          height: 20px;
          border: 1px solid #c4c4c4;
          border-radius: 5px;
        }
      }
      .locationBox {
        position: relative;
        display: flex;
        align-items: baseline;
        margin-top: 20px;
        margin-left: 30px;
        p {
          position: relative;
          font-family: 'Cafe24Bold';
        }
        textarea {
          position: relative;
          margin-left: 10px;
          width: 270px;
          height: 50px;
          border: 1px solid #c4c4c4;
          border-radius: 5px;
        }
      }
      .menuBox {
        position: relative;
        display: flex;
        align-items: baseline;
        margin-top: 20px;
        margin-left: 30px;
        p {
          position: relative;
          font-family: 'Cafe24Bold';
        }
        input {
          position: relative;
          margin-left: 40px;
          width: 200px;
          height: 20px;
          border: 1px solid #c4c4c4;
          border-radius: 5px;
        }
        .add {
          position: relative;
          margin-left: 10px;
          width: 50px;
          height: 30px;
          background: #d2d9cc;
          border: 1px solid #c4c4c4;
          border-radius: 5px;
          font-family: 'Cafe24Bold';
          color: #f2f2f2;
          font-style: normal;
          font-weight: 800;
          font-size: 16px;
          line-height: 30px;
          text-align: center;
          cursor: pointer;
        }
      }
      .hash {
        position: relative;
        display: flex;
        margin-left: 30px;
        align-items: baseline;
        white-space: nowrap;

        p {
          position: relative;
          margin-right: 10px;
          font-family: 'Cafe24Bold';
        }
        .add {
          position: relative;
          width: 50px;
          height: 30px;
          background: #d2d9cc;
          border: 1px solid #c4c4c4;
          border-radius: 5px;
          font-family: 'Cafe24Bold';
          color: #f2f2f2;
          font-style: normal;
          font-weight: 800;
          font-size: 16px;
          line-height: 30px;
          text-align: center;
          cursor: pointer;
        }
      }
      .imgBox {
        position: relative;
        margin-top: 20px;
        margin-left: 30px;
        p {
          position: relative;
          font-family: 'Cafe24Bold';
        }
        img {
          position: relative;
          width: 200px;
          height: 200px;
        }
        input {
          position: relative;
          margin-left: 20px;
        }
      }
      .imgAdd {
        position: relative;
        float: right;
        margin-top: 190px;
        margin-right: 30px;
        width: 50px;
        height: 30px;
        background: #d2d9cc;
        border: 1px solid #c4c4c4;
        border-radius: 5px;
        font-family: 'Cafe24Bold';
        color: #f2f2f2;
        font-style: normal;
        font-weight: 800;
        font-size: 16px;
        line-height: 30px;
        text-align: center;
        cursor: pointer;
      }
    }
  }
`;

export default ShopModifyContainer;
