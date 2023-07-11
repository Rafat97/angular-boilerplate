import { Injectable, inject } from '@angular/core';
import { select, Store, Action } from '@ngrx/store';

import * as TestStoreActions from './test-store.actions';
import * as TestStoreFeature from './test-store.reducer';
import * as TestStoreSelectors from './test-store.selectors';

@Injectable()
export class TestStoreFacade {
  private readonly store = inject(Store);

  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(select(TestStoreSelectors.selectTestStoreLoaded));
  allTestStore$ = this.store.pipe(
    select(TestStoreSelectors.selectAllTestStore)
  );
  selectedTestStore$ = this.store.pipe(select(TestStoreSelectors.selectEntity));

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(TestStoreActions.initTestStore());
  }
}
