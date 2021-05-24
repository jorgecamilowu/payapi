import React from 'react';
import { render } from '@testing-library/react';

// system under test
import Simplicity from '../Simplicity';

describe('snapshot test suite', () => {
  it('should render correctly', () => {
    const { container } = render(<Simplicity />);
    expect(container).toMatchInlineSnapshot(`
      <div>
        <div
          class="makeStyles-root-1"
        >
          <div
            class="makeStyles-textBlock-2"
          >
            <h2
              class="MuiTypography-root makeStyles-title-3 MuiTypography-h2"
            >
              Simple UI & UX
            </h2>
            <p
              class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph"
            >
              Our pre-built form is easy to integrate in your app or website’s checkout flow and designed to optimize conversion.
            </p>
          </div>
          <div>
            <img
              class="makeStyles-img-4"
              src="/home/desktop/illustration-simple-ui.svg"
            />
          </div>
        </div>
      </div>
    `);
  });
});
