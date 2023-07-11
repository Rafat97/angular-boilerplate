import { Action } from '@ngrx/store';

import * as TestStoreActions from './test-store.actions';
import { TestStoreEntity } from './test-store.models';
import {
  TestStoreState,
  initialTestStoreState,
  testStoreReducer,
} from './test-store.reducer';

describe('TestStore Reducer', () => {
  const createTestStoreEntity = (id: string, name = ''): TestStoreEntity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid TestStore actions', () => {
    it('loadTestStoreSuccess should return the list of known TestStore', () => {
      const testStore = [
        createTestStoreEntity('PRODUCT-AAA'),
        createTestStoreEntity('PRODUCT-zzz'),
      ];
      const action = TestStoreActions.loadTestStoreSuccess({ testStore });

      const result: TestStoreState = testStoreReducer(
        initialTestStoreState,
        action
      );

      expect(result.loaded).toBe(true);
      expect(result.ids.length).toBe(2);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as Action;

      const result = testStoreReducer(initialTestStoreState, action);

      expect(result).toBe(initialTestStoreState);
    });
  });
});
