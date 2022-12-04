import { queryData } from '../utils/fetch';

export default {
  namespace: 'blockData',
  state: {},
  reducers: {
    updateState(state, { payload }) {
      return payload;
    },
  },
  effects: {
    *searchQuery({ payload = {} }, { call, put }) {
      const data = yield call(queryData, payload);
      yield put({ type: 'updateState', payload: data });
    },
  }
};
