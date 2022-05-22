import NoticeWrtieContainerContainer from '../styled/NoticeWriteContainer';
import Responsive from '../write/Responsive';
import Editor from '../write/Editor';

const NoticeWrite = () => {
  return (
    <Responsive>
      <NoticeWrtieContainerContainer>
        <section>
          <h1>공지사항</h1>
          <Editor />
          <div className='complete'>
            <p>등록</p>
          </div>
        </section>
      </NoticeWrtieContainerContainer>
    </Responsive>
  );
};

export default NoticeWrite;
