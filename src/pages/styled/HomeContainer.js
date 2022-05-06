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
        left: 19px;
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
            left: 227px;
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
            left: 774px;
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

    .hash{
        img{
            position: absolute;
            top: 182px;
            left: 872px;
            width: 50px;
            height: 30px;
        }
    }

   .main{
    width: 100%;
    backgroud: 4EA6A6;
    text-align: left;
    font-style: 'NanumGothic';

    ul{
        position: absolute;
        position: block;
        top: 213px;
        left: -50px;
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
    
    .sub{
        font-weight: 700;
        font-size: 25px;
        ul{
            position: absolute;
            width: 100%;
            top: 0px;
            left: 642px;
        }

        li{
            clear: both;
            text-align: left;
            display: block;
            padding: 20px 20px 20px 20px;
            background: #F2F2F2;
        }
    }

}


}
    
   
}
`;

export default HomeContainer;
