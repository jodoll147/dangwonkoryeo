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

        ul{
            list-style: none;
        }
        li{
            display: inline-block;
            padding: 25px;
            text-align: center;
            float: left;
        }

        .statebar{
            position: relative;
            width: 100%;
            height: 70px;
            background: rgba(78, 166, 166, 0.8);
            
            .home{
                position: relative;
                left: 5.32%;
                right: 86.6%;
                font-family: 'NanumGothicExtrabold';
                font-style: normal;
                font-weight: 800;
                font-size: 20px;
                line-height: 20px;
            }
            .intro{
                position: relative;
                left: 20.85%;
                right: 69.04%;
                font-family: 'NanumGothic';
                font-style: normal;
                font-weight: 400;
            }
            .coffeeTI{
                position: relative;
                font-family: 'NanumGothic';
                left: 38.4%;
                right: 53.51%;
                font-style: normal;
                font-weight: 400;
            }
            .notice{
                position: relative;
                font-family: 'NanumGothic';
                left: 53.94%;
                right: 39.57%;
                font-style: normal;
                font-weight: 400;
            }
            .login{
                position: relative;
                font-family: 'NanumGothic';
                left: 130px;
                font-style: normal;
                font-weight: 400;
            }
            .join{
                position: relative;
                font-family: 'NanumGothic';
                left:100px;
                font-style: normal;
                font-weight: 400;
            }
            .hash{
                position: relative;
                width: 32px;
                height: 16px;
                left: 100px;
                top: -5px;
            }
        }
    }

`;

export default HomeContainer;
