import styled from 'styled-components';
import React from 'react';
import FindContainer from './styled/FindContainer';

const Find = () => {
  return (
    <FindContainer>
      <section>
        <div className='id_find'>
          <p>아이디 찾기</p>
          <div className='name'>
            <p>이름</p>
            <input type={'text'} />
          </div>
          <div className='birthday'>
            <p>생년월일</p>
            <input type={'date'} />
          </div>
          <div className='phone'>
            <p>전화번호</p>
            <input type={'text'} />
            <input type={'text'} />
            <input type={'text'} />
          </div>
          <div className='find'>
            <p>찾기</p>
          </div>
        </div>
        <div className='pwd_find'>
          <p>비밀번호 찾기</p>
          <div className='name'>
            <p>이름</p>
            <input type={'text'} />
          </div>
          <div className='id'>
            <p>아이디</p>
            <input type={'text'} />
          </div>
          <div className='birthday'>
            <p>생년월일</p>
            <input type={'date'} />
          </div>
          <div className='phone'>
            <p>전화번호</p>
            <input type={'text'} />
            <input type={'text'} />
            <input type={'text'} />
          </div>
          <div className='find'>
            <p>찾기</p>
          </div>
        </div>
      </section>
    </FindContainer>
  );
};

export default Find;
