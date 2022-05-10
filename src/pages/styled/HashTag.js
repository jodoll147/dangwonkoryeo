import styled from 'styled-components';
import React, { useState } from 'react';
const HashTag = () => {
  const HashTagContainer = styled.div`
    p {
      position: relative;
      font-family: 'NanumGothic';
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;
      color: #4ea6a6;
    }
  `;

  const hashTag = ['해시태그', '아무거나', '그냥'];
  const hashList = hashTag.map(hash => <p>#{hash}</p>);
  return <HashTagContainer>{hashList}</HashTagContainer>;
};

export default HashTag;
