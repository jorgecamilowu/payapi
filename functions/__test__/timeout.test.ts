import timeout from '../timeout';

describe('timeout test', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('calls timeout method with correct parameters', () => {
    const expectedTimeoutDuration = 1000;
    timeout(expectedTimeoutDuration);
    jest.runAllTimers();
    expect(setTimeout).toHaveBeenCalledWith(
      expect.any(Function),
      expectedTimeoutDuration,
    );
  });
});
