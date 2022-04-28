import { Navigate } from "react-router-dom";

const MyPage = () => {
    const isLoggedIn = false; // 로그인 상태에 따라 true or false

    if (!isLoggedIn){
        return <Navigate to="/login" replace={true} />;
    }
    
    return(
        <div>
            MyPage
        </div>
    );
};

export default MyPage;