import {
  RREQUIRED_VALIDAION,
  IS_NUMBER_VALIDAION,
  RREQUIRED_NUMBER_VALIDAION,
  SORT_BY,
} from "../constants";

const isNumeric = (str) => {
  return !isNaN(str) && !isNaN(parseFloat(str));
};

const checkValidation = (type, value) => {
  switch (type) {
    case RREQUIRED_VALIDAION:
      return !value;
    case IS_NUMBER_VALIDAION:
      return !isNumeric(value);
    case RREQUIRED_NUMBER_VALIDAION:
      return value <= 0;
    default:
      return false;
  }
};

export const checkError = (validation = [], value) => {
  return validation.find((validation) => checkValidation(validation, value));
};

export const sortItems = (items, sortByValue) => {
  if (sortByValue === SORT_BY.name.value) {
    items = sortBy(items, "name");
  } else {
    items = items.sort((a, b) => {
      const datePartsA = a.creationDate.split("/");
      const dateObjectA = new Date(
        +datePartsA[2],
        datePartsA[1] - 1,
        +datePartsA[0]
      );
      const datePartsB = b.creationDate.split("/");
      const dateObjectB = new Date(
        +datePartsB[2],
        datePartsB[1] - 1,
        +datePartsB[0]
      );
      return dateObjectA.getTime() - dateObjectB.getTime();
    });
  }
  return items;
};

export const sortBy = (arr, fieldName) => {
  return arr.sort((a, b) => {
    if (a[fieldName] < b[fieldName]) {
      return -1;
    }
    if (a[fieldName] > b[fieldName]) {
      return 1;
    }
    return 0;
  });
};

export const saveInLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};
