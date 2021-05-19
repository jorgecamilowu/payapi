import 'jest-canvas-mock';
import { configure } from 'enzyme';

const Adapter = require('@wojtekmaj/enzyme-adapter-react-17');

configure({ adapter: new Adapter() });
