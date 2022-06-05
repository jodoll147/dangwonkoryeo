import react, { useState, useEffect } from 'react';
import PwdResetContainer from '../styled/PwdResetContainer';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { getAllUser, pwdResetPost } from '../../api/constant';

const PwdReset = () => {
  const [hover, setHover] = useState('#4EA6A6');
  const [pwd, setPwd] = useState('');
  const [pwdCheck, setPwdCheck] = useState('');
  const text = <p>비밀번호가 일치하지 않습니다.</p>;
  const [searchParams] = useSearchParams();
  const dataB64String = searchParams.get('id');
  const userId = atob(dataB64String);
  const navigate = useNavigate();

  return (
    <PwdResetContainer>
      <section>
        <div className='title'>비밀번호 재설정</div>
        <div className='pwdBox'>
          <div className='pwdSet'>
            <p>비밀번호</p>
            <input type={'password'} onChange={e => setPwd(e.target.value)} />
          </div>
          <div className='pwdCheck'>
            <p>비밀번호 확인</p>
            <input type={'password'} onChange={e => setPwdCheck(e.target.value)} />
          </div>
          {pwd === pwdCheck ? '' : text}
          <div className='resBtn' style={{ background: { hover } }}>
            <div
              style={{ textDecoration: 'none', color: '#f2f2f2' }}
              onClick={e => {
                pwdResetPost(userId, pwd)
                  .then(navigate(`/login`))
                  .catch(e => alert(e, '재설정에 실패하였습니다.'));
              }}
            >
              재설정
            </div>
          </div>
        </div>
      </section>
    </PwdResetContainer>
  );
};

export default PwdReset;
