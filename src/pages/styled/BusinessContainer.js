import styled from 'styled-components';

const BusinessContainer = styled.div`
  section {
    position: relative;
    width: 940px;
    height: 680px;

    .regeShopBox {
      position: relative;
      .title {
        position: relative;
        font-family: 'Cafe24Bold';
        font-style: normal;
        font-size: 18px;
        line-height: 18px;
        color: #4ea6a6;
      }
      .explan {
        position: relative;
        font-family: 'Cafe24';
        font-size: 16px;
        font-weight: 400;
        color: black;
      }
      .shopBox {
        position: relative;
        display: flex;
        p {
          position: relative;
          font-family: 'Cafe24';
          font-size: 16px;
          font-weight: 700;
          line-height: 16px;
          color: #4ea6a6;
        }
        input {
          position: relative;
        }
      }
      .documentBox {
        position: relative;
        display: flex;
        p {
          position: relative;
          font-family: 'Cafe24';
          font-size: 16px;
          font-weight: 700;
          line-height: 16px;
          color: #4ea6a6;
        }
        input {
          position: relative;
          font-family: 'Cafe24';
          font-size: 14px;
          line-height: 14px;
        }
      }
    }
  }
`;

export default BusinessContainer;
