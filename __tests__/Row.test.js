import React from 'react';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import sinon from 'sinon';
import Row from '../client/components/Row.jsx';
import Cell from '../client/components/Cell.jsx';
import { createBoard } from '../client/helpers/index.js';


describe('<Row/>', () => {
  it('should render correctly with props', () => {
    var board = createBoard();
    const wrapper = shallow(<Row row={board[0]}/>);
    jestExpect(wrapper).toMatchSnapshot();
  })

  it('should render 10 <Cell /> components', () => {
    var board = createBoard();
    const wrapper = shallow(<Row row={board[0]}/>);
    expect(wrapper.find(Cell)).to.have.lengthOf(10);    expect(wrapper.find(Cell)).to.not.have.lengthOf(9);
  })
})