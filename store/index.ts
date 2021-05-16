/* eslint no-underscore-dangle: 0 */ // --> OFF
import { CombinedState, configureStore, EnhancedStore } from '@reduxjs/toolkit';
import { useMemo } from 'react';

import rootReducer, { RootState } from './rootReducer';

// union of all states
export type AllState = {};

const initialState: AllState = {};

/**
 * Due to the severside rendering features of Next.js, we need to make sure that
 * on every server-side request, a new store is initialized and returned to avoid
 * store conflicts between different users. Additionally, we must guarantee a single
 * reference to the same store when dealing with client-side rendering.
 */

let store: EnhancedStore<CombinedState<RootState>>;

function initStore(preloadedState: AllState) {
  return configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV !== 'production',
    preloadedState,
  });
}

export const initializeStore = (
  preloadedState: RootState = initialState,
): EnhancedStore<CombinedState<RootState>> => {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  let _store = store ?? initStore(preloadedState);

  // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store
  if (preloadedState && store) {
    _store = initStore({
      ..._store.getState(),
      ...preloadedState,
    });
    // Reset the current store
    store = undefined;
  }

  // For SSG and SSR always create a new store
  if (typeof window === 'undefined') {
    return _store;
  }

  // Create the store once in the client
  if (!store) {
    store = _store;
  }

  return store;
};

// Hook to abstract away store reconciliation logic
export function useStore(
  state: AllState,
): EnhancedStore<CombinedState<RootState>> {
  return useMemo(() => initializeStore(state), [state]);
}

export type AppDispatch = typeof store.dispatch;
