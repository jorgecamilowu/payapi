import React from 'react';
import { render } from '@testing-library/react';

// system under test
import Footer from '../Footer';

it('should render correctly', () => {
  const { container } = render(<Footer />);
  expect(container).toMatchInlineSnapshot(`
    <div>
      <div>
        <div
          class="makeStyles-root-1"
        >
          <div
            class="makeStyles-bgCircle-7"
          >
            <img
              src="/shared/desktop/bg-pattern-circle.svg"
            />
          </div>
          <div
            class="makeStyles-logo-2"
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
                  src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTM1IiBoZWlnaHQ9IjM4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIvPg=="
                  style="max-width: 100%; display: block; margin: 0px; padding: 0px;"
                />
              </div>
              <noscript />
              <img
                decoding="async"
                src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                style="position: absolute; top: 0px; left: 0px; bottom: 0px; right: 0px; box-sizing: border-box; padding: 0px; margin: auto; display: block; width: 0px; height: 0px; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%;"
              />
            </div>
          </div>
          <div
            class="makeStyles-links-3"
          >
            <div
              class="makeStyles-link-6"
            >
              <div
                aria-disabled="false"
                class="MuiButtonBase-root MuiListItem-root MuiListItem-gutters MuiListItem-button"
                role="button"
                tabindex="0"
              >
                <p
                  class="MuiTypography-root MuiTypography-body1"
                >
                  Pricing
                </p>
                <span
                  class="MuiTouchRipple-root"
                />
              </div>
            </div>
            <div
              class="makeStyles-link-6"
            >
              <div
                aria-disabled="false"
                class="MuiButtonBase-root MuiListItem-root MuiListItem-gutters MuiListItem-button"
                role="button"
                tabindex="0"
              >
                <p
                  class="MuiTypography-root MuiTypography-body1"
                >
                  About
                </p>
                <span
                  class="MuiTouchRipple-root"
                />
              </div>
            </div>
            <div
              class="makeStyles-link-6"
            >
              <div
                aria-disabled="false"
                class="MuiButtonBase-root MuiListItem-root MuiListItem-gutters MuiListItem-button"
                role="button"
                tabindex="0"
              >
                <p
                  class="MuiTypography-root MuiTypography-body1"
                >
                  Contact
                </p>
                <span
                  class="MuiTouchRipple-root"
                />
              </div>
            </div>
          </div>
          <div
            class="makeStyles-iconItems-4"
          >
            <button
              class="MuiButtonBase-root MuiIconButton-root makeStyles-icon-5"
              tabindex="0"
              type="button"
            >
              <span
                class="MuiIconButton-label"
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
                      src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIi8+"
                      style="max-width: 100%; display: block; margin: 0px; padding: 0px;"
                    />
                  </div>
                  <noscript />
                  <img
                    decoding="async"
                    src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                    style="position: absolute; top: 0px; left: 0px; bottom: 0px; right: 0px; box-sizing: border-box; padding: 0px; margin: auto; display: block; width: 0px; height: 0px; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%;"
                  />
                </div>
              </span>
              <span
                class="MuiTouchRipple-root"
              />
            </button>
            <button
              class="MuiButtonBase-root MuiIconButton-root makeStyles-icon-5"
              tabindex="0"
              type="button"
            >
              <span
                class="MuiIconButton-label"
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
                      src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIi8+"
                      style="max-width: 100%; display: block; margin: 0px; padding: 0px;"
                    />
                  </div>
                  <noscript />
                  <img
                    decoding="async"
                    src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                    style="position: absolute; top: 0px; left: 0px; bottom: 0px; right: 0px; box-sizing: border-box; padding: 0px; margin: auto; display: block; width: 0px; height: 0px; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%;"
                  />
                </div>
              </span>
              <span
                class="MuiTouchRipple-root"
              />
            </button>
            <button
              class="MuiButtonBase-root MuiIconButton-root makeStyles-icon-5"
              tabindex="0"
              type="button"
            >
              <span
                class="MuiIconButton-label"
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
                      src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIi8+"
                      style="max-width: 100%; display: block; margin: 0px; padding: 0px;"
                    />
                  </div>
                  <noscript />
                  <img
                    decoding="async"
                    src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                    style="position: absolute; top: 0px; left: 0px; bottom: 0px; right: 0px; box-sizing: border-box; padding: 0px; margin: auto; display: block; width: 0px; height: 0px; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%;"
                  />
                </div>
              </span>
              <span
                class="MuiTouchRipple-root"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  `);
});
