import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';

import * as TestStoreActions from './test-store.actions';
import { TestStoreEntity } from './test-store.models';

export const TEST_STORE_FEATURE_KEY = 'testStore';

export interface TestStoreState extends EntityState<TestStoreEntity> {
  selectedId?: string | number; // which TestStore record has been selected
  loaded: boolean; // has the TestStore list been loaded
  error?: string | null; // last known error (if any)
}

export interface TestStorePartialState {
  readonly [TEST_STORE_FEATURE_KEY]: TestStoreState;
}

export const testStoreAdapter: EntityAdapter<TestStoreEntity> =
  createEntityAdapter<TestStoreEntity>();

export const initialTestStoreState: TestStoreState =
  testStoreAdapter.getInitialState({
    // set initial required properties
    loaded: false,
  });

const reducer = createReducer(
  initialTestStoreState,
  on(TestStoreActions.initTestStore, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(TestStoreActions.loadTestStoreSuccess, (state, { testStore }) =>
    testStoreAdapter.setAll(testStore, { ...state, loaded: true })
  ),
  on(TestStoreActions.loadTestStoreFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);

export function testStoreReducer(
  state: TestStoreState | undefined,
  action: Action
) {
  return reducer(state, action);
}
