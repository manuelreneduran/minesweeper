import React from 'react';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import { createBoard } from '../client/helpers/index.js';
import Board from '../client/components/Board.jsx';
import Row from '../client/components/Row.jsx';

describe('<Board/>', () => {
  var board = createBoard(board);
  it('should render correctly with props', () => {
    const wrapper = shallow(<Board board={board}/>);
    jestExpect(wrapper).toMatchSnapshot();
  });
  it('renders ten <Row /> components', () => {
    const wrapper = shallow(<Board board={board}/>);
    expect(wrapper.find(Row)).to.have.lengthOf(10);    expect(wrapper.find(Row)).to.not.have.lengthOf(9);

  });

});