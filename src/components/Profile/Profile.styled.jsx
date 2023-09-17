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
color: ${props => props.theme.colors.border};
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
background-color: ${props => props.theme.colors.secondaryBackground};
`;

export const StatsInfoItems = styled.li`
padding: 0;
width: 100%;
height: 98px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
border: 0.5px solid ${props => props.theme.colors.border};
`;

export const StatsText = styled.span`
font-size: 18px;
font-weight: 700;
`;

export const StatsTitle = styled.span`
font-size: 18px;
`