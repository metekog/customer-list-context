export const contextReducer = (state, action) => {
  let customers;
  switch (action.type) {
    case "ADD_CUSTOMER":
      customers = [action.payload, ...state];
      return customers;

    case "DELETE_CUSTOMER":
      customers = state.filter((customer) => customer.id !== action.payload);
      return customers;
    default:
      break;
  }
};
