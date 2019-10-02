import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import App from '../client/App.jsx';
import Board from '../client/Board.jsx';
import renderer from 'react-test-renderer';

// it('renders correctly', () => {
//   const tree = renderer
//     .create(<App/>)
//     .toJSON();
//   expect(tree).toMatchSnapshot();
// });

describe('<App/>', () => {

  it('should render correctly with no props', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a board', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find(Board)).toHaveLength(1);
  })
});