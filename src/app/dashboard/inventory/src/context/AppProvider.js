import { createContext, useEffect, useReducer } from "react";
import { inventoryData } from "../pages/data";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  // localStorage Data

  const lsAppDataRaw = localStorage.getItem("LS-AppData");
  const lsAppData = JSON.parse(lsAppDataRaw);

  // useReducer func
  const reducerFunc = (state, action) => {
    switch (action.type) {
      case "SET_DEPT":
        return { ...state, selectedDepartment: action.payload };

      case "SET_LSI":
        return { ...state, checkLSI: !state.checkLSI };

      case "SET_SORT_BY":
        return { ...state, sortBy: action.payload };

      case "SET_DISPLAY_DATA":
        return { ...state, displayData: action.payload };

      case "ADD_PRODUCT":
        return { ...state, originalData: action.payload };

      default:
        break;
    }
  };

  // useReducer

  const [appData, dispatch] = useReducer(
    reducerFunc,
    lsAppData !== null
      ? lsAppData
      : {
          originalData: inventoryData,
          displayData: [],
          selectedDepartment: "All",
          checkLSI: false,
          sortBy: "Name"
        }
  );

  const { originalData, selectedDepartment, checkLSI, sortBy } = appData;

  // Display data

  const getDeptFilter = (data) => {
    if (selectedDepartment === "All") {
      return data;
    } else {
      return data.filter(({ department }) => department === selectedDepartment);
    }
  };

  const getLowStockFilter = (data) => {
    if (checkLSI) {
      return data.filter(({ stock }) => stock <= 10);
    } else {
      return data;
    }
  };

  const getSortByFilter = (data) => {
    console.log({ sortBy });
    if (sortBy === "Name") {
      return data.sort((a, b) => (a.name > b.name ? 1 : -1));
    } else if (sortBy === "Price") {
      return data.sort((a, b) => (a.price > b.price ? 1 : -1));
    } else if (sortBy === "Stock") {
      return data.sort((a, b) => (a.stock > b.stock ? 1 : -1));
    }
  };

  const getDisplayData = () => {
    const deptData = getDeptFilter(originalData);

    const lowStockData = getLowStockFilter(deptData);

    const sortByData = getSortByFilter(lowStockData);

    console.log({ sortByData });

    dispatch({ type: "SET_DISPLAY_DATA", payload: sortByData });

    localStorage.setItem("LS-AppData", JSON.stringify(appData));
  };

  useEffect(() => {
    getDisplayData();
  }, [originalData, selectedDepartment, checkLSI, sortBy]);

  // Add product

  const newProduct = (product) => {
    console.log({ product });
    const newList = [...originalData, product];
    dispatch({ type: "ADD_PRODUCT", payload: newList });

    localStorage.setItem("LS-OG-Data", JSON.stringify(newList));
  };

  return (
    <AppContext.Provider value={{ appData, dispatch, newProduct }}>
      {children}
    </AppContext.Provider>
  );
};
