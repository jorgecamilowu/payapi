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
            <div
              style="display: block; overflow: hidden; position: absolute; top: 0px; left: 0px; bottom: 0px; right: 0px; box-sizing: border-box; margin: 0px;"
            >
              <noscript />
              <img
                alt="easy-to-implement-illustration"
                class="makeStyles-img-4"
                decoding="async"
                src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                style="position: absolute; top: 0px; left: 0px; bottom: 0px; right: 0px; box-sizing: border-box; padding: 0px; margin: auto; display: block; width: 0px; height: 0px; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%;"
              />
            </div>
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
