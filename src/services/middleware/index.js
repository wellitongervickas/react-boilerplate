// @flow static

import Axios from 'axios';
import { RequestConfigInterface, RequestParamsInterface } from './interface';
import config from '../../config';

const defaultRequestConfig: RequestConfigInterface = {
  useHeader: true,
  useToken: true,
  customParams: null,
};

export default class ServicesMiddleware {
  static service = (requestConfig: RequestConfigInterface): Function => {
    const request = Axios.create();

    request.interceptors.request.use((defaultConfiguration) => {
      const newConfiguration: Object = {
        ...defaultConfiguration,
        baseURL: defaultConfiguration.baseUrl || config.api.url,
      };

      if (requestConfig.useToken === true) {
        newConfiguration.headers = {
          ...newConfiguration.headers,
          Authorization: 'Bearer',
        };
      }

      if (requestConfig.useHeader === true) {
        newConfiguration.headers = {
          ...newConfiguration.headers,
          'x-Custom-Headers': 'enabled',
        };
      }

      return newConfiguration;
    });

    return request;
  }

  request = (
    requestParams: RequestParamsInterface,
    requestConfig?: RequestConfigInterface,
  ): Promise<mixed> => ServicesMiddleware.service({
    ...defaultRequestConfig,
    ...requestConfig,
  })(requestParams)
    .then((result: any): any => result)
    .catch((err: any): any => err)
}
