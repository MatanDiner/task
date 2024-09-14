export const RREQUIRED_VALIDAION = "required";
export const RREQUIRED_NUMBER_VALIDAION = "requiredNumber";
export const IS_NUMBER_VALIDAION = "isNumber";

export const PRODUCT_VALIDATIONS_CONFIG = {
  name: [RREQUIRED_VALIDAION],
  description: [RREQUIRED_VALIDAION],
  price: [RREQUIRED_VALIDAION, IS_NUMBER_VALIDAION, RREQUIRED_NUMBER_VALIDAION],
  discount: [IS_NUMBER_VALIDAION],
};

export const PRODUCT_ERROR_MESSAGE_CONFIG = {
  name: { [RREQUIRED_VALIDAION]: "נא להזין שם מוצר" },
  description: { [RREQUIRED_VALIDAION]: "נא להזין תיאור מוצר" },
  price: {
    [RREQUIRED_VALIDAION]: "נא להזין מחיר",
    [IS_NUMBER_VALIDAION]: "נא להזין מספר תקין",
    [RREQUIRED_NUMBER_VALIDAION]: "נא להזין מספר גדול מאפס",
  },
  discount: {
    [IS_NUMBER_VALIDAION]: "נא להזין מספר תקין",
  },
};

export const SORT_BY = {
  name: { value: "1", label: "name" },
  date: { value: "2", label: "date" },
};

export const PRODUCTS_STORAGE_KEY = "products-manager-app-key";
