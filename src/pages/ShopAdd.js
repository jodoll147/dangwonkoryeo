import React, { useState } from 'react';
import BusinessContainer from './styled/BusinessContainer';

const ShopAdd = () => {
  const [files, setFiles] = useState('');

  const onLoadFile = e => {
    const file = e.target.files;
    setFiles(file);
  };

  return (
    <BusinessContainer>
      <section>
        <div className='shopAdd'>
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
            <p>
              가게 이미지, 메뉴, 해시태그 등은 사업자등록 후 수정하기를 통해 사용하실 수 있습니다.
            </p>
          </div>
        </div>
      </section>
    </BusinessContainer>
  );
};

export default ShopAdd;
