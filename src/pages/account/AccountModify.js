import { useState } from 'react';
import { Link } from 'react-router-dom';
import AccountModifyContainer from '../styled/AccountModifyContainer';

const AccountModify = () => {
  const [email, setEmail] = useState('');
  const [phnoe, setPhone] = useState(['+8210', '', '']);
  const [birth, setBirth] = useState('');

  return (
    <AccountModifyContainer>
      <section>
        <div className='title'>내 정보 수정</div>
        <div className='box'>
          <div className='nameBox'>
            <p>이름</p>
            <div className='name'>김첨지</div>
          </div>
          <div className='idBox'>
            <p>아이디</p>
            <div className='id'>아이디</div>
          </div>
          <div className='pwdBox'>
            <p>비밀번호</p>
            <Link
              to='/pwdreset'
              className='pwd'
              style={{ textDecoration: 'none', color: '#f2f2f2' }}
            >
              재설정
            </Link>
          </div>
          <div className='emailBox'>
            <p>이메일</p>
            <input type={'text'} onChange={e => setEmail(e.target.value)} />
            <div className='emailBtn'>변경</div>
          </div>
          <div className='phoneBox'>
            <p>전화번호</p>
            <input type={'text'} maxLength={3} />
            <input type={'text'} maxLength={4} />
            <input type={'text'} maxLength={4} />
            <div className='phoneBtn'>변경</div>
          </div>
          <div className='birthBox'>
            <p>생년월일</p>
            <input type={'date'} />
            <div className='birthBtn'>변경</div>
          </div>
        </div>
      </section>
    </AccountModifyContainer>
  );
};

export default AccountModify;
