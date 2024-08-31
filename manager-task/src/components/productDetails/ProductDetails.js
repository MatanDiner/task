import { Button, Card, TextareaAutosize, TextField } from "@mui/material";
import { useStyles } from "./ProductDetails.style";
import { useEffect, useState } from "react";
import { checkError } from "../../utils";
import {
  PRODUCT_VALIDATIONS_CONFIG,
  PRODUCT_ERROR_MESSAGE_CONFIG,
} from "../../constants";

const ProductDetails = ({ selectedProduct, onSave = () => {} }) => {
  const classes = useStyles();
  const [product, setProduct] = useState({});
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (selectedProduct) setProduct(selectedProduct);
  }, [selectedProduct]);

  const onChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const checkValidations = () => {
    let errors = {};
    let isValid = true;
    Object.entries(PRODUCT_VALIDATIONS_CONFIG).map(([field, validations]) => {
      const error = checkError(validations, product[field]);
      errors = { ...errors, [field]: error };
      isValid = isValid && !error;
    });
    setErrors(errors);
    if (isValid) {
      onSave(product);
    }
  };

  return (
    <Card className={classes.container}>
      {product.image && <img src={product.image} className={classes.img} />}
      <TextField
        label={"name"}
        name={"name"}
        value={product.name}
        onChange={onChange}
        error={!!errors.name}
        helperText={PRODUCT_ERROR_MESSAGE_CONFIG.name[errors.name] ?? ""}
        InputLabelProps={{ shrink: true }}
      />
      <TextareaAutosize
        minRows={5}
        maxRows={5}
        name={"description"}
        label={"description"}
        value={product.description}
        onChange={onChange}
        error={!!errors.description}
        helperText={
          PRODUCT_ERROR_MESSAGE_CONFIG.description[errors.description] ?? ""
        }
      />
      <TextField
        label={"price"}
        name={"price"}
        value={product.price}
        onChange={onChange}
        InputLabelProps={{ shrink: true }}
        error={!!errors.price}
        helperText={PRODUCT_ERROR_MESSAGE_CONFIG.price[errors.price] ?? ""}
      />
      <div className={classes.buttonContainer}>
        <Button className={classes.button} onClick={checkValidations}>
          Save
        </Button>
      </div>
    </Card>
  );
};

export default ProductDetails;
