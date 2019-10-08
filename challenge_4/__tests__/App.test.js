import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../client/App.jsx';
import Board from '../client/components/Board.jsx';
import renderer from 'react-test-renderer';
import sinon from 'sinon';



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

  it('sets a board in state', () => {
    const wrapper = mount(<App />);
    const componentInstance = wrapper.instance();
    componentInstance.componentDidMount();
    expect(wrapper.state('board')).to.be.an('Array');
    })

  it('captures coordinates from click', () => {
    const wrapper = mount(<App />);
    expect(wrapper.find('#cell-0-0').length).to.equal(1);
    wrapper.find('#cell-0-0').simulate('click');
    expect(wrapper.state('clickedCoord')).to.deep.equal([0, 0]);
  })
});