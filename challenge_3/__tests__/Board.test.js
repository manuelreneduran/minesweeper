import React from 'react';
import Board from '../client/Board.jsx';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';


describe('<Board/>', () => {

  it('should render correctly with no props', () => {
    const wrapper = shallow(<Board />);
    expect(wrapper).toMatchSnapshot();
  });

});