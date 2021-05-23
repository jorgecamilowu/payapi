import React from 'react';
import { render, screen, waitFor, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

// system under test
import LastCta from '../LastCta';

describe('functional test suite', () => {
  const mockOnCTA = jest.fn();
  function makeView() {
    return <LastCta onCTA={mockOnCTA} />;
  }

  afterEach(() => {
    cleanup();
  });

  it('should update the input', () => {
    render(makeView());
    userEvent.type(screen.getByRole('textbox'), 'test@test.com');
    waitFor(() => {
      expect(screen.getByRole('textbox').textContent).toBe('test@test.com');
    });
  });
  it('should submit the form', async () => {
    render(makeView());
    userEvent.type(screen.getByRole('textbox'), 'test@test.com');
    userEvent.click(screen.getByRole('button'));
    await waitFor(() => {
      expect(mockOnCTA).toHaveBeenCalledWith('test@test.com');
    });
  });
});

describe('snapshot test suite', () => {
  it('should render correctly', () => {
    const emptyFunc = (): void => {
      // empty func
    };
    const { container } = render(<LastCta onCTA={emptyFunc} />);
    expect(container).toMatchInlineSnapshot(`
      <div>
        <div
          class="makeStyles-root-15"
        >
          <div>
            <h2
              class="MuiTypography-root makeStyles-title-17 MuiTypography-h2"
            >
              Ready to start?
            </h2>
          </div>
          <div
            class="makeStyles-input-16"
          >
            <form
              class="makeStyles-root-18"
            >
              <input
                class="makeStyles-input-19"
                data-testid="input"
                id="lastCta-email"
                name="email"
                placeholder="Enter email address"
                value=""
              />
              <button
                class="MuiButtonBase-root MuiButton-root MuiButton-contained makeStyles-button-20 MuiButton-containedPrimary"
                data-testid="btn"
                tabindex="0"
                type="submit"
              >
                <span
                  class="MuiButton-label"
                >
                  Schedule a Demo
                </span>
              </button>
              <p
                class="MuiFormHelperText-root makeStyles-helperTextOffset-21"
                data-testid="helper-text"
              />
            </form>
          </div>
        </div>
      </div>
    `);
  });
});
