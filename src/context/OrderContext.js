import createDateContext from "./createDataContext";
import jsonServer from '../api/jsonServer';

const orderReducer = (state, action) => {
  switch (action.type) {
    case "get_Order":
      return action.payload;
    // case "add_Pizza":
    //   return [...state, action.payload];
    case "delete_Pizza":
      return state.filter(pizza => pizza.id !== action.payload);
    case "edit_Pizza":
      return state.map(pizza => {
        return pizza.id === action.payload.id ? action.payload : pizza;
      });
    // case "set_Topping":
    //   return action.payload;
    // case "add_Topping":
    //   return [...state, action.payload];
    // case "delete_Topping":
    //   return state.filter(t => t.topping !== action.payload);
    default:
      return state;
  }
};

const getOrder = dispatch => {
  return async () => {
    const response = await jsonServer.get('/pizzaOrder');
    dispatch({ type: "get_Order", payload: response.data });
  }
};

const addPizza = dispatch => {
  return async (size, toppings) => {
    await jsonServer.post('/pizzaOrder', { size, toppings });
  };
  // dispatch({ type: "add_Pizza", payload: { id: uuid(), toppings: [] } });
};

const deletePizza = dispatch => {
  return async id => {
    await jsonServer.delete(`/pizzaOrder/${id}`);
    dispatch({ type: "add_Pizza", payload: id });
  }
};

const editPizza = dispatch => {
  return async (id, size, toppings) => {
    await jsonServer.put(`/pizzaOrder/${id}`, { id, size, toppings });
    dispatch({ type: "edit_Pizza", payload: { id, size, toppings } });
  };
  
};


// const setTopping = dispatch => toppings => {
//   dispatch({ type: "set_Topping", payload: toppings });
// };

// const addTopping = dispatch => topping => {
//   dispatch({ type: "add_Topping", payload: topping });
// };

// const deleteTopping = dispatch => topping => {
//   dispatch({ type: "add_Topping", payload: topping });
// };


export const { Context, Provider } = createDateContext(
  orderReducer,
  { getOrder, addPizza, deletePizza, editPizza },
  // { setTopping, addTopping, deleteTopping },
  []
);
