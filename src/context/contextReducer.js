export const contextReducer = (state, action) => {
  let customers;
  switch (action.type) {
    case "ADD_CUSTOMER":
      customers = [action.payload, ...state];
      localStorage.setItem("customers", JSON.stringify(customers));
      return customers;

    case "DELETE_CUSTOMER":
      customers = state.filter((customer) => customer.id !== action.payload);
      localStorage.setItem("customers", JSON.stringify(customers));
      return customers;

    default:
      break;
  }
};
