import { useState } from 'react';
import JoinContainer from '../styled/JoinContainer';

const Join = () => {
  const [idhover, setIdHover] = useState('#4EA6A6');
  const [finHover, setFinHover] = useState('#CCD9D9');

  return (
    <JoinContainer>
      <section>
        <div className='joinBox'>
          <div className='join'>회원가입</div>
          <div className='name'>
            <p>이름</p>
            <input type={'text'} />
          </div>
          <div className='id'>
            <p>아이디</p>
            <input type={'text'} />
            <div
              className='idCheck'
              style={{ background: idhover }}
              onMouseOver={() => setIdHover('#377575')}
              onMouseLeave={() => setIdHover('#4EA6A6')}
            >
              중복검사
            </div>
          </div>
          <div className='pwd'>
            <p>비밀번호</p>
            <input type={'password'} />
          </div>
          <div className='phone'>
            <p>전화번호</p>
            <input type={'text'} />
            <input type={'text'} />
            <input type={'text'} />
          </div>
          <div className='birthday'>
            <p>생년월일</p>
            <input type={'date'} />
          </div>
          <div
            className='complete'
            style={{ background: finHover }}
            onMouseOver={() => setFinHover('#4EA6A6')}
            onMouseLeave={() => setFinHover('#CCD9D9')}
          >
            등록
          </div>
        </div>
      </section>
    </JoinContainer>
  );
};

export default Join;
