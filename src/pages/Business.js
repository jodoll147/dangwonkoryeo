import styled from 'styled-components';
import React, { useState } from 'react';
import BusinessContainer from './styled/BusinessContainer';

const CafeListContainer = styled.div`
  position: relative;
  display: flex;
  width: 940px;
  height: 70px;
  border: 1px solid #f2f2f2;
  font-family: 'Cafe24';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 70px;
  .num {
    position: relative;
    width: 20px;
    margin-left: 30px;
    color: #4ea6a6;
  }
  .name {
    position: relative;
    margin-left: 10px;
    color: black;
  }
`;

const RegeShop = () => {
  const [files, setFiles] = useState('');

  const onLoadFile = e => {
    const file = e.target.files;
    setFiles(file);
  };

  return (
    <div className='regeShopBox'>
      <div className='title'>BusinessPage</div>
      <div className='explan'>사업자 등록이 필요한 페이지 입니다.</div>
      <div className='shopBox'>
        <p>가게명</p>
        <input type={'text'} />
      </div>
      <div className='documentBox'>
        <p>사업자등록증</p>
        <input type={'file'} accept='img/*' onChange={onLoadFile} />
      </div>
      <div className='infoBox'>
        <p>사업자 등록은 3~4일 정도 소요됩니다.</p>
        <p>가게 이미지, 메뉴, 해시태그 등은 사업자등록 후 수정하기를 통해 사용하실 수 있습니다.</p>
      </div>
    </div>
  );
};

const CafeList = () => {
  const [cafe, setcafe] = useState([
    { num: 0, name: '김첨지커피' },
    { num: 1, name: '명선이커피' },
  ]);
  const cafeList = cafe.map(temp => (
    <CafeListContainer>
      <div className='num'>{temp.num}</div>
      <div className='name'>{temp.name}</div>
    </CafeListContainer>
  ));

  return cafeList;
};

const ShopModify = () => {
  return (
    <div className='shopModifyBox'>
      <div className='title'>Business Page</div>
      <div className='userNameBox'>
        <div className='userName'>김첨지</div>
        <div className='info'>사장님 반갑습니다!</div>
      </div>
      <div className='shop'>
        <p>내 가게 관리하기</p>
        <CafeList />
      </div>
    </div>
  );
};

const Business = () => {
  return (
    <BusinessContainer>
      <section>
        <ShopModify />
      </section>
    </BusinessContainer>
  );
};

export default Business;
