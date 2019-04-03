import { appendChildElement } from '../../../../utils/helpers/dom';
import { appendElement } from '../../../../utils/helpers/dom/append-child-element';

describe('Dom Helper', () => {

  jest.useFakeTimers();
  const element = document.createElement('div');

  it('should called function append child without params', () => {
    const mockFunc = jest.fn(() => appendChildElement());
    mockFunc();

    expect(mockFunc).toBeCalled();
  })

  it('should called function append only child', () => {
    const mockFunc = jest.fn(() => appendChildElement({
      element,
    }));

    mockFunc();

    expect(mockFunc).toBeCalled();
  })

  it('should called function append element and child', () => {
    const mockFunc = jest.fn(() => appendChildElement({
      childName: 'body',
      element,
    }));

    mockFunc();

    expect(mockFunc).toBeCalled();
  })

  it('should called function append child, child and lazy', () => {
    const mockFunc = jest.fn(() => appendChildElement({
      childName: 'body',
      lazy: true,
      element,
    }));

    mockFunc();

    expect(mockFunc).toBeCalled();
  })

  it('should called function append child, child, lazy and seconds with setTimeOut', () => {
    const callback = jest.fn(() => appendChildElement({
      childName: 'body',
      lazy: true,
      seconds: 1000,
      element,
    }));

    callback();

    jest.advanceTimersByTime(1000);
    expect(callback).toBeCalled();
    expect(callback).toHaveBeenCalledTimes(1);

  })

  it('should called function append document', () => {
    const mockFunc = jest.fn(() => appendElement());
    mockFunc();

    expect(mockFunc).toBeCalled();

  })

  it('should called function append document without element', () => {
    const mockFunc = jest.fn(() => appendElement('body'));
    mockFunc();

    expect(mockFunc).toBeCalled();
  })

  it('should called function append document without child', () => {
    const mockFunc = jest.fn(() => appendElement(undefined, element));
    mockFunc();

    expect(mockFunc).toBeCalled();
  })

  it('should called function append document with element and child', () => {
    const mockFunc = jest.fn(() => appendElement('body', element));
    mockFunc();

    expect(mockFunc).toBeCalled();
  })
})