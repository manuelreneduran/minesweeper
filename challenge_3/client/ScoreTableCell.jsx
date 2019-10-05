import React, {Component} from 'react';

class ScoreTableCell extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rollOne: undefined,
      rollTwo: undefined,
      frameTotal: undefined
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.frameName === this.props.currentFrame  && !this.state.rollOne) {
      this.setState({
        rollOne: this.props.rollOne,
        rollTwo: this.props.rollTwo,
        frameTotal: this.props.frameTotal
      })
    } else if (this.props.frameName === this.props.currentFrame  && this.props.rollTwo > 0 && (prevProps.rollTwo === 0 || prevProps.rollTwo === undefined)) {
      this.setState({
        rollOne: this.props.rollOne,
        rollTwo: this.props.rollTwo,
        frameTotal: this.props.frameTotal
      })
    }
  }

  render() {
    let { frameName, currentFrame, frameTotal, rollOne, rollTwo } = this.props;

    return (
      <tbody id={this.props.frameName}>
          <tr>
            <td>
              <p>{frameName === currentFrame ? rollOne : this.state.rollOne}</p>
            </td>
            <td>
              <p>{frameName === currentFrame ? rollTwo : this.state.rollTwo}</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>{frameName === currentFrame ? frameTotal : this.state.frameTotal}</p>
            </td>
          </tr>
      </tbody>
    )
  }

}

export default ScoreTableCell;