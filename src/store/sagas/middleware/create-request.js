// @flow strict

import { call } from 'redux-saga/effects';
import { ParametersInterface /* ConfigurationInterface */ } from './interface';

export default function* sagasMiddlewareCreateRequest(
  parameters: ParametersInterface,
  // configuration: ConfigurationInterface,
): Saga {
  try {
    const { service, payload } = parameters;
    const request = yield call(service, payload);

    return request;
  } catch (error) {
    // eslint-disable-next-line no-console
    yield call(console.error, error);
    return error;
  }
}
