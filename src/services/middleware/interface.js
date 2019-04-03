// @flow strict

export interface RequestParamsInterface {
  baseUrl?: string;
  url?: string;
  method: string;
  data?: any;
  params?: any;
}

export interface RequestConfigInterface {
  useToken?: boolean;
  useHeader?: boolean;
  customParams?: ?Object;
}
