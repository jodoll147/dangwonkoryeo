import styled from "styled-components";
import React from "react";
import FindContainer from "./styled/FindContainer";

const Find = () => {

    const Table = styled.table`
        table{
            position: relative;
            top: 350px;
            left: 100px;
            width: 1000px;  
        }
    `;
    
    const Id = styled.div`
        background: #F2F2F2;
        border-radius: 20px;
        width: 190px;
        height: 50px;  
        font-family: 'NanumGothic';
        font-style: normal;
        font-weight: 700;
        font-size: 30px;
        letter-spacing: -0.333333px;
        color: #594031;
        text-align: center;
    `;

    const Pwd = styled.div`
        background: #F2F2F2;
        border-radius: 20px;
        width: 220px;
        height: 50px;
        font-family: 'NanumGothic';
        font-style: normal;
        font-weight: 700;
        font-size: 30px;
        letter-spacing: -0.333333px;
        color: #594031;
        text-align: center;
        .id{
            p{
                position: absolute;
                top: 235px;
                font-weight: 700;
                font-size: 25px;
                color: #4EA6A6;
            }
            input{
                position: absolute;
                width: 150px;
                height: 35px;
                top: 260px;
                text-align: left;
                background: #F2F2F2;
                border: 3px solid #D2D9CC;
                box-sizing: border-box;
                border-radius: 15px;
                font-family: 'NanumGothic';
            }
        }
    `

    const layout = (
        <FindContainer>
            <section>
                    <div className="name">
                    <p>이름</p>
                    <input type={"text"}/>
                    </div>
                    <div className="birthday">
                        <p>생년월일</p>
                        <input type={"date"}/>
                    </div>
                    <div className="phonenum_1">
                        <p>전화번호</p>
                        <input type={"text"}/>
                    </div>
                    <div className="phonenum_2">
                        <input type={"text"}/>
                    </div>
                    <div className="phonenum_3">
                        <input type={"text"}/>
                    </div>
                    <div className="find_btn">
                        <input type={"button"} value="찾기"/>
                    </div>
                </section>
        </FindContainer>
   
    );


    return(
            <div align="center">
                <Table>
                    <table>
                        <tr>
                            <td>
                                <Id>
                                    <p>아이디 찾기</p>
                                    {layout}
                                </Id>
                            </td>
                            <td>
                                <Pwd>
                                    <p>비밀번호 찾기</p>
                                    {layout}
                                    <div className="id">
                                        <p>아이디</p>
                                        <input type={"text"}/>
                                    </div>
                                </Pwd>
                            </td>
                        </tr>
                    </table>
                </Table>

            </div>
    );
}

export default Find;