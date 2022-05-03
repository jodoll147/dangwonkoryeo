import styeld from 'styled-components';

const Button = styeld.button`
    position: relative;
    top: 175px;
    left: 230px;
    width: 100px;
    height: 50px;
    font-weight: 800;
    font-size: 30px;
    color: #F2F2F2;
    background: #D2D9CC;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border: #D2D9CC;
    border-radius: 10px;
    text-align: center;
    :not(:disabled) {
        cursor: pointer;
      }
`;

const NextButton = () => {
  return (
    <div>
      <Button>다음</Button>
    </div>
  );
};

export default NextButton;
