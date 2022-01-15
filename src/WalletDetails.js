import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const WalletDetails = () => {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <h1>WalletDetails</h1>
      Wallet not Connected. Please click the 'Connect ' button
      <br />
      <br />
      <div>
        <div>
          <Button variant="outlined" onClick={handleClickOpen}>
            Connect
          </Button>
          <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Wallet Details</DialogTitle>
            <DialogContent>
              <DialogContentText></DialogContentText>
              <TextField
                margin="dense"
                label="Account ID"
                type="name"
                value="0x20....2116"
              />
              <TextField
                margin="dense"
                label="Chain ID"
                type="number"
                value="97"
              />
              <TextField
                margin="dense"
                label="Balance"
                type="name"
                value="$ 298"
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
            </DialogActions>
          </Dialog>
        </div>
      </div>
    </>
  );
};

export default WalletDetails;
