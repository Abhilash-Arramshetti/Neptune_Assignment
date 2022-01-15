import React from "react";
import TextField from "@mui/material/TextField";

const BusdConverter = () => {
  const [busd, setBusd] = React.useState("");
  return (
    <>
      <form>
        <br />
        <TextField
          id="outlined-numnber"
          label="BUSD"
          InputLabelProps={{ shrink: true }}
          type="number"
          value={busd}
          placeholder="Provide Number here..."
          onChange={(e) => setBusd(e.target.value)}
        />
        <br />
        <br />
        <TextField
          id="outlined-numnber"
          label="NEP"
          InputLabelProps={{ shrink: true }}
          type="number"
          value={busd / 3}
        />
      </form>
    </>
  );
};

export default BusdConverter;
