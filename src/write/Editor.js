import React, { useEffect, useRef } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.bubble.css';
import Responsive from '../pages/styled/Responsive';
import styled from 'styled-components';

const EditorBlock = styled(Responsive)`
  padding-top: 40px;
  padding-bottom: 0.5rem;
  padding-left: 20px;
  padding-right: 20px;
  width: 940dpx;
  height: 1000px;
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

const Editor = () => {
  const quillElement = useRef(null);
  const quillInstance = useRef(null);

  const limit = 1000;

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
      <EditorBlock>
        <TitleInput placeholder='제목을 입력하세요.' />
        <QuillWrapper>
          <div ref={quillElement} />
        </QuillWrapper>
      </EditorBlock>
    </Responsive>
  );
};

export default Editor;
