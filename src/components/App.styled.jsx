import styled from 'styled-components'

export const AppWraper = styled.div`
padding: 20px 0px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-end;
margin: 80px auto 0 auto;
width: 300px;
background-color:  ${(props) => props.theme.colors.background};
box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
border-radius: 8px
`;
