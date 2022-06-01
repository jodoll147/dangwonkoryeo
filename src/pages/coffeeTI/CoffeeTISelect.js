import { useState } from 'react';
import styled from 'styled-components';

const Select = styled.div`
  .box {
    position: relative;
    display: flex;
    margin-top: 100px;
    margin-left: 190px;
    .weak {
      position: relative;
      margin-top: 10px;
      font-family: 'NanumGothic';
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 16px;
      color: black;
    }

    label {
      position: relative;
      input {
        position: relative;
        margin-left: 38px;
        margin-right: 38px;
        width: 30px;
        height: 30px;
        border: 3px solid black;
      }
    }

    .strong {
      position: relative;
      margin-top: 10px;
      font-family: 'NanumGothic';
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 16px;
      color: black;
    }
  }
`;

const CoffeeTISelect = () => {
  const [selectValue, setSelectValue] = useState(null);
  const value = [1, 2, 3, 4, 5];

  console.log(selectValue);
  return (
    <label onChange={e => setSelectValue(e.target.value)}>
      {value.map(v => (
        <input type={'radio'} name='check' value={v} />
      ))}
    </label>
  );
};

export default CoffeeTISelect;
