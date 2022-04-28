import styled from 'styled-components';

const ResponsiveBlock = styled.div`
    width: 940px;
    margin: 0 auto;

    @media (max-width: 940px){
        width: 100%;
    }
`;

const Responsive = ({children, ...rest}) => {
    return (
        <ResponsiveBlock {...rest}>
            {children}
        </ResponsiveBlock>
    );
};

export default Responsive;