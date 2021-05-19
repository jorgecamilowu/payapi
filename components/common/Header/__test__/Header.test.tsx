import React from 'react';
import { createShallow } from '@material-ui/core/test-utils';

// system under test
import Header from '../Header';

let shallow: ReturnType<typeof createShallow>;
beforeEach(() => {
  shallow = createShallow();
});

// mock functions
const mockOnCTAClick = jest.fn();

// search terms
const drawerSearch = { 'data-testid': 'drawer' };
const drawerCtaSearch = { 'data-testid': 'drawer-cta' };
const drawerCloseBtnSearch = { 'data-testid': 'drawer-close-btn' };
const ctaBtnSearch = { 'data-testid': 'call-to-action' };
const hamburgerBtnSearch = { 'data-testid': 'hamburger' };

const makeView = (): JSX.Element => <Header onCTAClick={mockOnCTAClick} />;

it('correctly opens/closes drawer when hamburger icon is clicked', () => {
  const container = shallow(makeView());
  container.find(hamburgerBtnSearch).simulate('click');
  expect(container.find(drawerSearch).props().open).toBeTruthy();
  container.find(drawerCloseBtnSearch).simulate('click');
  expect(container.find(drawerSearch).props().open).toBeFalsy();
});

it('correctly calls the parameter function when CTA inside drawer is clicked', () => {
  const container = shallow(makeView());
  container.find(drawerCtaSearch).simulate('click');
  expect(mockOnCTAClick).toHaveBeenCalled();
});

it('correctly calls the parameter function when CTA is clicked', () => {
  const container = shallow(makeView());
  container.find(ctaBtnSearch).simulate('click');
  expect(mockOnCTAClick).toHaveBeenCalled();
});
