import styeld from 'styled-components';

const MyPageContainer = styeld.div`
    section{
        position: relative;
        width: 940px;
        height: 648px;
        .myPage{
            position: relative;
            font-family: 'NanumGothic';
            font-style: normal;
            font-weight: 800;
            font-size: 18px;
            line-height: 18px;
            color: #594031;
            margin-top: 20px;
            margin-left: 30px;
            text-align: left;
        }
        .nameBox{
            position: relative;
            margin-top: 20px;
            margin-left: 30px;
            display: flex;
            .name{
                position: relative;
                margin-right: 10px;
                font-family: 'NanumGothic';
                font-style: normal;
                font-weight: 700;
                font-size: 16px;
                line-height: 16px;
                color: black;
            }
            .userName{
                position: relative;
                font-family: 'NanumGothic';
                font-style: normal;
                font-weight: 400;
                font-size: 16px;
                line-height: 16px;
                color: black;
            }
        }
        .coffeeTIBox{
            position: relative;
            display: flex;
            .coffeeTI{
                position: relative;
                margin-top: 20px;
                margin-left: 30px;
                margin-right: 10px;
                font-family: 'NanumGothic';
                font-style: normal;
                font-weight: 700;
                font-size: 16px;
                line-height: 16px;
                color: black;

            }
            .type{
                position: relative;
                margin-top: 20px;
                margin-right: 10px;
                font-family: 'NanumGothic';
                font-style: normal;
                font-weight: 400;
                font-size: 16px;
                line-height: 16px;
                color: black;
            }
            .check{
                position: relative;
                margin-top: 15px;
                width: 80px;
                height: 25px;
                background: #D2D9CC;
                border-radius: 10px;
                font-family: 'NanumGothic';
                font-style: normal;
                font-weight: 800;
                font-size: 16px;
                line-height: 25px;
                color: #F2F2F2;
            }
        }
        .hashBox {
            position: relative;
            margin-top: 10px;
            margin-left: 30px;
            width: 940px;
            height: 30px;
            .hashList {
              position: relative;
              display: flex;
            }
        }
        .cafeListBox{
            position: relative;
            margin-top: 20px;
            margin-left: 30px;
            .cafeList{
                position: relative;
                font-family: 'NanumGothic';
                font-style: normal;
                font-weight: 700;
                font-size: 16px;
                line-height: 16px;
                color: black;
                text-align: left;
            }
        }
    }
`;

export default MyPageContainer;
