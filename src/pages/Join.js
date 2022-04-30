import JoinContainer from './styled/JoinContainer';

const Join = () => {
  return (
    <JoinContainer>
      <section align='center'>
        <div className='joinbox' />
        <h2>회원가입</h2>
        <div className='name'>
          <p>이름</p>
          <input type={'text'} name={'name'} maxLength={'10'} />
        </div>
        <div className='id'>
          <p>아이디</p>
          <input type={'text'} name={'id'} maxLength={'10'} />
        </div>
        <div className='id_dup'>
          <input type={'button'} name={'id_dup'} value={'중복확인'} />
        </div>
        <div className='pwd'>
          <p>비밀번호</p>
          <input type={'password'} name={'pwd'} maxLength={'12'} />
        </div>
        <div className='birthday'>
          <p>생년월일</p>
          <input type={'date'} />
        </div>
        <div className='phone_num1'>
          <p>전화번호</p>
          <input type={'text'} name={'phone_num1'} maxLength={'3'} />
        </div>
        <div className='phone_num2'>
          <input type={'text'} name={'phone_num2'} maxLength={'4'} />
        </div>
        <div className='phone_num3'>
          <input type={'text'} name={'phone_num3'} maxLength={'4'} />
        </div>
        <div className='nick_name'>
          <p>닉네임</p>
          <input type={'text'} name={'nicname'} />
        </div>
        <div className='join'>
          <input type={'button'} name={'join'} value={'등록'} />
        </div>
      </section>
    </JoinContainer>
  );
};

export default Join;
