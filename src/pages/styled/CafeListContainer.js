import styled from 'styled-components';

const CafeListContainer = styled.div`
  section {
    position: relative;
    text-align: left;

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
        text-align: left;
        float: left;
        margin-top: 20px;

        .cafe_name {
          position: relative;
          margin-left: 20px;
          width: 680px;
          font-family: 'NanumGothic';
          font-style: normal;
          font-weight: 700;
          font-size: 32px;
          float: left;
        }

        .hashTag {
          position: relative;

          float: left;

          top: 0px;
        }
      }
    }
  }
`;

export default CafeListContainer;
