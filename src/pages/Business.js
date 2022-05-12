import styled from 'styled-components';
import React, { useState } from 'react';
import BusinessContainer from './styled/BusinessContainer';

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
    </div>
  );
};

const Business = () => {
  return (
    <BusinessContainer>
      <section>
        <RegeShop />
      </section>
    </BusinessContainer>
  );
};

export default Business;
