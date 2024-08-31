import React, { useEffect, useState } from "react";
import { getProducts } from "../../requests/requests";
import Layout from "../../components/layout/Layout";
import Products from "../../components/products/Products";
import ProductDetails from "../../components/productDetails/ProductDetails";
import { useStyles } from "./Home.style";
import { Button, Dialog } from "@mui/material";
import NoImage from "../../assets/images/no-image.jpg";

const Home = () => {
  const classes = useStyles();
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState({});
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const getProductsList = async () => {
      const products = await getProducts();
      setProducts(products);
      setSelectedProduct(products[0]);
    };
    getProductsList();
  }, []);

  useEffect(() => {
    console.log({ products });
  }, [products]);

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
      };
      setIsOpen(false);
    }
    setProducts(productsCopy);
  };

  return (
    <Layout>
      <div>
        <Button onClick={() => setIsOpen(true)}>Add</Button>
      </div>
      <div className={classes.content}>
        <Products
          products={products}
          setProducts={setProducts}
          setSelectedProduct={setSelectedProduct}
        />
        <ProductDetails selectedProduct={selectedProduct} onSave={onSave} />
      </div>
      <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
        <ProductDetails onSave={onSave} />
      </Dialog>
    </Layout>
  );
};

export default Home;
