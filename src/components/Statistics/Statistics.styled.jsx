import styled from 'styled-components'

export const Statistic = styled.section`
width: 100%
`
export const StatisticTitle = styled.h2`
text-align: center;
color: ${(props) => props.theme.colors.border};
text-transform: uppercase;
`

export const StatisticInfo = styled.ul`
padding: 0;
width: 100%;
display: flex;
justify-content: space-between
`;

export const Items = styled.li`
display: flex;
width: 100%;
height: 60px;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: ${props => {
    switch(props.label){
        case '.docx':
        return props.theme.colors.statisticBlue;
        case '.pdf':
        return props.theme.colors.statisticGreen;
        case '.mp3':
        return props.theme.colors.statisticPink;
        case '.psd':
            return props.theme.colors.statisticRed;
            default:
                return 'white'
    }
}};
`;


export const LabelText = styled.span`
color: ${(props) => props.theme.colors.background}
`;

export const PercentageText = styled.span`
color: ${(props) => props.theme.colors.background};
font-size: 24px
`;