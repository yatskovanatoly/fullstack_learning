import { useEffect, useState } from "react";
import { Container, TextField, Grid } from "@mui/material";
import { Alert } from "@mui/material";
import Slide from "@mui/material/Slide";

const SearchCountries = ({
  value,
  countriesData,
  newSearch,
  setResult,
  setValue,
}) => {
  const [warning, setWarning] = useState("");
  const handleChange = (event) => {
    const notification = (slideIn, message) => (
      <Slide
        sx={{ marginBottom: "20px" }}
        in={slideIn}
        mountOnEnter
        unmountOnExit
      >
        <Alert severity="info">{message}</Alert>
      </Slide>
    );
    const invalidCharacters = /[^\sa-z]/gi;
    if (invalidCharacters.test(event.target.value)) {
      setWarning(notification(true, "Only latin symbols allowed"));
      setTimeout(() => {
        setWarning(notification(false, "See ya!"));
      }, 3000);
    }
    setValue(event.target.value.replace(invalidCharacters, ""));
  };
  useEffect(() => {
    if (value) {
      setResult(
        countriesData.filter((country) => country.name.common.match(newSearch))
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  let disabled = true;
  let label = "loading countries...";
  if (countriesData.length > 1) {
    disabled = false;
    label = "find countries";
  }

  return (
    <Grid
      container
      spacing={0}
      direction="row"
      alignItems="center"
      justifyContent="center"
    >
      <TextField
        disabled={disabled}
        label={label}
        autoComplete="off"
        autoCorrect="off"
        className="textField"
        id="outlined-basic"
        variant="outlined"
        value={value}
        onChange={handleChange}
        sx={{ marginBottom: "20px", width: "300px" }}
      />
      <Container>{warning}</Container>
    </Grid>
  );
};

export default SearchCountries;
