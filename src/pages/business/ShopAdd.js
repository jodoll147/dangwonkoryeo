import React, { useState } from 'react';
import BusinessContainer from '../styled/BusinessContainer';
import { postAddShop, getUserInfo } from '../../api/constant';

const ShopAdd = () => {
  const [shopName, setShopName] = useState('');
  const [shopLicense, setShopLicense] = useState('');
  const userNum = getUserInfo().user_id;

  // const [fileImage, setFileImage] = useState('');

  // 이미지 파일 저장
  /*
  const saveFileImage = e => {
    setFileImage(URL.createObjectURL(e.target.files[0]));
  };
*/
  return (
    <BusinessContainer>
      <section>
        <div className='shopAdd'>
          <div className='title'>BusinessPage</div>
          <div className='explan'>사업자 등록이 필요한 페이지 입니다.</div>
          <div className='shopBox'>
            <p>가게명</p>
            <input type={'text'} onChange={e => setShopName(e.target.value)} />
          </div>
          <div className='busniessNum'>
            <p>사업자번호</p>
            <input type={'text'} onChange={e => setShopLicense(e.target.value)} />
            {/*<div className='documentBox'>
            <p>사업자등록증</p>
            <input type={'file'} accept='img/*' onChange={saveFileImage} />*/}
          </div>
          <div
            className='saveButton'
            onClick={e => {
              postAddShop(userNum, shopName, shopLicense)
                .then()
                .catch(e => {
                  alert('등록에 실패하였습니다.', e);
                });
            }}
          >
            등록
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
