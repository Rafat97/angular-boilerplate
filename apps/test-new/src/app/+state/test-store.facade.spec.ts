import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';
import { readFirst } from '@nx/angular/testing';

import * as TestStoreActions from './test-store.actions';
import { TestStoreEffects } from './test-store.effects';
import { TestStoreFacade } from './test-store.facade';
import { TestStoreEntity } from './test-store.models';
import {
  TEST_STORE_FEATURE_KEY,
  TestStoreState,
  initialTestStoreState,
  testStoreReducer,
} from './test-store.reducer';
import * as TestStoreSelectors from './test-store.selectors';

interface TestSchema {
  testStore: TestStoreState;
}

describe('TestStoreFacade', () => {
  let facade: TestStoreFacade;
  let store: Store<TestSchema>;
  const createTestStoreEntity = (id: string, name = ''): TestStoreEntity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(TEST_STORE_FEATURE_KEY, testStoreReducer),
          EffectsModule.forFeature([TestStoreEffects]),
        ],
        providers: [TestStoreFacade],
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [
          StoreModule.forRoot({}),
          EffectsModule.forRoot([]),
          CustomFeatureModule,
        ],
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      store = TestBed.inject(Store);
      facade = TestBed.inject(TestStoreFacade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async () => {
      let list = await readFirst(facade.allTestStore$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      facade.init();

      list = await readFirst(facade.allTestStore$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(true);
    });

    /**
     * Use `loadTestStoreSuccess` to manually update list
     */
    it('allTestStore$ should return the loaded list; and loaded flag == true', async () => {
      let list = await readFirst(facade.allTestStore$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      store.dispatch(
        TestStoreActions.loadTestStoreSuccess({
          testStore: [
            createTestStoreEntity('AAA'),
            createTestStoreEntity('BBB'),
          ],
        })
      );

      list = await readFirst(facade.allTestStore$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(2);
      expect(isLoaded).toBe(true);
    });
  });
});
