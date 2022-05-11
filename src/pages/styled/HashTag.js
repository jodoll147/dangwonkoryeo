import styled from 'styled-components';
import React, { useState } from 'react';

const HashTag = () => {
  const HashTagContainer = styled.div`
    position: relative;
    font-family: 'NanumGothic';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 16px;
    color: #4ea6a6;
    padding-right: 10px;
  `;

  const hashTag = ['해시태그', '아무거나', '그냥'];
  const hashList = hashTag.map(hash => <HashTagContainer>#{hash}</HashTagContainer>);
  return (
    <div className='hashBox'>
      <div className='hashList'>{hashList}</div>
    </div>
  );
};

export default HashTag;
