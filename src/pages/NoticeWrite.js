import Editor from "../write/Editor";
import NoticeWrtieContainerContainer from "./styled/NoticeWriteContainer";
import Responsive from "./styled/Responsive";

const NoticeWrite = () => {
    return(
        <Responsive>
            <NoticeWrtieContainerContainer>
                <div className="noticeWrite">
                    <h1>공지사항</h1>
                    <p>글쓰기</p>
                    <input type={"submit"} value="등록"/>
                </div>
                <div className="editor"><Editor/></div>
            </NoticeWrtieContainerContainer>
        </Responsive>
    );
}

export default NoticeWrite;