import Editor from '../write/Editor';
import NoticeWrtieContainerContainer from './styled/NoticeWriteContainer';
import Responsive from './styled/Responsive';

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
