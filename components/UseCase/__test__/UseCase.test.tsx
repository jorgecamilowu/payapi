import React from 'react';
import { render } from '@testing-library/react';

// system under test
import UseCase from '../UseCase';

describe('snapshot test suite', () => {
  it('should render correctly', () => {
    const { container } = render(
      <UseCase icon={<div />} title="test" body="test" />,
    );
    expect(container).toMatchInlineSnapshot(`
      <div>
        <div
          class="makeStyles-root-1"
        >
          <div>
            <div />
          </div>
          <div>
            <h6
              class="MuiTypography-root makeStyles-title-2 MuiTypography-subtitle2"
            >
              test
            </h6>
            <p
              class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph"
            >
              test
            </p>
          </div>
        </div>
      </div>
    `);
  });
});
