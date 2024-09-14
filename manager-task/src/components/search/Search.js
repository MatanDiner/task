import React, { useState, useMemo, useEffect, useContext } from "react";
import { FormControl, InputAdornment, TextField } from "@mui/material";
import { makeStyles, createStyles } from "@mui/styles";
import SearchIcon from "@material-ui/icons/Search";
import ClearIcon from "@material-ui/icons/Clear";
import debouce from "lodash.debounce";
import AppContext from "../../contexts/context";
import * as actionTypes from "../../contexts/actionTypes";

const useStyles = makeStyles(() => {
  return createStyles({
    search: {
      margin: "0",
    },
  });
});

const Search = ({ searchHandler }) => {
  const { search } = useStyles();
  const { dispatch } = useContext(AppContext);
  // const [searchTerm, setSearchTerm] = useState();

  // useEffect(() => {
  //   if (typeof searchTerm === "string") searchHandler(searchTerm);
  // }, [searchTerm]);

  const handleChange = (e) => {
    dispatch({
      type: actionTypes.UPDATE_SEARCH_VALUE,
      payload: e.target.value,
    });
    //setSearchTerm(e.target.value);
  };

  const debouncedResults = useMemo(() => {
    return debouce(handleChange, 300);
  }, []);

  useEffect(() => {
    return () => {
      debouncedResults.cancel();
    };
  });

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
