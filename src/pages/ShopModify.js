import React, { Component, useState } from 'react';
import ShopModifyContainer from './styled/ShopModifyContainer';
import styled from 'styled-components';
import close from './img/close.png';

const HashTagDiv = styled.div`
position: relative;
margin-right: 10px;
  .hash {
    position: relative;
    padding-left: 5px;
    height: 20px;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    background: rgba(78, 166, 166, 0.7);
    border-radius: 5px;
    color: #f2f2f2;

    img {
      position: relative;
      padding-top: 5px;
      padding-left: 5px;
      padding-right: 5px;
      width: 10px;
      height: 10px;
    }
`;

const HashTag = props => {
  const hashAdd = props.items;
  const hashAddList = hashAdd.map(hash => (
    <HashTagDiv>
      <div className='hash'>
        {hash}
        <img src={close} alt='x' />
      </div>
    </HashTagDiv>
  ));

  return hashAddList;
};

const ShopModify = () => {
  const [textValue, setTextValue] = useState('');
  const [hashTags, setHashTags] = useState([]);

  const handleSetValue = e => {
    setTextValue(e.target.value);
  };

  return (
    <ShopModifyContainer>
      <section>
        <div className='title'>Business Page</div>
        <div className='shopModify'>가게수정</div>
        <div className='shopModifyBox'>
          <div className='shopNameBox'>
            <p>가게명</p>
            <input type={'text'} />
          </div>
          <div className='shopInfo'>
            <p>설명</p>
            <textarea onChange={e => handleSetValue(e)} maxlength='300' />
          </div>
          <div className='info'>300자 이내로 작성해주세요.</div>
          <div className='phoneBox'>
            <p>전화번호</p>
            <input type={'text'} maxlength='3' />
            <input type={'text'} maxlength='4' />
            <input type={'text'} maxlength='4' />
          </div>
          <div className='locationBox'>
            <p>가게위치</p>
            <textarea onChange={e => handleSetValue(e)} maxlength='50' />
          </div>
          <div className='menuBox'>
            <p>메뉴</p>
            <input type={'text'} />
            <input type={'button'} className='add' value={'추가'} />
          </div>
          <div className='hash'>
            <p>해시태그</p>
            <HashTag items={hashTags} />
            <input type={'button'} className='add' value={'추가'} />
          </div>
          <div className='imgBox'>
            <p>이미지</p>
            <div className='img'></div>
            <div className='upload'>업로드</div>
          </div>
          <input type={'button'} className='add' value={'수정'} />
        </div>
      </section>
    </ShopModifyContainer>
  );
};

export default ShopModify;
