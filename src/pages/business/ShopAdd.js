import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BusinessContainer from '../styled/BusinessContainer';
import { postAddShop, getUserInfo } from '../../api/constant';

const ShopAdd = () => {
  const [shopName, setShopName] = useState('');
  const [shopLicense, setShopLicense] = useState('');
  const userNum = getUserInfo().user_id;
  const navigate = useNavigate();

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
          </div>
          <div
            className='saveButton'
            onClick={e => {
              postAddShop(userNum, shopName, shopLicense)
                .then(res => {
                  navigate(`/business`);
                })
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
