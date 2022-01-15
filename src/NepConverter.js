import React from "react";
import TextField from "@mui/material/TextField";
const NepConverter = () => {
  const [nep, setNep] = React.useState("");
  return (
    <>
      <form>
        <br />
        <TextField
          id="outlined-numnber"
          label="NEP"
          InputLabelProps={{ shrink: true }}
          type="number"
          value={nep}
          placeholder="Provide Number here..."
          onChange={(e) => setNep(e.target.value)}
        />
        <br />
        <br />
        <TextField
          id="outlined-numnber"
          label="BUSD"
          InputLabelProps={{ shrink: true }}
          type="number"
          value={3 * nep}
        />
      </form>
    </>
  );
};

export default NepConverter;
