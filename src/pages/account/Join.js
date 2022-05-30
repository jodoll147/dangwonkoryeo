import { useState } from 'react';
import { PostRegister } from '../../api/constant';
import JoinContainer from '../styled/JoinContainer';

const Join = () => {
  const [idhover, setIdHover] = useState('#4EA6A6');
  const [finHover, setFinHover] = useState('#CCD9D9');
  const [name, setName] = useState('');
  const [id, setId] = useState('');
  const [pwd, setPwd] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState(['010', '', '']);
  const [birth, setBirth] = useState('');

  return (
    <JoinContainer>
      <section>
        <div className='joinBox'>
          <div className='join'>회원가입</div>
          <div className='name'>
            <p>이름</p>
            <input type={'text'} onChange={e => setName(e.target.value)} />
          </div>
          <div className='id'>
            <p>아이디</p>
            <input type={'text'} onChange={e => setId(e.target.value)} />
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
            <input type={'password'} onChange={e => setPwd(e.target.value)} />
          </div>
          <div className='email'>
            <p>이메일</p>
            <input type={'text'} onChange={e => setEmail(e.target.value)} />
          </div>
          <div className='phone'>
            <p>전화번호</p>
            <input
              type={'text'}
              maxLength={3}
              value={phone[0]}
              onChange={e => {
                const value = e.target.value.replace(/[^0-9]/g, '');
                setPhone(p => {
                  p[0] = value;
                  return [...p];
                });
              }}
            />
            <input
              type={'text'}
              maxLength={4}
              value={phone[1]}
              onChange={e => {
                const value = e.target.value.replace(/[^0-9]/g, '');
                setPhone(p => {
                  p[1] = value;
                  return [...p];
                });
              }}
            />
            <input
              type={'text'}
              maxLength={4}
              value={phone[2]}
              onChange={e => {
                const value = e.target.value.replace(/[^0-9]/g, '');
                setPhone(p => {
                  p[2] = value;
                  return [...p];
                });
              }}
            />
          </div>
          <div className='birthday'>
            <p>생년월일</p>
            <input type={'date'} onChange={e => setBirth(e.target.value)} />
          </div>

          <div
            className='complete'
            style={{ background: finHover }}
            onMouseOver={() => setFinHover('#4EA6A6')}
            onMouseLeave={() => setFinHover('#CCD9D9')}
            onClick={e => {
              if (!email) {
                alert('이메일을 입력하세요.');
                return;
              }
              if (!/^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(email)) {
                alert('올바른 이메일을 입력하세요.');
                return;
              }
              if (phone[0].length !== 3 || phone[1].length !== 4 || phone[2].length !== 4) {
                alert('휴대폰 번호를 입력하세요.');
                return;
              }
              console.log({ id, name, pwd, email, phone: phone.join('-') });
              PostRegister(id, name, pwd, email, phone, birth)
                .then(res => {
                  alert('회원가입이 완료되었습니다.', e);
                })
                .catch(e => {
                  alert('오류 발생', e);
                });
            }}
          >
            등록
          </div>
        </div>
      </section>
    </JoinContainer>
  );
};

export default Join;
