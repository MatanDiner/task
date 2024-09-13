import * as actioTypes from "./actionTypes";
import { PRODUCTS_STORAGE_KEY } from "../constants";
import NoImage from "../assets/images/no-image.jpg";
import { saveInLocalStorage } from "../utils";

export const reducer = (state, action) => {
  switch (action.type) {
    case actioTypes.ADD_ITEM:
      const productsCopy = [...state.products];
      productsCopy[productsCopy.length] = {
        ...action.payload,
        id: new Date().getTime(),
        image: NoImage,
        creationDate: new Date().toLocaleDateString("en-GB"),
      };
      saveInLocalStorage(PRODUCTS_STORAGE_KEY, productsCopy);
      return {
        ...state,
        products: productsCopy,
      };
    case actioTypes.DELETE_ITEM:
      const productsState = [...state.products];
      const newProducts = productsState.filter(
        ({ id }) => id !== action.payload
      );
      saveInLocalStorage(PRODUCTS_STORAGE_KEY, newProducts);
      const newState = {
        ...state,
        products: newProducts,
      };
      if (newProducts.length) newState.selectedProduct = newProducts[0];
      return newState;
    case actioTypes.UPDATE_ITEM:
      const product = action.payload;
      const productsStateCopy = [...state.products];
      const newProductIndex = productsStateCopy.findIndex(
        ({ id }) => id === product.id
      );
      if (newProductIndex !== -1) {
        productsStateCopy[newProductIndex] = product;
      }
      saveInLocalStorage(PRODUCTS_STORAGE_KEY, productsStateCopy);
      return {
        ...state,
        products: productsStateCopy,
      };
    case actioTypes.SAVE_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        selectedProduct: action.payload[0],
      };
    case actioTypes.SET_SELECTED_ITEM:
      return {
        ...state,
        selectedProduct: action.payload,
      };
    default:
      break;
  }
};
