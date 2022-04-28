import styled from 'styled-components';

const JoinContainer = styled.div`
    .hr{
        position: relative;
        width: 100%;
        top: 870px;
        background: #D2D9CC;
        border: 5px solid #D2D9CC;
    }
    section{
        position: relative;
        width: 940px;
        height: 100%: 
        font-family: 'NanumGothic';
        font-style: normal;
        font-weight: 700;
        font-size: 25px; 
        margin: 0 auto;
        letter-spacing: -0.333333px;
        color: #4EA6A6;
    }
    h2{
        position: absolute;
        top: 373px;
        left: 60px;
        color: #594031;
        text-align: left;
        font-size: 30px;
    }
    .joinbox{     
        position: absolute;
        width: 140px;
        height: 50px;
        top: 393px;
        left: 50px;
        background: #F2F2F2;
        border-radius: 20px;
        text-align: left;
    }

    .name{
        p{
            position: absolute;
            left: 60px;
            top: 443px;
            text-align: left;
            font-size: 25px; 

        }
        input{
            position: absolute;
            width: 150px;
            height: 35px;
            left: 127px;
            top: 468px;
            background: #F2F2F2;
            border: 3px solid #D2D9CC;
            box-sizing: border-box;
            border-radius: 15px;   
        }
    }
    .id{
        p{
            position: absolute;
            left: 60px;
            top: 500px;
            text-align: left;
            font-size: 25px; 
        }
        input{
            position: absolute;
            width: 150px;
            height: 35px;
            left: 150px;
            top: 525px;
            background: #F2F2F2;
            border: 3px solid #D2D9CC;
            box-sizing: border-box;
            border-radius: 15px;   
        }
    }
    .id_dup{
        input{
            position: absolute;
            width: 100px;
            height: 30px;
            left: 326px;
            top: 530px;
            background: #D2D9CC;
            border-radius: 10px;
            font-weight: 700;
            font-size: 20px;
            line-height: 20px;
            text-align: center;
            color: #F2F2F2;
            border: 3px solid #D2D9CC;
            box-sizing: border-box;
        }
    }
    .pwd{
        p{
            position: absolute;
            left: 60px;
            top: 555px;
            text-align: left;
            color: #4EA6A6;
            font-size: 25px; 
        }
        input{
            position: absolute;
            width: 200px;
            height: 35px;
            left: 174px;
            top: 583px;
            background: #F2F2F2;
            border: 3px solid #D2D9CC;
            box-sizing: border-box;
            border-radius: 15px;  
        }

    }
    .birthday{
        p{
            position: absolute;
            left: 60px;
            top: 615px;
            text-align: left;
            color: #4EA6A6;
            font-size: 25px; 
        }
        input{
            position: absolute;
            width: 200px;
            height: 35px;
            left: 174px;
            top: 640px;
            background: #F2F2F2;
            border: 3px solid #D2D9CC;
            box-sizing: border-box;
            border-radius: 15px;  
        }
    }
    .phone_num1{
        p{
            position: absolute;
            left: 60px;
            top: 670px;
            text-align: left;
            color: #4EA6A6;
            font-size: 25px; 
        }
        input{
            position: absolute;
            width: 60px;
            height: 35px;
            left: 174px;
            top: 695px;
            background: #F2F2F2;
            border: 3px solid #D2D9CC;
            box-sizing: border-box;
            border-radius: 15px;  
        }
        
    }
    .phone_num2{
        input{
            position: absolute;
            width: 70px;
            height: 35px;
            left: 255px;
            top: 695px;
            background: #F2F2F2;
            border: 3px solid #D2D9CC;
            box-sizing: border-box;
            border-radius: 15px;    
        }

    }
    .phone_num3{
        input{
            position: absolute;
            width: 70px;
            height: 35px;
            left: 346px;
            top: 695px;
            background: #F2F2F2;
            border: 3px solid #D2D9CC;
            box-sizing: border-box;
            border-radius: 15px;     
        }
    }
    .nick_name{
        p{
            position: absolute;
            left: 60px;
            top: 725px;
            text-align: left;
            color: #4EA6A6;
            font-size: 25px; 
        }
        input{
            position: absolute;
            width: 150px;
            height: 35px;
            left: 150px;
            top: 750px;
            background: #F2F2F2;
            border: 3px solid #D2D9CC;
            box-sizing: border-box;
            border-radius: 15px;  
        }

    }
    .join{
        input{
            position: absolute;
            width: 95px;
            height: 50px;
            right: -50px;
            top: 870px;
            background: #4EA6A6;
            border-radius: 20px;
            border: 1px solid #4EA6A6;
            box-sizing: border-box;
            font-weight: 700;
            font-size: 30px;
            text-align: center;
            color: #F2F2F2;
        }
    }
`;

export default JoinContainer;
