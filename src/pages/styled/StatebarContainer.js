import styled from 'styled-components';

const HomeContainer = styled.div`
    section{
        position: relative;
        width: 940px;
        height: 100vh: 
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        margin: 0 auto;
        text-align: center;

            .hash{
            position: relative;
            margin-top: 20px;
            width: 32px;
            height: 16px;
            cursor: pointer;
        }

        .statebar{
            position: relative;
            width: 940px;
            height: 70px;
            display: flex;
            background: rgba(78, 166, 166, 0.8);

            .home{
                position: relative;
                margin-left: 50px;
                font-family: 'Cafe24Bold';
                font-style: normal;
                font-weight: 400;
                font-size: 20px;
                line-height: 70px;

            }
            .intro{
                position: relative;
                margin-left: 70px;
                font-family: 'Cafe24';
                font-style: normal;
                font-weight: 400;
                line-height: 70px;
            }
            .coffeeTI{
                position: relative;
                margin-left: 70px;
                font-family: 'Cafe24';
                font-style: normal;
                font-weight: 400;
                line-height: 70px;
            }
            .notice{
                position: relative;
                margin-left: 70px;
                font-family: 'Cafe24';
                font-style: normal;
                font-weight: 400;
                line-height: 70px;
            }
            .login{
                position: relative;
                left: 130px;
                font-family: 'Cafe24';
                font-style: normal;
                font-weight: 400;
                line-height: 70px;
            }
            .join{
                position: relative;
                left: 155px;
                font-family: 'Cafe24';
                font-style: normal;
                font-weight: 400;
                line-height: 70px;
            }
            .username{
                position: relative;
                margin-left: 55px;
                font-family: 'Cafe24';
                font-style: normal;
                font-weight: 400;
                line-height: 70px;
                color: #F2F2F2;
            }
            .logout{
                position: relative;
                width: 48px;
                height: 16px;
                margin-top: 25px;
                margin-left: 5px;
                font-size: 12px;
                font-family: 'Cafe24Bold';
                font-style: normal;
                font-weight: 400;
                line-height: 16px;
                background: #4EA6A6;
                border-radius: 5px;
            }
            .mypage{
                position: relative;
                width: 48px;
                height: 16px;
                margin-left: 15px;
                font-size: 12px;
                font-family: 'Cafe24';
                font-style: normal;
                font-weight: 400;
                line-height: 70px;
            }
      
            img{
                position: relative;
                width: 40px;
                height: 25px;
            }
        }
        

    }

`;

export default HomeContainer;
