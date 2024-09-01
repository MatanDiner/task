import { TextField } from "@mui/material";
import { makeStyles, createStyles } from "@mui/styles";

const useStyles = makeStyles({
  input: {
    minWidth: "100px !important",
  },
});

const CustomInput = ({
  label = "",
  name = "",
  value = "",
  onChange = () => {},
  error = false,
  errorMessage = "",
  isSelect = false,
  options = [],
  InputProps = {},
}) => {
  const classes = useStyles();
  return (
    <TextField
      className={classes.input}
      label={label}
      name={name}
      value={value}
      onChange={onChange}
      error={error}
      helperText={errorMessage}
      InputLabelProps={{ shrink: true }}
      InputProps={InputProps}
      select={isSelect}
      slotProps={{
        select: {
          native: true,
        },
      }}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </TextField>
  );
};

export default CustomInput;
