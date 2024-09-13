import { useReducer } from "react";
import AppContext from "./context";
import { reducer } from "./appReducer";
import { initialState } from "./initialState";

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
