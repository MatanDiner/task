import React, { useEffect, useState } from "react";
import { getProducts } from "../../requests/requests";
import Layout from "../../components/layout/Layout";
import Products from "../../components/products/Products";
const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProductsList = async () => {
      const products = await getProducts();
      setProducts(products.data);
    };
    getProductsList();
  }, []);

  useEffect(() => {
    console.log({ products });
  }, [products]);

  return (
    <Layout>
      <Products products={products} />
    </Layout>
  );
};

export default Home;
