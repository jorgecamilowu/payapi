import { ThunkAction } from 'redux-thunk';
import { Action, Dispatch, AnyAction } from 'redux';

import { RootState } from './rootReducer';

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
export type AsyncAppThunk = AppThunk<Promise<AnyAction>>;
export type AsyncDispatch = Dispatch;
