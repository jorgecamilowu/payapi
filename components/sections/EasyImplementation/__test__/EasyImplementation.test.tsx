import React from 'react';
import { render } from '@testing-library/react';

// system under test
import EasyImplementation from '../EasyImplementation';

describe('snapshot test suite', () => {
  it('should render correctly', () => {
    const { container } = render(<EasyImplementation />);
    expect(container).toMatchInlineSnapshot(`
      <div>
        <div
          class="makeStyles-root-1"
        >
          <div>
            <img
              alt="easy-to-implement-illustration"
              class="makeStyles-img-4"
              src="/home/desktop/illustration-easy-to-implement.svg"
            />
          </div>
          <div
            class="makeStyles-textBlock-2"
          >
            <h2
              class="MuiTypography-root makeStyles-title-3 MuiTypography-h2"
            >
              Easy to implement
            </h2>
            <p
              class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph"
            >
              Our API comes with just a few lines of code. You’ll be up and running in no time. We built our documentation page to integrate payments functionality with ease.
            </p>
          </div>
        </div>
      </div>
    `);
  });
});
