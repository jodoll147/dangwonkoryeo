import styled from 'styled-components';

const HomeContainer = styled.div`
    section{
        position: relative;
        width: 940px;
        height: 100%: 
        font-family: 'NanumGothic';
        font-style: normal;
        font-weight: 700;
        font-size: 35px;
        margin: 0 auto;
        letter-spacing: -0.333333px;
    }

    .login{
        position: absolute;
        right: 122px;
        top: 63px;
        text-align: right;
        font-weight: 700;
        font-size: 20px;
        color: #4EA6A6;
    }
    .join{
        position: relative;
        right: 60px;
        top: 63px;
        text-align: right;
        font-weight: 700;
        font-size: 20px;
        color: #4EA6A6;
    }
     .home{
        position: absolute;
        top: 163px;
        left: 50px;
        font-weight: 800;
        font-size: 50px;
        text-align: left;
        color: #4EA6A6;
     }
     .search_box{
        input{
            position: absolute;
            width: 530px;
            height: 50px;
            top: 173px;
            left: 260px;
            background: #F2F2F2;
            border: 5px solid #4EA6A6;
            box-sizing: border-box;
            border-radius: 20px;
            text-align: left;
        }
     }
     .search_btn{
        input{
            position: absolute;
            top: 173px;
            left: 810px;
            width: 80px;
            height: 50px;
            background: #4EA6A6;
            border-radius: 20px;
            border: 1px solid #4EA6A6;
            font-weight: 800;
            font-size: 30px;
            color: #F2F2F2;
            text-align: center;
        }
    }


   .main{
    positon: absolute;
    width: 100%;
    backgroud: 4EA6A6;
    text-align: left;
    overflow: hidden;

    ul{
        position: absolute;
        position: block;
        top: 213px;
        left: -40px;
        list-style: none;
        width : 100%;

    }
    li{
        display: inline-block;
        padding: 20px 20px 20px 20px;
        text-align: center;
        float: left;
        background: #4EA6A6;
        width: 29%;
        hight: 70px;
    }

    .main: after{
        content: "";
        display: block;
        clear: both;
    }
    .sub{
        font-weight: 700;
        font-size: 25px;

        li{
            positon: absolute;
            display: block;
            width: 10%;
            padding: 0px;
            background: #F2F2F2;
        }
    }

}


}
    
   
}
`;

export default HomeContainer;
