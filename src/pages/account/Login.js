import { useState } from 'react';
import LoginContainer from '../styled/LoginContainer';
import { Link, useNavigate } from 'react-router-dom';
import { PostLogin } from '../../api/constant';

const Login = () => {
  const navigate = useNavigate();
  const [id, setId] = useState('');
  const [pwd, setPwd] = useState('');
  const [error, setError] = useState('');

  return (
    <LoginContainer>
      <section>
        <div className='title'>LOGIN</div>
        <div className='id'>
          <p>아이디</p>
          <input type={'text'} name={'id'} maxlength={'10'} onChange={e => setId(e.target.value)} />
        </div>
        <div className='pwd'>
          <p>비밀번호</p>
          <input
            type={'password'}
            name={'pwd'}
            maxlength={'10'}
            onChange={e => setPwd(e.target.value)}
          />
        </div>
        <div
          className='login_btn'
          onClick={e => {
            PostLogin(id, pwd)
              .then(res => {
                navigate('/dangwonkeoyeo');
                window.location.reload();
              })
              .catch(e => console.log('login error', e), setError(e));
          }}
        >
          LOGIN
        </div>
        {/* {error == '' ? (
          ''
        ) : navigate('/dangwonkeoyeo') ? (
          ''
        ) : (
          <div className='error'>존재하지 않는 아이디나 비밀번호 입니다.</div>
        )} */}
        <div className='find'>
          <Link to={'/find'} style={{ textDecoration: 'none', color: 'black' }}>
            아이디/비밀번호 찾기
          </Link>
        </div>
        <div className='join'>
          <Link to={'/join'} style={{ textDecoration: 'none', color: 'black' }}>
            회원가입
          </Link>
        </div>
      </section>
    </LoginContainer>
  );
};

export default Login;
