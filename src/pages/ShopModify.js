import React from 'react';
import ShoppModifyContainer from './styled/ShopModifyContainer';

const ShopModify = () => {
  return (
    <ShoppModifyContainer>
      <section>
        <div className='title'>Business Page</div>
        <div className='shoprege'>가게수정</div>
        <div className='shopregeBox'>
          <div className='shopnameBox'>
            <p>가게명</p>
            <input type={'text'} />
          </div>
          <div className='shopInfo'>
            <p>설명</p>
            <input type={'text'} />
            <div type='info'>300자 이내로 작성해주세요.</div>
          </div>
          <div className='phoneBox'>
            <p>전화번호</p>
            <input type={'text'} />
            <input type={'text'} />
            <input type={'text'} />
          </div>
          <div className='LocationBox'>
            <p>가게위치</p>
            <input type={'text'} />
          </div>
          <div className='menuBox'>
            <p>메뉴</p>
            <input type={'text'} />
            <div className='plus'>추가</div>
          </div>
          <div className='imgBox'>
            <p>이미지</p>
            <div className='img'></div>
            <div className='upload'>업로드</div>
          </div>
          <div className='rege'>추가</div>
        </div>
      </section>
    </ShoppModifyContainer>
  );
};

export default ShopModify;
