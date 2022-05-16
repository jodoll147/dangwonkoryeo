import styled from 'styled-components';

const HomeContainer = styled.div`
  section {
    position: relative;
    text-align: center;

    .event_img {
      position: relative;
      x-index: 300;
      width: 940px;
      height: 300px;
      top: 10px;
      text-align: center;
    }

    .cafe_list {
      p {
        font-family: 'Cafe24Bold';
        position: relative;
        left: 20px;
        top: 30px;
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 16px;
        text-align: left;
      }
    }
  }
`;

export default HomeContainer;
