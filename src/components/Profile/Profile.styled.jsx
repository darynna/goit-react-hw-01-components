import styled from 'styled-components'


export const ProfileBox = styled.div`
width: 100%;
`;


export const DescriptionBox = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 12px
`;

export const Paragraph = styled.p`
color: grey;
`;


export const ParagraphName = styled.p`
font-size: 24px;
`


export const StatsInfo = styled.ul`
width: 100%;
margin-top: 32px;
margin-bottom: 0;
padding: 0;
display: flex;
justify-content: space-around;
background-color: #d5dadd;
`;

export const StatsInfoItems = styled.li`
padding: 0;
width: 100%;
height: 98px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
border: 0.5px solid grey;
`;

export const StatsText = styled.span`
font-size: 18px;
font-weight: 700;
`;

export const StatsTitle = styled.span`
font-size: 18px;
`