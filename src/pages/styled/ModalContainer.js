import styled from 'styled-components';

const ModalContainer = styled.div`
  section {
    position: fixed;
    animation: modal-show 0.3s;
    width: 400px;
    height: 500px;
    background: white;
    border: 1px solid black;
    font-family: 'Cafe24';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 16px;
    .top {
      position: relative;
      display: flex;

      .hashTitle {
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
      img {
        position: relative;
        width: 20px;
        height: 20px;
        margin-top: 15px;
        margin-left: 213px;
        cursor: pointer;
      }
    }

    .hashBox {
      position: relative;
      width: 340px;
      height: 422px;
      margin-top: 20px;
      margin-left: 30px;
      border: 1px solid #f2f2f2;
      .nameBox {
        position: relative;
        display: flex;
        align-items: baseline;
        margin-top: 20px;
        margin-left: 20px;
        p {
          position: relative;
          font-style: normal;
          font-weight: 700;
          font-size: 16px;
          line-height: 16px;
          color: black;
        }
        input {
          position: relative;
          margin-left: 15px;
          width: 120px;
          height: 20px;
          border: 1px solid #c4c4c4;
          border-radius: 5px;
        }
        select {
          position: relative;
          margin-left: 15px;
          width: 70px;
          height: 25px;
          border: 1px solid #c4c4c4;
          border-radius: 5px;
        }
      }
      .coffeeSelectBox {
        position: relative;
        text-align: left;
        margin-top: 10px;
        .bodyBox {
          position: relative;
          margin-left: 20px;
          .title {
            position: relative;
            font-style: normal;
            font-weight: 700;
            font-size: 16px;
            line-height: 16px;
            color: black;
          }
        }

        .sourBox {
          position: relative;
          margin-left: 20px;
          margin-top: 10px;
          .title {
            position: relative;
            font-style: normal;
            font-weight: 700;
            font-size: 16px;
            line-height: 16px;
            color: black;
          }
        }
        .flavourBox {
          position: relative;
          p {
            position: relative;
            left: 20px;
            font-style: normal;
            font-weight: 700;
            font-size: 16px;
            line-height: 16px;
            color: black;
          }
          .flavour {
            position: relative;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            align-content: flex-start;
            margin-left: 30px;
            width: 140px;
            height: 90px;
          }
        }
      }
      .modifyBtn {
        position: absolute;
        right: 20px;
        bottom: 30px;
        input {
          width: 50px;
          height: 30px;
          background: #ccd9d9;
          border-radius: 5px;
          border: 1px #ccd9d9;
          font-family: 'Cafe24Bold';
          font-size: 16px;
          line-height: 16px;
          color: #f2f2f2;
          cursor: pointer;
        }
      }
    }
  }
`;

export default ModalContainer;
