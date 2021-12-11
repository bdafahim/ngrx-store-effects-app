import {Pizza} from "../../models/pizza.model";
import * as fromPizzas from "../actions/pizza.action";
import {LOAD_PIZZAS} from "../actions/pizza.action";

export interface PizzaState {
  data: Pizza[];
  loaded: boolean,
  loading: boolean
}

export const initialState: PizzaState = {
  data: [],
  loaded: false,
  loading: false
}

export function reducer (state = initialState, action: fromPizzas.PizzasAction ) {

  switch (action.type) {
    case fromPizzas.LOAD_PIZZAS: {
      return {
        ...state,
        loading: true
      };
    }

    case fromPizzas.LOAD_PIZZAS_SUCCESS: {
      console.log('payload:  ', action.payload);
      const data = action.payload;
      return {
        ...state,
        loading: true,
        loaded: true,
        data
        // data: (action as fromPizzas.LoadPizzasSuccess).payload
      }
    }

    case fromPizzas.LOAD_PIZZAS_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false
      }


  }

  return state;
}


export const getPizzasLoading = (state: PizzaState) => state.loading;
export const getPizzasLoaded = (state: PizzaState) => state.loaded;
export const getPizzas = (state: PizzaState) => state.data;

