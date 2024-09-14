import React, { useCallback, useContext, useEffect, useState } from "react";
import { getProducts } from "../../requests/requests";
import Layout from "../../components/layout/Layout";
import Products from "../../components/products/Products";
import ProductDetails from "../../components/productDetails/ProductDetails";
import { useStyles } from "./Home.style";
import { Button, Dialog } from "@mui/material";
import Search from "../../components/search/Search";
import CustomInput from "../../components/customInput/CustomInput";
import { SORT_BY, PRODUCTS_STORAGE_KEY } from "../../constants";
import { sortItems } from "../../utils";
import * as actionTypes from "../../contexts/actionTypes";
import AppContext from "../../contexts/context";
import Filters from "../../components/filters/Filters";

const Home = () => {
  const classes = useStyles();
  const {
    state: { products = [], selectedProduct = {}, sortByValue },
    dispatch,
  } = useContext(AppContext);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const getProductsList = async () => {
      const products = await getProducts();
      const sortedProducts = sortItems(products, sortByValue);
      dispatch({ type: actionTypes.SAVE_PRODUCTS, payload: sortedProducts });
    };
    let storageProducts = null; //localStorage.getItem(PRODUCTS_STORAGE_KEY);
    if (storageProducts) {
      storageProducts = JSON.parse(storageProducts);
      const sortedProducts = sortItems(products, sortByValue);
      dispatch({ type: actionTypes.SAVE_PRODUCTS, payload: sortedProducts });
    } else {
      getProductsList();
    }
  }, []);

  const onUpdateHandler = useCallback(
    (product) => {
      dispatch({ type: actionTypes.UPDATE_ITEM, payload: product });
    },
    [dispatch]
  );

  const onAddHandler = useCallback(
    (product) => {
      dispatch({ type: actionTypes.ADD_ITEM, payload: product });
      setIsOpen(false);
    },
    [dispatch, setIsOpen]
  );

  return (
    <Layout>
      <Filters onAddItem={() => setIsOpen(true)} />
      <div className={classes.content}>
        <Products />
        <ProductDetails
          onSave={onUpdateHandler}
          selectedProduct={selectedProduct}
        />
      </div>
      <Dialog
        classes={{ paper: classes.modal }}
        open={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <ProductDetails onSave={onAddHandler} />
      </Dialog>
    </Layout>
  );
};

export default Home;
