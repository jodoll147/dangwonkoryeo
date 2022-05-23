import { useState } from 'react';
import NoticeWrtieContainerContainer from '../styled/NoticeWriteContainer';
import Responsive from '../write/Responsive';
import Editor from '../write/Editor';

const NoticeWrite = () => {
  const [hover, setHover] = useState('#CCD9D9');

  return (
    <Responsive>
      <NoticeWrtieContainerContainer>
        <section>
          <h1>공지사항</h1>
          <Editor />
          <div
            className='complete'
            style={{ background: hover }}
            onMouseOver={() => setHover('#4EA6A6')}
            onMouseLeave={() => setHover('#CCD9D9')}
          >
            <p>등록</p>
          </div>
        </section>
      </NoticeWrtieContainerContainer>
    </Responsive>
  );
};

export default NoticeWrite;
