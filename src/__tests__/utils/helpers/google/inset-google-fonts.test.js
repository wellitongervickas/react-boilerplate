import { insertGoogleFonts } from '../../../../utils/helpers/google';

describe('Dom Helper', () => {
  it('should called function', () => {
    const mockFunc = jest.fn(() => insertGoogleFonts());
    mockFunc();

    expect(mockFunc).toBeCalled();
  })
})