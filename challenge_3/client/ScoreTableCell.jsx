import React, {Component} from 'react';

export default class ScoreTableCell extends Component {
  constructor(props) {
    super(props);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.props.activeFrame === "frameOne" ? true : false;
  }

  render() {
    return (
      <tbody>
          <tr>
            <td>{this.props.rollOne}</td>
            <td>{this.props.rollTwo}</td>
          </tr>
          <tr>
            <td>{this.props.frameTotal}</td>
          </tr>
      </tbody>
    )
  }
}
