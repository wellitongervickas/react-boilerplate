// @flow strict

import { Params } from './interface';

const defaultParams: Params = {
  element: null,
  childName: null,
  lazy: true,
  seconds: 3000,
};

const appendElement = (childName: string, element: any) => {
  if (childName && element) {
    document[childName].appendChild(element);
  }
};

const appendChildElement = (params: Params = { ...defaultParams }) => {
  const {
    element, childName, lazy, seconds,
  } = params;

  if (element && childName) {
    if (lazy === true) {
      setTimeout(() => {
        appendElement(childName, element);
      }, seconds);
    } else {
      appendElement(childName, element);
    }
  }
};

export { appendElement };
export default appendChildElement;
