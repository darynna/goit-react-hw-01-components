import styled from 'styled-components'

export const FriendsWrap = styled.ul`
display: flex;
flex-direction: column;
align-items: center;
gap: 12px
`;

export const Friends = styled.li`
width: 200px;
height: 60px;
padding: 10px;
display: flex;
align-items: center;
gap: 12px;
border: 0.5px solid grey;
border-radius: 4px;
box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
`;

export const FriendsInfo = styled.p`
font-size: 18px
`;


export const Chip = styled.span`
width: 15px;
height:15px;
border-radius: 50%;
background-color: ${props => {
    return props.status ? props.theme.colors.online : props.theme.colors.offline
}}`