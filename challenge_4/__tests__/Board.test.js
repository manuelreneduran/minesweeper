import React from 'react';
import { shallow, mount } from 'enzyme';
import Board from '../client/components/Board.jsx';
import renderer from 'react-test-renderer';
import { createBoard } from '../client/helpers/index.js';

describe('<Board/>', () => {
  var board = createBoard(board);
  it('should render correctly with props', () => {
    const wrapper = shallow(<Board board={board}/>);
    jestExpect(wrapper).toMatchSnapshot();
  });


});