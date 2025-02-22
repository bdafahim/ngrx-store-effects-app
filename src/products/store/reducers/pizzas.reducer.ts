import {Pizza} from "../../models/pizza.model";
import * as fromPizzas from "../actions/pizza.action";
import {LOAD_PIZZAS} from "../actions/pizza.action";

export interface PizzaState {
  entities: {[id: number]: Pizza}
  loaded: boolean,
  loading: boolean
}

export const initialState: PizzaState = {
  entities: {},
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
      const pizzas = action.payload;

      const entities = pizzas.reduce(
        (entities: { [id: number]: Pizza }, pizza: Pizza) => {
          return {
            ...entities,
            [pizza.id]: pizza
          };
        },
      {
        ...state.entities
      }
      );

      return {
        ...state,
        loading: true,
        loaded: true,
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

export const getPizzasEntities = (state: PizzaState) => state.entities;
export const getPizzasLoading = (state: PizzaState) => state.loading;
export const getPizzasLoaded = (state: PizzaState) => state.loaded;


