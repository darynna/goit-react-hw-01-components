import styled from 'styled-components'

export const Table = styled.table`
width: 100%;
text-align: center;
font-size: 12px;
border-collapse: collapse;
thead {
    border-top: 1px solid;
    font-weight: 700;

     text-transform: uppercase;
}

th {

    border-top: 0.5px solid;
}

td {

    border-top: 0.5px solid;

}

`;

export const Thead = styled.thead`
height:30px;
background-color: #9f94f0;
color: white;
`

export const TableRow = styled.tr`
height: 30px;
background-color: ${props => getBackgroundColor(props.type, props.theme)}
`;

function getBackgroundColor(type, theme){
    switch(type) {

        case "deposit":
  
         return theme.colors.deposit;
  
         case "withdrawal":
   
         return theme.colors.withdrawal;
  
         case "payment":
  
         return theme.colors.payment;
  
         case "invoice":
  
         return theme.colors.invoice;
  
         default:
  
         return "#fff";
      }
    
}