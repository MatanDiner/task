import React, { useContext, useEffect, useState } from "react";
import { getProducts } from "../../requests/requests";
import Layout from "../../components/layout/Layout";
import Products from "../../components/products/Products";
import ProductDetails from "../../components/productDetails/ProductDetails";
import { useStyles } from "./Home.style";
import { Button, Dialog } from "@mui/material";
import Search from "../../components/search/Search";
import CustomInput from "../../components/customInput/CustomInput";
import { SORT_BY, PRODUCTS_STORAGE_KEY } from "../../constants";
import { sortBy } from "../../utils";
import * as actionTypes from "../../contexts/actionTypes";
import AppContext from "../../contexts/context";

const Home = () => {
  const classes = useStyles();
  const {
    state: { products = [], selectedProduct = {} },
    dispatch,
  } = useContext(AppContext);
  const [initialProducts, setInitialProducts] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [sortByValue, setSortByValue] = useState();

  useEffect(() => {
    const getProductsList = async () => {
      const products = await getProducts();
      dispatch({ type: actionTypes.SAVE_PRODUCTS, payload: products });
      setInitialProducts(products);
      setSortByValue(SORT_BY.name.value);
    };
    let storageProducts = localStorage.getItem(PRODUCTS_STORAGE_KEY);
    if (storageProducts) {
      storageProducts = JSON.parse(storageProducts);
      dispatch({ type: actionTypes.SAVE_PRODUCTS, payload: storageProducts });
      setInitialProducts(storageProducts);
      setSortByValue(SORT_BY.name.value);
    } else {
      getProductsList();
    }
  }, []);

  useEffect(() => {
    if (products.length) sortbyHandler();
  }, [sortByValue]);

  const sortbyHandler = (searchProducts) => {
    let productsCopy = searchProducts ? [...searchProducts] : [...products];
    if (productsCopy.length) {
      if (sortByValue === SORT_BY.name.value) {
        productsCopy = sortBy(productsCopy, "name");
      } else {
        productsCopy = productsCopy.sort(
          (a, b) =>
            new Date(a.creationDate).getTime() -
            new Date(b.creationDate).getTime()
        );
      }
      dispatch({ type: actionTypes.SAVE_PRODUCTS, payload: productsCopy });
    }
  };

  const searchHandler = (value) => {
    let searchedProducts;
    if (value === "") {
      searchedProducts = initialProducts;
    } else {
      searchedProducts = products.filter(({ name }) =>
        name.toUpperCase().includes(value.toUpperCase())
      );
    }
    sortbyHandler(searchedProducts);
  };

  const onChangeSortBy = (e) => {
    const value = e.target.value;
    setSortByValue(value);
  };

  const onUpdateHandler = (product) => {
    dispatch({ type: actionTypes.UPDATE_ITEM, payload: product });
  };

  const onAddHandler = (product) => {
    dispatch({ type: actionTypes.ADD_ITEM, payload: product });
    setIsOpen(false);
  };

  return (
    <Layout>
      <div className={classes.filters}>
        <Button className={classes.addBtn} onClick={() => setIsOpen(true)}>
          Add
        </Button>
        <Search searchHandler={searchHandler} />
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
