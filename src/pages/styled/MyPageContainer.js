import styeld from 'styled-components';

const MyPageContainer = styeld.div`
    section{
        position: relative;
        width: 940px;
        height: 648px;
        .myPageBox{
            position: relative;

            .myPage{
                position: relative;
                font-family: 'Cafe24Bold';
                font-style: normal;
                font-weight: 800;
                font-size: 18px;
                line-height: 18px;
                color: #594031;
                margin-top: 20px;
                margin-left: 30px;
                text-align: left;
        }
    }
        .nameBox{
            position: relative;
            margin-top: 20px;
            margin-left: 30px;
            display: flex;
            .name{
                position: relative;
                margin-right: 10px;
                font-family: 'Cafe24';
                font-style: normal;
                font-weight: 700;
                font-size: 16px;
                line-height: 16px;
                color: black;
            }
            .userName{
                position: relative;
                font-family: 'Cafe24';
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
            margin-top: 20px;
            align-items: baseline;

            .coffeeTI{
                position: relative;
                margin-left: 30px;
                margin-right: 10px;
                font-family: 'Cafe24';
                font-style: normal;
                font-weight: 700;
                font-size: 16px;
                line-height: 16px;
                color: black;

            }
            .type{
                position: relative;
                margin-right: 10px;
                font-family: 'Cafe24';
                font-style: normal;
                font-weight: 400;
                font-size: 16px;
                line-height: 16px;
                color: black;
            }
            .check{
                position: relative;
                width: 80px;
                height: 25px;
                background: #D2D9CC;
                border-radius: 10px;
                font-family: 'Cafe24';
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
            .cafeList{
                position: relative;
                margin-bottom: 10px;
                margin-top: 20px;
                margin-left: 30px;
                font-family: 'Cafe24';
                font-style: normal;
                font-weight: 700;
                font-size: 16px;
                line-height: 16px;
                color: black;
                text-align: left;
            }
        }
        .busniessPage{
            position: relative;
            width: 114px;
            height: 40px;
            margin-left: 796px;
            margin-top: 40px;
            font-family: 'Cafe24Bold';
            font-style: normal;
            font-weight: 700;
            font-size: 16px;
            line-height: 40px;
            color: black;
            border: 3px solid #4EA6A6;
            border-radius: 10px;
        }
    }
`;

export default MyPageContainer;
