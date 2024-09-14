import { SORT_BY } from "../constants";

export const initialState = Object.freeze({
  products: [],
  selectedProduct: {},
  sortByValue: SORT_BY.name.value,
  searchValue: "",
  addItem: () => {},
  deleteItem: () => {},
  updateItem: () => {},
});
