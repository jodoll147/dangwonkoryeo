import React, { useEffect, useRef, useState } from 'react';
import Quill from 'quill';
import { postPost } from '../../api/constant';
import 'quill/dist/quill.bubble.css';
import NoticeWrtieContainerContainer from '../styled/NoticeWriteContainer';
import { useNavigate } from 'react-router-dom';
import Responsive from './write/Responsive';
import styled from 'styled-components';

const EditorBlock = styled(Responsive)`
  padding-top: 40px;
  padding-bottom: 0.5rem;
  padding-left: 20px;
  padding-right: 20px;
  width: 940px;
  height: 500px;
  border: 1px solid #d2d9cc;
  box-sizing: border-box;
  maxlength: 1000;
`;

const TitleInput = styled.input`
  font-size: 30px;
  outline: none;
  padding-bottom: 0.5rem;
  border: none;
  border-bottom: 3px solid #d2d9cc;
  margin-bottom: 20px;
  width: 900px;
`;

const QuillWrapper = styled.div`
  .ql-editor {
    padding: 0;
    min-height: 320px;
    font-size: 1.125rem;
    line-height: 1.5;
  }
  .ql-editor .ql-blank::before {
    left: 0;
  }
`;

const NoticeWrite = () => {
  const navigate = useNavigate();
  const [hover, setHover] = useState('#CCD9D9');
  const [title, setTitle] = useState('');
  const quillElement = useRef(null);
  const quillInstance = useRef(null);

  useEffect(() => {
    quillInstance.current = new Quill(quillElement.current, {
      theme: 'bubble',
      placeholder: '내용을 작성하세요.',
      modules: {
        toolbar: [
          [{ header: '1' }, { header: '2' }],
          ['bold', 'italic', 'underline', 'strike', 'link'],
          [{ list: 'ordered' }, { list: 'bullet' }],
          ['blockquote', 'code-block', 'link', 'image'],
        ],
      },
    });
  }, []);

  return (
    <Responsive>
      <NoticeWrtieContainerContainer>
        <section>
          <h1>공지사항</h1>
          <EditorBlock>
            <TitleInput
              value={title}
              placeholder='제목을 입력하세요.'
              onChange={e => setTitle(e.target.value)}
            />
            {/* {console.log(title)} */}
            <QuillWrapper>
              <div ref={quillElement} />
            </QuillWrapper>
          </EditorBlock>
          <div
            className='complete'
            style={{ background: hover }}
            onMouseOver={() => setHover('#4EA6A6')}
            onMouseLeave={() => setHover('#CCD9D9')}
          >
            <p
              onClick={e => {
                const content = quillInstance.current.getText();
                // console.log('보낸다', { title, content });
                postPost(title, content)
                  .then(res => {
                    alert('공지사항이 성공적으로 등록되었습니다.', e);
                    navigate(`/notice/content?id=${res.id}`);
                  })
                  .catch(e => {
                    alert('오류 발생', e);
                  });
              }}
            >
              등록
            </p>
          </div>
        </section>
      </NoticeWrtieContainerContainer>
    </Responsive>
  );
};

export default NoticeWrite;
