import { TestStoreEntity } from './test-store.models';
import {
  testStoreAdapter,
  TestStorePartialState,
  initialTestStoreState,
} from './test-store.reducer';
import * as TestStoreSelectors from './test-store.selectors';

describe('TestStore Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getTestStoreId = (it: TestStoreEntity) => it.id;
  const createTestStoreEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as TestStoreEntity);

  let state: TestStorePartialState;

  beforeEach(() => {
    state = {
      testStore: testStoreAdapter.setAll(
        [
          createTestStoreEntity('PRODUCT-AAA'),
          createTestStoreEntity('PRODUCT-BBB'),
          createTestStoreEntity('PRODUCT-CCC'),
        ],
        {
          ...initialTestStoreState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('TestStore Selectors', () => {
    it('selectAllTestStore() should return the list of TestStore', () => {
      const results = TestStoreSelectors.selectAllTestStore(state);
      const selId = getTestStoreId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('selectEntity() should return the selected Entity', () => {
      const result = TestStoreSelectors.selectEntity(state) as TestStoreEntity;
      const selId = getTestStoreId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('selectTestStoreLoaded() should return the current "loaded" status', () => {
      const result = TestStoreSelectors.selectTestStoreLoaded(state);

      expect(result).toBe(true);
    });

    it('selectTestStoreError() should return the current "error" state', () => {
      const result = TestStoreSelectors.selectTestStoreError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
