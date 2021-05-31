import React from 'react';
import { screen, render, getByRole } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { mocked } from 'ts-jest/utils';

import { formatMoney } from '../../../functions/format';
import { mockBenefitsCatalog, mockPricingPlan } from '../../../__mocks__';
import { PricingPlan, Benefit } from '../../../models';
// system under test
import PricingPlanContainer from '../PricingPlanContainer';

jest.mock('../../../functions/format', () => ({
  formatMoney: jest.fn(),
}));

describe('functional test suite', () => {
  const mockOnRequestAccess = jest.fn();

  type MakeViewProps = {
    plan?: PricingPlan;
    catalog?: Benefit[];
  };

  function makeView({
    plan = mockPricingPlan,
    catalog = mockBenefitsCatalog,
  }: MakeViewProps = {}): JSX.Element {
    return <PricingPlanContainer plan={plan} catalog={catalog} />;
  }

  function makeViewWithRequestAccess({
    plan = mockPricingPlan,
    catalog = mockBenefitsCatalog,
  }: MakeViewProps = {}): JSX.Element {
    return (
      <PricingPlanContainer
        plan={plan}
        catalog={catalog}
        onRequestAccess={mockOnRequestAccess}
      />
    );
  }

  beforeEach(() => {
    mocked(formatMoney).mockImplementation((val) => `${val}`);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render with correct data', () => {
    render(makeView());
    expect(screen.getByText(mockPricingPlan.name)).toBeDefined();
    expect(screen.getByText(mockPricingPlan.description)).toBeDefined();
    expect(screen.getByText(mockPricingPlan.price)).toBeDefined();
    expect(formatMoney).toHaveBeenCalledWith(mockPricingPlan.price);
    expect(screen.getByText('Request Access')).toBeDefined();
  });

  it('should trigger onRequestAccess when clicked and function is provided', () => {
    const { container } = render(makeViewWithRequestAccess());
    // userEvent.click(screen.getByRole('button'));
    userEvent.click(getByRole(container, 'button'));
    expect(mockOnRequestAccess).toHaveBeenCalled();
  });
});

describe('snapshot test suite', () => {
  it('should render correctly', () => {
    const { container } = render(
      <PricingPlanContainer
        plan={mockPricingPlan}
        catalog={mockBenefitsCatalog}
      />,
    );
    expect(container).toMatchInlineSnapshot(`
      <div>
        <div
          class="makeStyles-root-1"
        >
          <div
            class="makeStyles-item-3"
          >
            <h3
              class="MuiTypography-root makeStyles-title-2 MuiTypography-h3"
            >
              Mock Plan 1
            </h3>
          </div>
          <div
            class="makeStyles-item-3"
          >
            <p
              class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph"
            >
              Proident anim do sint dolore consequat proident laboris occaecat sit incididunt nulla voluptate anim aute.
            </p>
          </div>
          <div
            class="makeStyles-item-3"
          >
            <h6
              class="MuiTypography-root MuiTypography-subtitle1"
            >
              25.99
            </h6>
          </div>
          <div
            class="makeStyles-item-3"
          >
            <hr
              class="makeStyles-responsiveHr-9"
            />
          </div>
          <div
            class="makeStyles-item-3"
          >
            <div
              class="makeStyles-benefitsListContainer-4"
            >
              <div
                class="makeStyles-benefitsListRow-5"
              >
                <div
                  style="display: inline-block; max-width: 100%; overflow: hidden; position: relative; box-sizing: border-box; margin: 0px;"
                >
                  <div
                    style="box-sizing: border-box; display: block; max-width: 100%;"
                  >
                    <img
                      alt=""
                      aria-hidden="true"
                      role="presentation"
                      src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4="
                      style="max-width: 100%; display: block; margin: 0px; padding: 0px;"
                    />
                  </div>
                  <noscript />
                  <img
                    class="makeStyles-benefitsListRowElement-6"
                    decoding="async"
                    src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                    style="position: absolute; top: 0px; left: 0px; bottom: 0px; right: 0px; box-sizing: border-box; padding: 0px; margin: auto; display: block; width: 0px; height: 0px; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%;"
                  />
                </div>
                <p
                  class="MuiTypography-root makeStyles-benefitsListRowElement-6 MuiTypography-body1"
                >
                  Benefit row 1
                </p>
              </div>
              <div
                class="makeStyles-benefitsListRow-5"
              >
                <div
                  style="display: inline-block; max-width: 100%; overflow: hidden; position: relative; box-sizing: border-box; margin: 0px;"
                >
                  <div
                    style="box-sizing: border-box; display: block; max-width: 100%;"
                  >
                    <img
                      alt=""
                      aria-hidden="true"
                      role="presentation"
                      src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4="
                      style="max-width: 100%; display: block; margin: 0px; padding: 0px;"
                    />
                  </div>
                  <noscript />
                  <img
                    class="makeStyles-benefitsListRowElement-6"
                    decoding="async"
                    src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                    style="position: absolute; top: 0px; left: 0px; bottom: 0px; right: 0px; box-sizing: border-box; padding: 0px; margin: auto; display: block; width: 0px; height: 0px; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%;"
                  />
                </div>
                <p
                  class="MuiTypography-root makeStyles-benefitsListRowElement-6 MuiTypography-body1"
                >
                  Benefit row 2
                </p>
              </div>
              <div
                class="makeStyles-benefitsListRow-5"
              >
                <div
                  style="display: inline-block; max-width: 100%; overflow: hidden; position: relative; box-sizing: border-box; margin: 0px;"
                >
                  <div
                    style="box-sizing: border-box; display: block; max-width: 100%;"
                  >
                    <img
                      alt=""
                      aria-hidden="true"
                      role="presentation"
                      src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4="
                      style="max-width: 100%; display: block; margin: 0px; padding: 0px;"
                    />
                  </div>
                  <noscript />
                  <img
                    class="makeStyles-benefitsListRowElement-6 makeStyles-invisible-8"
                    decoding="async"
                    src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                    style="position: absolute; top: 0px; left: 0px; bottom: 0px; right: 0px; box-sizing: border-box; padding: 0px; margin: auto; display: block; width: 0px; height: 0px; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%;"
                  />
                </div>
                <p
                  class="MuiTypography-root makeStyles-benefitsListRowElement-6 makeStyles-disabledBenefit-7 MuiTypography-body1"
                >
                  Benefit row 3
                </p>
              </div>
            </div>
          </div>
          <div
            class="makeStyles-item-3"
          >
            <hr
              class="makeStyles-responsiveHr-9"
            />
          </div>
          <div
            class="makeStyles-item-3"
          >
            <button
              class="MuiButtonBase-root MuiButton-root MuiButton-outlined MuiButton-outlinedSecondary"
              tabindex="0"
              type="button"
            >
              <span
                class="MuiButton-label"
              >
                Request Access
              </span>
              <span
                class="MuiTouchRipple-root"
              />
            </button>
          </div>
        </div>
      </div>
    `);
  });
});
