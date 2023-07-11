import { createAction, props } from '@ngrx/store';
import { TestStoreEntity } from './test-store.models';

export const initTestStore = createAction('[TestStore Page] Init');

export const loadTestStoreSuccess = createAction(
  '[TestStore/API] Load TestStore Success',
  props<{ testStore: TestStoreEntity[] }>()
);

export const loadTestStoreFailure = createAction(
  '[TestStore/API] Load TestStore Failure',
  props<{ error: any }>()
);
