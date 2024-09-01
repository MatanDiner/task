import React, { useState, useMemo, useEffect } from "react";
import { FormControl, InputAdornment, TextField } from "@mui/material";
import { makeStyles, createStyles } from "@mui/styles";
import SearchIcon from "@material-ui/icons/Search";
import ClearIcon from "@material-ui/icons/Clear";
import debouce from "lodash.debounce";

const useStyles = makeStyles(() => {
  return createStyles({
    search: {
      margin: "0",
    },
  });
});

const Search = ({ searchHandler }) => {
  const { search } = useStyles();
  const [searchTerm, setSearchTerm] = useState();

  useEffect(() => {
    if (typeof searchTerm === "string") searchHandler(searchTerm);
  }, [searchTerm]);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const debouncedResults = useMemo(() => {
    return debouce(handleChange, 300);
  }, []);

  useEffect(() => {
    return () => {
      debouncedResults.cancel();
    };
  });

  const onSearchTypeEnd = (value) => {
    let timeoutId;
    return function () {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => searchHandler(value), 2000);
    };
  };

  return (
    <div id="app">
      <FormControl className={search}>
        <TextField
          size="small"
          variant="outlined"
          onChange={debouncedResults}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </FormControl>
    </div>
  );
};

export default Search;
