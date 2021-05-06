import { createContext, useReducer, useState } from "react";
import { contextReducer } from "./contextReducer";

const initialState = JSON.parse(localStorage.getItem("customers")) || [
  {
    id: "j34kl2j34",
    name: "John",
    type: "Primary",
    address: "Ankara,Turkey",
    phone: "+9040044505",
    email: "john@mail.com",
    website: "john.com",
  },
];

export const CustomerContext = createContext(initialState);

export const CustomerProvider = ({ children }) => {
  const [customers, dispatch] = useReducer(contextReducer, initialState);
  const [selectedCustomer, setSelectedCustomer] = useState({});

  const addCustomer = (customer) => {
    dispatch({
      type: "ADD_CUSTOMER",
      payload: customer,
    });
  };

  const deleteCustomer = (id) => {
    dispatch({
      type: "DELETE_CUSTOMER",
      payload: id,
    });
  };

  const getCustomer = (id) => {
    setSelectedCustomer(customers.find((x) => x.id === id));
  };

  return (
    <CustomerContext.Provider
      value={{
        customers,
        addCustomer,
        deleteCustomer,
        getCustomer,
        selectedCustomer,
      }}
    >
      {children}
    </CustomerContext.Provider>
  );
};
