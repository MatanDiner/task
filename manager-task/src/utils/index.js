import {
  RREQUIRED_VALIDAION,
  IS_NUMBER_VALIDAION,
  RREQUIRED_NUMBER_VALIDAION,
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
