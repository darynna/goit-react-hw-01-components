import styled from 'styled-components'

export const Statistic = styled.section`
width: 100%
`
export const StatisticTitle = styled.h2`
text-align: center;
color: grey;
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
        return '#519dcd';
        case '.pdf':
        return '#64b25c';
        case '.mp3':
        return '#e690d6';
        case '.psd':
            return '#df8f8f';
            default:
                return 'white'
    }
}};
`;


export const LabelText = styled.span`
color: white
`;

export const PercentageText = styled.span`
color: white;
font-size: 24px
`;