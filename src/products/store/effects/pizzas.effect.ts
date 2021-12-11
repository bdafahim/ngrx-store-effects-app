import {Injectable} from "@angular/core";
import {Actions, Effect} from "@ngrx/effects";
import * as pizzaActions from '../actions'
import {catchError, map, switchMap} from "rxjs/operators";
import * as fromservices from '../../services'
import {of} from "rxjs/observable/of";


@Injectable()
export class PizzasEffect {
  constructor(private actions$: Actions, private pizzasService: fromservices.PizzasService) {
  }

  @Effect()
  loadPizzas$ = this.actions$.ofType(pizzaActions.LOAD_PIZZAS)
    .pipe(
      switchMap(() => {
        return this.pizzasService.getPizzas().pipe(
          map(pizzas => new pizzaActions.LoadPizzasSuccess(pizzas)),
          // catchError(error => of(new pizzaActions.LOAD_PIZZAS_FAIL(error)))
        )
      })
    )
}
