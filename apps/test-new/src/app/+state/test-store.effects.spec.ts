import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { hot } from 'jasmine-marbles';
import { Observable } from 'rxjs';

import * as TestStoreActions from './test-store.actions';
import { TestStoreEffects } from './test-store.effects';

describe('TestStoreEffects', () => {
  let actions: Observable<Action>;
  let effects: TestStoreEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        TestStoreEffects,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(TestStoreEffects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: TestStoreActions.initTestStore() });

      const expected = hot('-a-|', {
        a: TestStoreActions.loadTestStoreSuccess({ testStore: [] }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
