import React from 'react';
import { shallow } from 'enzyme';
import App from '../client/App.jsx';
import renderer from 'react-test-renderer';


describe('<App/>', () => {
  it('should render correctly with no props', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });
});