import styled from 'styled-components';

const FindContainer = styled.div`
    section{
        position: relative;
        font-family: 'NanumGothic';
        font-style: normal;
        font-weight: 700;
        font-size: 25px;
        text-align: left;
        letter-spacing: -0.333333px;
        color: #4EA6A6;
    }
    .name{
        input{
            position: absolute;
            width: 150px;
            height: 35px;
            top: -5px;
            left: 75px;
            text-align: left;
            background: #F2F2F2;
            border: 3px solid #D2D9CC;
            box-sizing: border-box;
            border-radius: 15px;
            font-size: 25px;
            font-family: 'NanumGothic';
        }
    }
    .birthday{
        p{
            position: absolute;
            top: 30px;
        }
        input{
            position: absolute;
            width: 150px;
            height: 35px;
            top: 53px;
            left: 125px;
            text-align: left;
            background: #F2F2F2;
            border: 3px solid #D2D9CC;
            box-sizing: border-box;
            border-radius: 15px;
            font-size: 20px;
            font-family: 'NanumGothic';
        }
    }
    .phonenum_1{
        p{
            position: absolute;
            top: 80px;
        }
        input{
            position: absolute;
            width: 60px;
            height: 35px;
            top: 105px;
            left: 125px;
            text-align: left;
            background: #F2F2F2;
            border: 3px solid #D2D9CC;
            box-sizing: border-box;
            border-radius: 15px;
            font-size: 25px;
            font-family: 'NanumGothic';
        }
    }
    .phonenum_2{
        input{
            position: absolute;
            width: 70px;
            height: 35px;
            top: 105px;
            left: 206px;
            text-align: left;
            background: #F2F2F2;
            border: 3px solid #D2D9CC;
            box-sizing: border-box;
            border-radius: 15px;
            font-family: 'NanumGothic';

        }
    }
    .phonenum_3{
        input{
            position: absolute;
            width: 70px;
            height: 35px;
            top: 105px;
            left: 297px;
            text-align: left;
            background: #F2F2F2;
            border: 3px solid #D2D9CC;
            box-sizing: border-box;
            border-radius: 15px;
            font-family: 'NanumGothic';
        }
    }
    .find_btn{
        input{
            position: absolute;
            top: 240px;
            left: 297px;
            font-weight: 700;
            font-size: 25px;
            text-align: center;
            color: #F2F2F2;
            width: 80px;
            height: 50px;
            background: #4EA6A6;
            border-radius: 20px;
            border: 1px solid #4EA6A6;
        }
    }
`;

export default FindContainer;