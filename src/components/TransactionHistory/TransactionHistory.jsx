import {Table, TableRow, Thead} from "./TransactionHistory.styled"

export const TransactionHistory = ({transactions}) => {
    return <Table>
    <Thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
    </Thead>
  
    <tbody>
    {transactions.map(({type, amount, currency, id}) => (
       <TableRow key={id} type={type}>
       <td>{type}</td>
       <td>{amount}</td>
       <td>{currency}</td>
     </TableRow>
    ))} 
    </tbody>
  </Table>
}