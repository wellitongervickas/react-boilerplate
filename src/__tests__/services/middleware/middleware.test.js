import ServicesMiddleware from '../../../services/middleware';

describe('Services Middleware', () => {

  const middleware = new ServicesMiddleware();

  it('should called function', () => {
    const mockFunc = jest.fn(() => middleware.request());
    mockFunc();

    expect(mockFunc).toBeCalled();
    expect(mockFunc).toHaveBeenCalledTimes(1);
  })
})