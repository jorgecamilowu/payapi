import React from 'react';
import { render } from '@testing-library/react';

// system under test
import Partners from '../Partners';

describe('snapshot test suite', () => {
  it('should render correctly', () => {
    const { container } = render(<Partners />);
    expect(container).toMatchInlineSnapshot(`
      <div>
        <div
          class="makeStyles-root-1"
        >
          <div
            class="makeStyles-textBlock-2"
          >
            <h2
              class="MuiTypography-root makeStyles-textColor-4 makeStyles-title-7 MuiTypography-h2"
            >
              Who we work with
            </h2>
            <p
              class="MuiTypography-root makeStyles-textColor-4 makeStyles-paragraph-8 MuiTypography-body1 MuiTypography-paragraph"
            >
              Today, millions of people around the world have successfully connected their accounts to apps they love using our API. We provide developers with the tools they need to create easy and accessible experiences for their users.
            </p>
            <button
              class="MuiButtonBase-root MuiButton-root MuiButton-outlined makeStyles-btn-6 MuiButton-outlinedPrimary"
              tabindex="0"
              type="button"
            >
              <span
                class="MuiButton-label"
              >
                About Us
              </span>
              <span
                class="MuiTouchRipple-root"
              />
            </button>
          </div>
          <div
            class="makeStyles-logoBlock-3"
          >
            <img
              class="makeStyles-icon-5"
              src="/shared/desktop/tesla.svg"
            />
            <img
              class="makeStyles-icon-5"
              src="/shared/desktop/microsoft.svg"
            />
            <img
              class="makeStyles-icon-5"
              src="/shared/desktop/hewlett-packard.svg"
            />
            <img
              class="makeStyles-icon-5"
              src="/shared/desktop/oracle.svg"
            />
            <img
              class="makeStyles-icon-5"
              src="/shared/desktop/google.svg"
            />
            <img
              class="makeStyles-icon-5"
              src="/shared/desktop/nvidia.svg"
            />
          </div>
          <img
            class="makeStyles-bgCircle-9"
            src="/shared/desktop/bg-pattern-circle.svg"
          />
        </div>
      </div>
    `);
  });
});
