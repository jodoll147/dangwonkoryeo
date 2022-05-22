import JoinContainer from '../styled/JoinContainer';

const Join = () => {
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
            <div className='idCheck'>중복검사</div>
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
          <div className='complete'>등록</div>
        </div>
      </section>
    </JoinContainer>
  );
};

export default Join;
