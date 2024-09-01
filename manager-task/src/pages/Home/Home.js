import React, { useEffect, useState } from "react";
import { getProducts } from "../../requests/requests";
import Layout from "../../components/layout/Layout";
import Products from "../../components/products/Products";
import ProductDetails from "../../components/productDetails/ProductDetails";
import { useStyles } from "./Home.style";
import { Button, Dialog } from "@mui/material";
import NoImage from "../../assets/images/no-image.jpg";
import Search from "../../components/search/Search";
import CustomInput from "../../components/customInput/CustomInput";
import { SORT_BY, PRODUCTS_STORAGE_KEY } from "../../constants";
import { sortBy } from "../../utils";

const Home = () => {
  const classes = useStyles();
  const [products, setProducts] = useState([]);
  const [initialProducts, setInitialProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const [sortByValue, setSortByValue] = useState();

  useEffect(() => {
    const getProductsList = async () => {
      const products = await getProducts();
      setProducts(products);
      setInitialProducts(products);
      setSelectedProduct(products[0]);
      setSortByValue(SORT_BY.name.value);
    };
    let storageProducts = localStorage.getItem(PRODUCTS_STORAGE_KEY);
    if (storageProducts) {
      storageProducts = JSON.parse(storageProducts);
      setProducts(storageProducts);
      setInitialProducts(storageProducts);
      setSelectedProduct(storageProducts[0]);
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
      setProducts(productsCopy);
    }
  };

  const onSave = (product) => {
    const productsCopy = [...products];
    const newProductIndex = productsCopy.findIndex(
      ({ id }) => id === product.id
    );
    if (newProductIndex !== -1) {
      productsCopy[newProductIndex] = product;
    } else {
      productsCopy[productsCopy.length] = {
        ...product,
        id: new Date().getTime(),
        image: NoImage,
        creationDate: new Date().toLocaleDateString("en-GB"),
      };
      setIsOpen(false);
    }
    setProducts(productsCopy);
    localStorage.setItem(PRODUCTS_STORAGE_KEY, JSON.stringify(productsCopy));
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
    console.log({ value });
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
        <Products
          products={products}
          setProducts={setProducts}
          setSelectedProduct={setSelectedProduct}
        />
        <ProductDetails selectedProduct={selectedProduct} onSave={onSave} />
      </div>
      <Dialog
        classes={{ paper: classes.modal }}
        open={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <ProductDetails onSave={onSave} />
      </Dialog>
    </Layout>
  );
};

export default Home;
