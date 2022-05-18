import React, { Component, useState } from 'react';
import ShopModifyContainer from './styled/ShopModifyContainer';
import styled from 'styled-components';
import close from './img/close.png';
import closeBlack from './img/closeBlack.png';
import ModalContainer from './styled/ModalContainer';

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

const Button = styled.div`
  position: relative;
  margin-right: 5px;
  margin-bottom: 10px;
  font-family: 'Cafe24Bold';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 30px;
  color: #f2f2f2;
  width: 60px;
  height: 30px;
  background: #4ea6a6;
  border-radius: 10px;
  text-align: center;
  cursor: pointer;
`;

const RadioContainer = styled.div`
  .radioBox {
    position: relative;
    display: flex;
    align-items: baseline;
    p {
      position: relative;
    }
    label {
      position: relative;
    }
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

const RadioBox = () => {
  return (
    <RadioContainer>
      <div className='radioBox'>
        <p className='weak'>약</p>
        <label>
          <input type={'radio'} name='check' value={1} />
          <input type={'radio'} name='check' value={2} />
          <input type={'radio'} name='check' value={3} />
          <input type={'radio'} name='check' value={4} />
          <input type={'radio'} name='check' value={5} />
        </label>
        <p className='strong'>강</p>
      </div>
    </RadioContainer>
  );
};

const HashTagModal = () => {
  const flavours = ['견과류', '초콜릿', '꽃', '과일'];
  const flavourList = flavours.map(flavour => <Button>{flavour}</Button>);

  return (
    <ModalContainer>
      <section>
        <div className='top'>
          <div className='hashTitle'>해시태그 등록</div>
          <img src={closeBlack} alt={'close'} />
        </div>
        <div className='hashBox'>
          <div className='nameBox'>
            <p>이름</p>
            <input type={'text'} />
            <select>
              <option value={'원두'} select={'seletcted'}>
                원두
              </option>
              <option value={'기타'}>기타</option>
            </select>
          </div>
          <div className='coffeeSelectBox'>
            <div className='bodyBox'>
              <div className='title'>바디감</div>
              <div className='radioBox'>
                <RadioBox />
              </div>
            </div>
            <div className='sourBox'>
              <div className='title'>산미</div>
              <div className='radioBox'>
                <RadioBox />
              </div>
            </div>
            <div className='flavourBox'>
              <p>대표 향 (한 가지만 선택)</p>
              <div className='flavour'>{flavourList}</div>
            </div>
          </div>
          <div className='modifyBtn'>
            <input type={'button'} value='추가' />
          </div>
        </div>
      </section>
    </ModalContainer>
  );
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
