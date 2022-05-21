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
                margin-left: 100px;
                font-family: 'Cafe24';
                font-style: normal;
                font-weight: 400;
                line-height: 70px;
            }
            .join{
                position: relative;
                margin-left: 20px;
                font-family: 'Cafe24';
                font-style: normal;
                font-weight: 400;
                line-height: 70px;
            }
            .hash{
                position: relative;
                margin-left: 70px;
                margin-top: 20px;
                width: 32px;
                height: 16px;
                cursor: pointer;
            }
        }
    }

`;

export default HomeContainer;
