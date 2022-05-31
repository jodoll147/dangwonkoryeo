import react from 'react';
import PwdResetContainer from '../styled/PwdResetContainer';
import { Link } from 'react-router-dom';

const PwdReset = () => {
  return (
    <PwdResetContainer>
      <section>
        <div className='title'>비밀번호 재설정</div>
        <div className='pwdBox'>
          <div className='pwdSet'>
            <p>비밀번호</p>
            <input type={'password'} />
          </div>
          <div className='pwdCheck'>
            <p>비밀번호 확인</p>
            <input type={'password'} />
          </div>
          <div className='resBtn'>
            <Link to='/login' style={{ textDecoration: 'none', color: '#f2f2f2' }}>
              재설정
            </Link>
          </div>
        </div>
      </section>
    </PwdResetContainer>
  );
};

export default PwdReset;
