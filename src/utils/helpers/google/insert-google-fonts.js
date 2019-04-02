// @flow strict

import { appendChildElement } from '../dom';
import { Params } from './interface';

const defaultFont = 'https://fonts.googleapis.com/css?family=Roboto:300,400,700,900';
const defaultParams: Params = {
  url: defaultFont,
  lazy: true,
  seconds: 2000,
};

const insertGoogleFonts = (params = { ...defaultParams }) => {
  const { url, lazy, seconds } = params;

  const e = document.createElement('link');
  e.href = url;
  e.rel = 'stylesheet';

  appendChildElement({
    element: e,
    childName: 'head',
    lazy,
    seconds,
  });
};

export default insertGoogleFonts;
