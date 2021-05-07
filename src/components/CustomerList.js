import React, { useContext, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  Container,
  Drawer,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import { CustomerContext } from "../context/context";
import AddCustomer from "./AddCustomer";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  button: {
    margin: "10px",
    float: "right",
  },
});

const CustomerList = () => {
  const classes = useStyles();
  const { deleteCustomer, customers } = useContext(CustomerContext);
  const [open, setOpen] = useState(false);

  const handleDrawer = () => {
    setOpen(true);
  };

  return (
    <Container fixed>
      <Button
        color="secondary"
        variant="outlined"
        className={classes.button}
        onClick={handleDrawer}
      >
        Create
      </Button>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>
                <b>Customer Name</b>
              </TableCell>
              <TableCell>
                <b>Type</b>
              </TableCell>
              <TableCell>
                <b>Address</b>
              </TableCell>
              <TableCell>
                <b>Phone</b>
              </TableCell>
              <TableCell>
                <b>Email</b>
              </TableCell>
              <TableCell>
                <b>Website</b>
              </TableCell>
            </TableRow>
          </TableHead>
          {customers.map((customer) => (
            <TableBody key={customer.id}>
              <TableCell>
                <Link to={`/customer/${customer.id}`}>{customer.name}</Link>
              </TableCell>

              <TableCell>{customer.type}</TableCell>
              <TableCell>{customer.address}</TableCell>
              <TableCell>{customer.phone}</TableCell>
              <TableCell>{customer.email}</TableCell>
              <TableCell>{customer.website}</TableCell>
              {/* <Button
                className={classes.button}
                variant="outlined"
                color="primary"
                
              >
                Update
              </Button> */}
              <Button
                className={classes.button}
                variant="outlined"
                color="primary"
                onClick={() => deleteCustomer(customer.id)}
              >
                Delete
              </Button>
            </TableBody>
          ))}
        </Table>
      </TableContainer>
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <div style={{ width: "500px" }}>
          <AddCustomer setOpen={setOpen} />
        </div>
      </Drawer>
    </Container>
  );
};

export default CustomerList;
