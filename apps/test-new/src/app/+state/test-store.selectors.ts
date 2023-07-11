import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  TEST_STORE_FEATURE_KEY,
  TestStoreState,
  testStoreAdapter,
} from './test-store.reducer';

// Lookup the 'TestStore' feature state managed by NgRx
export const selectTestStoreState = createFeatureSelector<TestStoreState>(
  TEST_STORE_FEATURE_KEY
);

const { selectAll, selectEntities } = testStoreAdapter.getSelectors();

export const selectTestStoreLoaded = createSelector(
  selectTestStoreState,
  (state: TestStoreState) => state.loaded
);

export const selectTestStoreError = createSelector(
  selectTestStoreState,
  (state: TestStoreState) => state.error
);

export const selectAllTestStore = createSelector(
  selectTestStoreState,
  (state: TestStoreState) => selectAll(state)
);

export const selectTestStoreEntities = createSelector(
  selectTestStoreState,
  (state: TestStoreState) => selectEntities(state)
);

export const selectSelectedId = createSelector(
  selectTestStoreState,
  (state: TestStoreState) => state.selectedId
);

export const selectEntity = createSelector(
  selectTestStoreEntities,
  selectSelectedId,
  (entities, selectedId) => (selectedId ? entities[selectedId] : undefined)
);
