import React from 'react';
import { render } from '@testing-library/react';

// system under test
import UseCases from '../UseCases';

describe('snapshot test stuie', () => {
  it('should render correctly', () => {
    const { container } = render(<UseCases />);
    expect(container).toMatchInlineSnapshot(`
      <div>
        <div
          class="makeStyles-root-1"
        >
          <div
            class="makeStyles-root-2"
          >
            <div>
              <img
                src="/home/desktop/icon-personal-finances.svg"
              />
            </div>
            <div>
              <h6
                class="MuiTypography-root makeStyles-title-3 MuiTypography-subtitle2"
              >
                Personal Finances
              </h6>
              <p
                class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph"
              >
                Consolidate financial data from multiple sources and categorize transactions up to 2 years of history. Analyze reports to reconcile activities in your account. 
              </p>
            </div>
          </div>
          <div
            class="makeStyles-root-2"
          >
            <div>
              <img
                src="/home/desktop/icon-banking-and-coverage.svg"
              />
            </div>
            <div>
              <h6
                class="MuiTypography-root makeStyles-title-3 MuiTypography-subtitle2"
              >
                Banking & Coverage
              </h6>
              <p
                class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph"
              >
                With our platform, you can speed up account onboarding and support ongoing payments for checking, savings, credit card, and brokerage accounts.
              </p>
            </div>
          </div>
          <div
            class="makeStyles-root-2"
          >
            <div>
              <img
                src="/home/desktop/icon-consumer-payments.svg"
              />
            </div>
            <div>
              <h6
                class="MuiTypography-root makeStyles-title-3 MuiTypography-subtitle2"
              >
                Consumer Payments
              </h6>
              <p
                class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph"
              >
                It’s easier to set up secure bank payments with us through a flow designed with the user experience in mind. Customers could instantly authenticate their account.
              </p>
            </div>
          </div>
        </div>
      </div>
    `);
  });
});
