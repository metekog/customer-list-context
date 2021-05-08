import {
  Avatar,
  Button,
  Container,
  Grid,
  Paper,
  Typography,
} from "@material-ui/core";
import React, { useContext, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link, useParams } from "react-router-dom";
import { CustomerContext } from "../context/context";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  avatar: {
    width: theme.spacing(20),
    height: theme.spacing(20),
    marginTop: "20px",
    marginLeft: "auto",
    marginRight: "auto",
  },
  button: {
    margin: "7px",
    float: "right",
  },
}));
const CustomerDetails = () => {
  const { getCustomer, selectedCustomer } = useContext(CustomerContext);

  const { customerId } = useParams();

  useEffect(() => {
    getCustomer(customerId);
  });

  const classes = useStyles();

  return (
    <Container fixed className={classes.root}>
      <Link to="/">
        <Button color="secondary" variant="outlined" className={classes.button}>
          Home
        </Button>
      </Link>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={3}>
          <Paper className={classes.paper}>
            <Avatar className={classes.avatar} />
            <Typography variant="h6" style={{ marginTop: "20px" }}>
              <b>Customer Name</b>
              <br /> {selectedCustomer.name}
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={9}>
          <Paper className={classes.paper}>
            <Typography style={{ marginTop: "20px" }}>
              <b>Customer Type</b>
              <br /> {selectedCustomer.type}
            </Typography>
          </Paper>
          <Paper className={classes.paper}>
            <Typography style={{ marginTop: "20px" }}>
              <b>Customer Email</b>
              <br /> {selectedCustomer.email}
            </Typography>
          </Paper>
          <Paper className={classes.paper}>
            <Typography style={{ marginTop: "20px" }}>
              <b>Customer Phone</b>
              <br /> {selectedCustomer.phone}
            </Typography>
          </Paper>
          <Paper className={classes.paper}>
            <Typography style={{ marginTop: "20px" }}>
              <b>Customer Website</b>
              <br /> {selectedCustomer.website}
            </Typography>
          </Paper>
          <Paper className={classes.paper}>
            <Typography style={{ marginTop: "20px" }}>
              <b>Customer Address</b>
              <br /> {selectedCustomer.address}
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CustomerDetails;
