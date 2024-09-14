import { useContext, useMemo } from "react";
import Product from "./product/Product";
import { useStyles } from "./Products.style";
import * as actionTypes from "../../contexts/actionTypes";
import AppContext from "../../contexts/context";

const Products = () => {
  const classes = useStyles();
  const {
    state: { products, searchValue },
    dispatch,
  } = useContext(AppContext);

  const onDelete = (e, removedId) => {
    e.stopPropagation();
    dispatch({ type: actionTypes.DELETE_ITEM, payload: removedId });
  };

  const searchProducts = useMemo(
    () =>
      products.filter(({ name }) =>
        searchValue
          ? name.toUpperCase().includes(searchValue.toUpperCase())
          : name
      ),
    [searchValue, products]
  );

  return (
    <div className={classes.container}>
      {searchProducts.map(
        ({ id, image, name, price, description, creationDate, discount }) => (
          <Product
            key={id}
            id={id}
            imgSrc={image}
            name={name}
            description={description}
            price={price}
            creationDate={creationDate}
            onDelete={onDelete}
            discount={discount}
          />
        )
      )}
    </div>
  );
};

export default Products;
