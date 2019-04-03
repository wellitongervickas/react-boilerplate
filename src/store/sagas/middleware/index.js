// @flow strict

import { call } from 'redux-saga/effects';
import type { Saga } from 'redux-saga';
import sagasMiddlewareCreateRequest from './create-request';
import { ParametersInterface, ConfigurationInterface } from './interface';

function* sagasMiddleware(
  parameters: ParametersInterface,
  configuration: ConfigurationInterface,
): Saga {
  const middlewareParams: ParametersInterface = {
    service: () => { },
    payload: null,
    ...parameters,
  };

  const middlewareConfiguration: ConfigurationInterface = {
    // ... some configuration
    ...configuration,
  };

  const response = yield call(
    sagasMiddlewareCreateRequest,
    middlewareParams,
    middlewareConfiguration,
  );

  return response;
}

export default sagasMiddleware;
