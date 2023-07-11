import { ApplicationConfig, isDevMode } from '@angular/core';
import {
  provideRouter,
  withEnabledBlockingInitialNavigation,
} from '@angular/router';
import { appRoutes } from './app.routes';
import { provideStore, provideState } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import * as fromTestStore from './+state/test-store.reducer';
import { TestStoreEffects } from './+state/test-store.effects';
import { TestStoreFacade } from './+state/test-store.facade';

export const appConfig: ApplicationConfig = {
  providers: [
    provideEffects(TestStoreEffects),
    provideState(
      fromTestStore.TEST_STORE_FEATURE_KEY,
      fromTestStore.testStoreReducer
    ),
    TestStoreFacade,
    provideStoreDevtools({ logOnly: !isDevMode() }),
    provideEffects(),
    provideStore(),
    provideRouter(appRoutes, withEnabledBlockingInitialNavigation()),
  ],
};
