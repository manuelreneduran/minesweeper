import React, {Component} from 'react';

export default class ScoreTableCell extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rollOne: undefined,
      rollTwo: undefined,
      frameTotal: undefined,
    }
  }

  componentDidUpdate() {
    if (this.props.frameName === this.props.activeFrame && !this.state.rollOne) {
      this.setState({
        rollOne: this.props.rollOne
      })
    }
  }


  render() {
    return (
      <tbody>
          <tr>
            <td>
            {this.props.frameName === this.props.activeFrame ? this.props.rollOne : this.state.rollOne}
            </td>
            <td>
            {this.props.frameName === this.props.activeFrame ? this.props.rollTwo : this.state.rollTwo}
            </td>
          </tr>
          <tr>
            <td>
            {this.props.frameName === this.props.activeFrame ? this.props.frameTotal : this.state.frameTotal}
            </td>
          </tr>
      </tbody>
    )
  }
}
