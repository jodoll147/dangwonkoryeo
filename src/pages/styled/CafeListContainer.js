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
        width: 200px;
        height: 200px;
        marin-top: 20px;
        float: left;
      }

      .subBox {
        position: relative;
        width: 680px;
        height: 200px;
        margin: 20px 20px 20px 20px;
        text-align: left;
        float: left;
        font-family: 'Cafe24';

        .cafeNameBox {
          position: relative;
          height: 39px;
          padding-bottom: 20px;
          display: flex;
          align-items: baseline;
          .cafeName {
            font-family: 'Cafe24Bold';
            font-style: normal;
            font-weight: 700;
            font-size: 32px;
            line-height: 39px;
          }
          .heart {
            position: relative;
            display: flex;
            img {
              position: relative;
              top: 10px;
              margin-left: 15px;
              width: 32px;
              height: 32px;
            }
            p {
              position: relative;
              left: 5px;
              top: 10px;
            }
          }
        }
        .cafeAdd {
          position: relative;
        }
        .cafeCall {
          position: relative;
          display: flex;
          margin-top: 10px;
          .title {
            position: relative;
            font-family: 'Cafe24Bold';
            margin-right: 10px;
          }
        }
        .cafeLoc {
          position: relative;
          display: flex;
          .title {
            position: relative;
            font-family: 'Cafe24Bold';
            margin-right: 10px;
          }
        }
        .hashBox {
          position: relative;
          padding-top: 20px;
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
