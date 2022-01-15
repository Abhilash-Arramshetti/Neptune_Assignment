import React, { useState } from "react";
import BusdConverter from "./BusdConverter";
import NepConverter from "./NepConverter";
import WalletDetails from "./WalletDetails";
import Button from "@mui/material/Button";

const Convert = () => {
  const [a, setA] = useState(null);
  const [b, setB] = useState(false);
  return (
    <>
      <h1>Crypto Converter</h1>
      <Button variant="contained" onClick={() => setA(true)}>
        NEP to BUSD
      </Button>{" "}
      &nbsp;
      <Button variant="contained" onClick={() => setA(false)}>
        BUSD to NEP
      </Button>
      {a ? <NepConverter /> : <BusdConverter />} <br />
      <Button variant="contained" color="success" onClick={() => setB(!b)}>
        Check Wallet Details
      </Button>
      &nbsp;
      {b ? <WalletDetails /> : ""}
    </>
  );
};

export default Convert;
