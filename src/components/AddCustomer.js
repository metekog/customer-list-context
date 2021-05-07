import React, { useContext, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  TextField,
  Typography,
  Grid,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";
import { CustomerContext } from "../context/context";
import { nanoid } from "nanoid";
import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles({
  radioGroup: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "-10px",
    flexGrow: 1,
  },
  button: {
    marginTop: "20px",
  },
  icon: {
    float: "right",
    cursor: "pointer",
  },
});

const AddCustomer = ({ setOpen }) => {
  const initialState = {
    name: "",
    type: "Gercek",
    address: "",
    phone: "",
    email: "",
    website: "",
  };

  const classes = useStyles();

  const [formData, setFormData] = useState(initialState);
  const { addCustomer } = useContext(CustomerContext);

  const createCustomer = (e) => {
    e.preventDefault();

    const customer = {
      ...formData,
      name: formData.name,
      address: formData.address,
      phone: formData.phone,
      email: formData.email,
      website: formData.website,
      id: nanoid(),
    };
    addCustomer(customer);
    setFormData(initialState);
    setOpen(false);
  };

  return (
    <Grid container spacing={2} style={{ padding: "20px" }}>
      <Grid item xs={12}>
        <CloseIcon className={classes.icon} onClick={() => setOpen(false)} />
        <Typography align="center" variant="subtitle1" gutterBottom>
          Create New Customer
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <FormControl fullWidth>
          <InputLabel> Customer Type</InputLabel>
          <Select
            value={formData.type}
            onChange={(e) => setFormData({ ...formData, type: e.target.value })}
          >
            <MenuItem value="Primary">Primary</MenuItem>
            <MenuItem value="Secondary">Secondary</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <TextField
          type="text"
          label="Name"
          variant="outlined"
          fullWidth
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
      </Grid>

      <Grid item xs={12}>
        <TextField
          type="number"
          label="Phone"
          variant="outlined"
          fullWidth
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          type="email"
          label="E-Mail"
          variant="outlined"
          fullWidth
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          type="text"
          label="Website"
          variant="outlined"
          fullWidth
          value={formData.website}
          onChange={(e) =>
            setFormData({ ...formData, website: e.target.value })
          }
        />
      </Grid>

      <Grid item xs={12}>
        <TextField
          type="text"
          label="Address"
          variant="outlined"
          fullWidth
          value={formData.address}
          onChange={(e) =>
            setFormData({ ...formData, address: e.target.value })
          }
        />
      </Grid>

      <Button
        className={classes.button}
        variant="outlined"
        color="secondary"
        fullWidth
        onClick={createCustomer}
      >
        Create
      </Button>
    </Grid>
  );
};

export default AddCustomer;
