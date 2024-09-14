import { useCallback, useEffect, useState, useContext } from "react";
import { useStyles } from "./Filters.style";
import * as actionTypes from "../../contexts/actionTypes";
import AppContext from "../../contexts/context";
import { SORT_BY } from "../../constants";
import Search from "../search/Search";
import CustomInput from "../customInput/CustomInput";
import { Button } from "@mui/material";
import { sortItems } from "../../utils";

const Filters = ({ onAddItem }) => {
  const classes = useStyles();
  const {
    state: { products = [], sortByValue },
    dispatch,
  } = useContext(AppContext);

  useEffect(() => {
    if (products.length) sortbyHandler(products);
  }, [sortByValue]);

  const sortbyHandler = (products) => {
    let productsCopy = [...products];
    productsCopy = sortItems(productsCopy, sortByValue);
    dispatch({ type: actionTypes.SAVE_PRODUCTS, payload: productsCopy });
  };

  const onChangeSortBy = (e) => {
    const value = e.target.value;
    dispatch({ type: actionTypes.UPDATE_SORT_BY_VALUE, payload: value });
  };

  return (
    <div className={classes.filters}>
      <Button className={classes.addBtn} onClick={onAddItem}>
        Add
      </Button>
      <Search />
      <CustomInput
        isSelect={true}
        label="Sort by"
        value={sortByValue}
        onChange={onChangeSortBy}
        options={[
          { value: SORT_BY.name.value, label: SORT_BY.name.label },
          { value: SORT_BY.date.value, label: SORT_BY.date.label },
        ]}
      />
    </div>
  );
};

export default Filters;
