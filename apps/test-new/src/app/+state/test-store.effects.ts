import { Injectable, inject } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { switchMap, catchError, of } from 'rxjs';
import * as TestStoreActions from './test-store.actions';
import * as TestStoreFeature from './test-store.reducer';

@Injectable()
export class TestStoreEffects {
  private actions$ = inject(Actions);

  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TestStoreActions.initTestStore),
      switchMap(() =>
        of(TestStoreActions.loadTestStoreSuccess({ testStore: [] }))
      ),
      catchError((error) => {
        console.error('Error', error);
        return of(TestStoreActions.loadTestStoreFailure({ error }));
      })
    )
  );
}
