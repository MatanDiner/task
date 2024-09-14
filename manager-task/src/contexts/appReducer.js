import * as actioTypes from "./actionTypes";
import { PRODUCTS_STORAGE_KEY } from "../constants";
import NoImage from "../assets/images/no-image.jpg";
import { saveInLocalStorage } from "../utils";
import { sortItems } from "../utils";

export const reducer = (state, action) => {
  switch (action.type) {
    case actioTypes.ADD_ITEM:
      let productsCopy = [...state.products];
      productsCopy[productsCopy.length] = {
        ...action.payload,
        name: action.payload.name.toUpperCase(),
        id: new Date().getTime(),
        image: NoImage,
        creationDate: new Date().toLocaleDateString("en-GB"),
      };
      productsCopy = sortItems(productsCopy, state.sortByValue);
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
      let productsStateCopy = [...state.products];
      const newProductIndex = productsStateCopy.findIndex(
        ({ id }) => id === product.id
      );
      if (newProductIndex !== -1) {
        productsStateCopy[newProductIndex] = {
          ...product,
          name: product.name.toUpperCase(),
        };
      }
      productsStateCopy = sortItems(productsStateCopy, state.sortByValue);
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
    case actioTypes.UPDATE_SORT_BY_VALUE: {
      return {
        ...state,
        sortByValue: action.payload,
      };
    }
    case actioTypes.UPDATE_SEARCH_VALUE: {
      return {
        ...state,
        searchValue: action.payload,
      };
    }
    default:
      break;
  }
};
