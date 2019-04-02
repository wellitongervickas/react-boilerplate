// @flow strict

import uuid from 'uuid/v1';
import { NotFound, Welcome } from '../app/views';
import { RoutesInterface } from '../utils/interfaces/routes/routes-interface';

const routesList: RoutesInterface = [
  {
    key: uuid(),
    path: '/',
    exact: true,
    component: Welcome,
    name: 'WELCOME',
  },
  {
    key: uuid(),
    path: '/not-found',
    name: 'NOT_FOUND_PAGE',
    component: NotFound,
  },
  {
    key: uuid(),
    component: NotFound,
  },
];

export default routesList;
