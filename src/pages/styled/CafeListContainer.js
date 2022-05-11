import styled from 'styled-components';

const CafeListContainer = styled.div`
  section {
    position: relative;
    text-align: left;
    .hash {
      position: relative;
      float: left;
      top: 0px;
    }

    .box {
      position: relative;
      padding-top: 20px;
      padding-bottom: 20px;
      left: 20px;
      width: 940px;
      height: 240px;

      img {
        position: relative;
        top: 20px;
        float: left;
      }

      .subBox {
        position: relative;
        width: 680px;
        height: 200px;
        margin: 20px 20px 20px 20px;
        text-align: left;
        float: left;

        .cafeName {
          position: relative;
          width: 680px;
          height: 39px;
          padding-bottom: 20px;
          font-family: 'NanumGothic';
          font-style: normal;
          font-weight: 700;
          font-size: 32px;
          line-height: 39px;
        }
        .hashBox {
          position: relative;
          width: 680px;
          height: 141px;
          .hashList {
            position: relative;
            display: flex;
          }
        }
      }
    }
  }
`;

export default CafeListContainer;
