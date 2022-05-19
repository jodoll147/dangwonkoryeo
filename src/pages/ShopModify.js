import React, { Component, useState } from 'react';
import ShopModifyContainer from './styled/ShopModifyContainer';
import styled from 'styled-components';
import close from './img/close.png';
import closeBlack from './img/closeBlack.png';
import ModalContainer from './styled/ModalContainer';
import shopImg from './img/shopImg.png';

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

const ShopModify = () => {
  const [textValue, setTextValue] = useState('');
  const [hashTags, setHashTags] = useState([]);
  const [onHashClick, setOnHashClick] = useState(false);
  const flavours = ['견과류', '초콜릿', '꽃', '과일'];
  const flavourList = flavours.map(flavour => <Button>{flavour}</Button>);
  const [fileImage, setFileImage] = useState(shopImg);

  const hashClick = () => {
    setOnHashClick(true);
  };

  const closeClick = () => {
    setOnHashClick(false);
  };

  const handleSetValue = e => {
    setTextValue(e.target.value);
  };

  const onRemove = name => {
    setHashTags(hashTags.filter(name => hashTags !== name));
  };

  // 이미지 파일 저장
  const saveFileImage = e => {
    setFileImage(URL.createObjectURL(e.target.files[0]));
  };

  const HashTag = () => {
    const hashAddList = hashTags.map(hash => (
      <HashTagDiv>
        <div className='hash'>
          {hash}
          <img src={close} alt='x' onClick={console.log('df')} />
        </div>
      </HashTagDiv>
    ));

    return hashAddList;
  };

  const Modal = () => {
    const selectList = ['원두', '기타'];
    const [Selected, setSelected] = useState('');
    const handleSelect = e => {
      setSelected(e.target.value);
    };
    const [value, setValue] = useState('');

    const onChange = e => {
      setValue(e.target.value);
    };

    const onClick = () => {
      setHashTags(p => p.concat(value));
      setOnHashClick(false);
    };

    return (
      <ModalContainer>
        <section>
          <div className='top'>
            <div className='hashTitle'>해시태그 등록</div>
            <img src={closeBlack} alt={'close'} onClick={closeClick} />
          </div>
          <div className='hashBox'>
            <div className='nameBox'>
              <p>이름</p>
              <input type={'text'} name='name' onChange={onChange} />
              <select onChange={handleSelect} value={Selected}>
                {selectList.map(item => (
                  <option value={item} key={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
            {Selected === '원두' ? (
              <div className='coffeeSelectBox'>
                <div className='bodyBox'>
                  <p className='bodyTitle'>바디감</p>
                  <div className='radioBox'>
                    <RadioBox />
                  </div>
                </div>
                <div className='sourBox'>
                  <p className='sourTitle'>산미</p>
                  <div className='radioBox'>
                    <RadioBox />
                  </div>
                </div>
                <div className='flavourBox'>
                  <p>대표 향 (한 가지만 선택)</p>
                  <div className='flavour'>{flavourList}</div>
                </div>
              </div>
            ) : (
              ''
            )}
            <div className='modifyBtn'>
              <input type={'button'} value='추가' onClick={onClick} />
            </div>
          </div>
        </section>
      </ModalContainer>
    );
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
            <input type={'button'} className='add' value={'추가'} onClick={hashClick} />
          </div>
          <div className='imgBox'>
            <p>이미지</p>
            <img alt='sample' src={fileImage} />
            <input type={'file'} accept={'image/*'} onChange={saveFileImage} />
          </div>
          <div className='imgAdd'>수정</div>
        </div>
        {onHashClick ? <Modal /> : ''}
      </section>
    </ShopModifyContainer>
  );
};

export default ShopModify;
