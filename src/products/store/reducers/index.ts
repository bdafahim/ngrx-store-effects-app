import {getPizzas, PizzaState, reducer, getPizzasLoaded, getPizzasLoading} from "./pizzas.reducer";
import {ActionReducerMap, createFeatureSelector, createSelector} from "@ngrx/store";

export interface ProductState {
  pizzas: PizzaState
}


export const reducers: ActionReducerMap<ProductState> = {
  pizzas: reducer,

}



export const getProductsState = createFeatureSelector<ProductState>('products');

export const getPizzaState = createSelector(getProductsState, (state: ProductState) => state.pizzas);

export const getAllPizzas = createSelector(getPizzaState, getPizzas);
export const getAllPizzasLoading = createSelector(getPizzaState,
  (state: PizzaState) => state.loaded
  );
export const getAllPizzasLoaded = createSelector(getPizzaState, getPizzasLoaded);
