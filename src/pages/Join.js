import JoinContainer from './styled/JoinContainer';

const Join = () => {
  return (
    <JoinContainer>
      <section>
        <div className='join' style={{ color: '#594031', fontFamily: 'NanumGothicBold' }}>
          <p>회원가입</p>
        </div>
        <div className='name'>
          <p>이름</p>
          <input type={'text'} />
        </div>
        <div className='id'>
          <p>아이디</p>
          <input type={'text'} />
          <div className='id_check'>
            <p>중복검사</p>
          </div>
        </div>
        <div className='pwd'>
          <p>비밀번호</p>
          <input type={'password'} />
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
        <div className='complete'>
          <p>등록</p>
        </div>
      </section>
    </JoinContainer>
  );
};

export default Join;
