import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../client/App.jsx';
import Board from '../client/components/Board.jsx';
import renderer from 'react-test-renderer';
import sinon from 'sinon';
import store from "../client/redux/store/index";
import { Provider } from "react-redux";




describe('<App/>', () => {
  it('should render correctly with no props', () => {
    const wrapper = shallow(<Provider store={store}><App /></Provider>);
    jestExpect(wrapper).toMatchSnapshot();
  });

});