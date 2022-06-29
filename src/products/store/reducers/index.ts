import { PizzaState, reducer, getPizzasLoaded, getPizzasLoading, getPizzasEntities} from "./pizzas.reducer";
import {ActionReducerMap, createFeatureSelector, createSelector} from "@ngrx/store";

export interface ProductState {
  pizzas: PizzaState
}


export const reducers: ActionReducerMap<ProductState> = {
  pizzas: reducer,

}



export const getProductsState = createFeatureSelector<ProductState>('products');

export const getPizzaState = createSelector(getProductsState, (state: ProductState) => state.pizzas);

export const getPizzasentities = createSelector(getPizzaState, getPizzasEntities);
export const getAllPizzas = createSelector(getPizzasentities,
  (entities) => {
    return Object.keys(entities).map(id => entities[parseInt(id, 10)]);
  }
  )
export const getAllPizzasLoading = createSelector(getPizzaState,
  (state: PizzaState) => state.loaded
  );
export const getAllPizzasLoaded = createSelector(getPizzaState, getPizzasLoaded);
