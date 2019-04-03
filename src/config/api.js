// @flow strict

import dev from './environments/env';
import hom from './environments/env.hom';
import prod from './environments/env.prod';

const define = (env: string) => {
  switch (env) {
    case 'development':
      return dev;

    case 'homologation':
      return hom;

    case 'production':
      return prod;

    default:
      return prod;
  }
};

export default {
  environment: define(process.env.REACT_APP_STAGE),
  url: define(process.env.REACT_APP_STAGE).endpoint,
};
