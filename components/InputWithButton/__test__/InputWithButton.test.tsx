import React from 'react';
import { mount } from 'enzyme';
import { createShallow } from '@material-ui/core/test-utils';
import { render } from '@testing-library/react';

// system under test
import InputWithButton from '../InputWithButton';

describe('behavioral tests', () => {
  // search terms
  const inputSearch = { 'data-testid': 'input' };
  const btnSearch = { 'data-testid': 'btn' };
  const helperSearch = { 'data-testid': 'helper-text' };
  const errorSearch = { 'data-testid': 'error-text' };

  let shallow: ReturnType<typeof createShallow>;
  beforeEach(() => {
    shallow = createShallow();
  });
  it('should trigger onSubmit method when submitting the form', () => {
    const mockOnSubmit = jest.fn();
    const container = mount(<InputWithButton onSubmit={mockOnSubmit} />);
    container.simulate('submit');
    expect(mockOnSubmit).toHaveBeenCalled();
  });
  it('should render button disabled if an error is present', () => {
    const container = shallow(<InputWithButton error />);
    expect(container.find(btnSearch).props().disabled).toBeTruthy();
  });
  it('should render with defaultValue', () => {
    const container = shallow(<InputWithButton defaultValue="test" />);
    expect(container.find(inputSearch).props().defaultValue).toBe('test');
  });
  it('should render disabled', () => {
    const container = shallow(<InputWithButton disabled />);
    expect(container.find(inputSearch).props().disabled).toBeTruthy();
  });
  it('should render with given button text', () => {
    const container = shallow(<InputWithButton buttonText="test" />);
    expect(container.find(btnSearch).text()).toBe('test');
  });
  it('should render with given helper text', () => {
    const container = shallow(<InputWithButton helperText="test" />);
    expect(container.find(helperSearch).text()).toBe('test');
  });
  it('should render with given error text', () => {
    const container = shallow(<InputWithButton error errorMsg="error" />);
    expect(container.find(errorSearch).exists()).toBeTruthy();
    expect(container.find(errorSearch).text()).toBe('error');
  });
});

describe('snapshot tests', () => {
  it('should render correctly', () => {
    const { container } = render(<InputWithButton />);
    expect(container).toMatchInlineSnapshot(`
      <div>
        <form
          class="makeStyles-root-1"
        >
          <input
            class="makeStyles-input-2"
            data-testid="input"
            value=""
          />
          <button
            class="MuiButtonBase-root MuiButton-root MuiButton-contained makeStyles-button-3 MuiButton-containedPrimary"
            data-testid="btn"
            tabindex="0"
            type="submit"
          >
            <span
              class="MuiButton-label"
            />
            <span
              class="MuiTouchRipple-root"
            />
          </button>
          <p
            class="MuiFormHelperText-root makeStyles-helperTextOffset-4"
            data-testid="helper-text"
          />
        </form>
      </div>
    `);
  });
});
