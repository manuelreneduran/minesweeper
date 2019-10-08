import React from 'react';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import sinon from 'sinon';
import Row from '../client/components/Row.jsx';
import { createBoard } from '../client/helpers/index.js';


describe('<Row/>', () => {
  it('should render correctly with props', () => {
    var board = createBoard();
    const wrapper = shallow(<Row row={board[0]}/>);
    jestExpect(wrapper).toMatchSnapshot();
  })
})