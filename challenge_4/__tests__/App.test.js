import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../client/App.jsx';
import renderer from 'react-test-renderer';
import sinon from 'sinon';
import { expect } from 'chai';



describe('<App/>', () => {
  it('should render correctly with no props', () => {
    const wrapper = shallow(<App />);
    jestExpect(wrapper).toMatchSnapshot();
  });

  it('calls componentDidMount', () => {
    sinon.spy(App.prototype, 'componentDidMount');
    const wrapper = mount(<App />);
    expect(App.prototype.componentDidMount).contains.property('callCount', 1);
    App.prototype.componentDidMount.restore();
  });
});