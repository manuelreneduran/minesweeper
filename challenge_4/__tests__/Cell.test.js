import React from 'react';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import sinon from 'sinon';
import Cell from '../client/components/Cell.jsx';
import { createBoard } from '../client/helpers/index.js';

describe('<Cell />', () => {
  it('should render correctly with props', () => {
    var board = createBoard();
    const wrapper = shallow(<Cell cell={board[0][0]} row={0} column={0}/>);
    jestExpect(wrapper).toMatchSnapshot();
  })

  // it('should not render a value if a mine is clicked', () => {
  //   var board = [[-3, 0, 0], [0, 0, 0]];
  //   const wrapper = shallow(<Cell cell={board[0][0]}/>);
  //   expect(wrapper.find('-3')).to.have.lengthOf(0);
  //   expect(wrapper.find('div')).to.not.have.lengthOf(1);
  // })

  it('should render a value if a tile not containing a mine is clicked', () => {
    var board = [[-3, 1, 0], [0, 0, 0]];
    const wrapper = shallow(<Cell cell={board[0][1]}/>);
    expect(wrapper.find('div').find({ style: null })).to.have.lengthOf(1);
    expect(wrapper.find('div').find({ style: null })).to.not.have.lengthOf(0);
  })
})