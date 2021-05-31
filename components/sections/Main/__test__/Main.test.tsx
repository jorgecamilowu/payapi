import React from 'react';
import { ReactWrapper, ShallowWrapper } from 'enzyme';
import { createShallow } from '@material-ui/core/test-utils';
import { screen, render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

// system under test
import Main from '../Main';

describe('functional test suite', () => {
  const mockOnCTA = jest.fn();

  // search terms
  const inputSearch = { 'data-testid': 'input-with-button' };

  let shallow: ReturnType<typeof createShallow>;
  beforeEach(() => {
    shallow = createShallow();
  });

  function makeView() {
    return <Main onCallToAction={mockOnCTA} />;
  }

  function updateField(
    wrapper: ReactWrapper<any> | ShallowWrapper<any>,
    name: string,
    value: string,
  ) {
    wrapper.simulate('change', {
      persist: () => {
        // no op
      },
      target: {
        name,
        value,
      },
    });
  }

  it('should update an input when it is changed', () => {
    const container = shallow(makeView());
    const field = container.find(inputSearch);
    updateField(field, 'email', 'test@test.com');
    expect(container.find(inputSearch).props().defaultValue).toEqual(
      'test@test.com',
    );
  });

  it('should submit the form', async () => {
    render(makeView());
    userEvent.type(screen.getByRole('textbox'), 'test@test.com');
    userEvent.click(screen.getByRole('button'));
    await waitFor(() => {
      expect(mockOnCTA).toHaveBeenCalled();
    });
  });
});

describe('snaptshot test suite', () => {
  const emptyFunc = (): void => {
    // empty function
  };
  it('should render correctly', () => {
    const { container } = render(<Main onCallToAction={emptyFunc} />);
    expect(container).toMatchInlineSnapshot(`
      <div>
        <div
          class="makeStyles-root-1"
        >
          <div
            class="makeStyles-leftBlock-2"
          >
            <div
              class="makeStyles-item-3"
            >
              <h1
                class="MuiTypography-root makeStyles-headline-6 MuiTypography-h1"
              >
                Start building with our APIs for absolutely free.
              </h1>
            </div>
            <div
              class="makeStyles-item-3"
            >
              <form
                class="makeStyles-root-7"
              >
                <input
                  class="makeStyles-input-8"
                  data-testid="input"
                  id="email"
                  name="email"
                  placeholder="Enter email address"
                  value=""
                />
                <button
                  class="MuiButtonBase-root MuiButton-root MuiButton-contained makeStyles-button-9 MuiButton-containedPrimary"
                  data-testid="btn"
                  tabindex="0"
                  type="submit"
                >
                  <span
                    class="MuiButton-label"
                  >
                    Schedule a Demo
                  </span>
                  <span
                    class="MuiTouchRipple-root"
                  />
                </button>
                <p
                  class="MuiFormHelperText-root makeStyles-helperTextOffset-10"
                  data-testid="helper-text"
                >
                  <span
                    class="MuiTypography-root MuiTypography-caption"
                  >
                    Have any questions?
                     
                    <span
                      style="font-weight: bold;"
                    >
                      Contact Us
                    </span>
                  </span>
                </p>
              </form>
            </div>
          </div>
          <div
            class="makeStyles-item-3 makeStyles-phoneContainer-4"
          >
            <img
              alt="mobile-mockup"
              class="makeStyles-phone-5"
              src="/home/desktop/illustration-phone-mockup.svg"
            />
          </div>
        </div>
      </div>
    `);
  });
});
