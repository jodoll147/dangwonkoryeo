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
      overflow: hidden;
      float: left;

      img {
        position: relative;
        top: 20px;
        padding-right: 20px;
        text-align: left;
      }

      p {
        position: relative;
        display: inline-block;
        font-family: 'NanumGothic';
        font-style: normal;
        font-weight: 700;
        font-size: 32px;
        float: right;
      }
    }
  }
`;

export default CafeListContainer;
