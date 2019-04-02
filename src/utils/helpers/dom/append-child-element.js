// @flow strict

import { Params } from './interface';

const defaultParams: Params = {
  lazy: true,
  seconds: 3000,
};

const appendElement = (childName: string, element: any) => {
  if (childName && element) {
    document[childName].appendChild(element);
  }
};

const appendChildElement = (params = { ...defaultParams }) => {
  const {
    element, childName, lazy, seconds,
  } = params;

  if (element && childName) {
    if (lazy === true) {
      document.addEventListener('DOMContentLoaded', () => {
        setTimeout(() => appendElement(childName, element), seconds);
      });
    } else {
      appendElement(childName, element);
    }
  }
};

export { appendElement };
export default appendChildElement;
