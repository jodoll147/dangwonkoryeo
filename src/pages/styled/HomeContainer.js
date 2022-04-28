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
        position: absolute;
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
    .statebar{
        position: absolute;
        width: 100%;
        height: 70px;
        top: 263px;
        background: #4EA6A6;
    }
    .intro{
        position: absolute;
        left: 109px;
        top:13px;
        font-weight: 700;
        font-size: 35px;
        color: #F2F2F2;
    }
    .coffeeTI{
        position: absolute;
        left: 426px;
        top:13px;
        font-weight: 700;
        font-size: 35px;
        color: #F2F2F2;
    }
    .notice{
        position: absolute;
        left: 701px;
        top:13px;
        font-weight: 700;
        font-size: 35px;
        color: #F2F2F2;
        cursor: pointer;

        
    }
    .sub{
            font-weight: 700;
            font-size: 35px;
    
            ul{

                position: relative;
                top: -25px;
                left: 500x;
                list-style: none;
            }
            li{

                display: block;
                padding: 20px 20px 20px 20px;
                text-align:left;
                background: #F2F2F2;
            }
    
        }
    
    
   
}
`;

export default HomeContainer;
