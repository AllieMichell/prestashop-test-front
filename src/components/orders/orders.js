import React from 'react';
import axios from 'axios';

import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import './orders.css';

const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);
const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
});

class PersonList extends React.Component {
    state = {
      orders: []
    }

    componentDidMount() {
      fetch('http://localhost:3000/presta-shop/orders/ordersList')
        .then(response => response.json())
        .then((json) => {
          console.log(json);
          this.setState({
            orders: json
          });
        });
    }

    
    render() {
    
      return (
    //     <ul>
    //     { this.state.persons.map(person => <li>{person.id}</li>)}
    //   </ul>
        <TableContainer component={Paper}>
            <Table  aria-label="simple table">
                <TableHead>
                    <TableRow>
                    <StyledTableCell>ID </StyledTableCell>
                    <StyledTableCell align="right">Reference</StyledTableCell>
                    <StyledTableCell align="right">Producs</StyledTableCell>
                    <StyledTableCell align="right">Customer</StyledTableCell>
                    <StyledTableCell align="right">Total</StyledTableCell>
                    <StyledTableCell align="right">Payment</StyledTableCell>
                    <StyledTableCell align="right">Date</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                { this.state.orders.map(order => 
                    <StyledTableRow key={order.id}>
                        <StyledTableCell component="th" scope="row">{order.id}</StyledTableCell>
                        <StyledTableCell align="right">{order.reference}</StyledTableCell>
                        <StyledTableCell align="right">{order.associations.order_rows.length}</StyledTableCell>
                        <StyledTableCell align="right">{order.id_customer}</StyledTableCell>
                        <StyledTableCell align="right">€ {order.total_paid}</StyledTableCell>
                        <StyledTableCell align="right">{order.payment}</StyledTableCell>
                        <StyledTableCell align="right">{order.date_add}</StyledTableCell>
                    </StyledTableRow>
                )}
                </TableBody>
            </Table>
        </TableContainer>
      );
    }
}

export default PersonList;