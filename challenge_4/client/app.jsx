import React, { Component } from 'react';
import { createBoard, setHiddenMines, handleCellOpen, recursivelyOpen } from './helpers/index.js';
import Board from './components/Board.jsx';
import './style.css';
import { connect } from "react-redux";
import { setBoard, setCoords } from './redux/actions/index.js';
import Zoom from 'react-reveal/Zoom';


const mapStateToProps = state => {
  return {
    board: state.board,
    clickedCoord: state.clickedCoord
  };
};

function mapDispatchToProps(dispatch) {
  return {
    setBoard: board => dispatch(setBoard(board)),
    setCoords: coords => dispatch(setCoords(coords))
  };
}

class ConnectedApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      board: null,
      clickedCoord: null
    };
    this.cellClickHandler = this.cellClickHandler.bind(this);
  }

  componentDidMount() {
    var board = createBoard();
    //redux
    this.props.setBoard(board);
    // this.setState({
    //   board
    // })
  }

  cellClickHandler(e) {
    e.persist()
    var target = e.target;
    var y = parseInt(target.attributes[3].value);
    var x = parseInt(target.attributes[2].value);
    var value = parseInt(target.attributes[4].value);

    //redux
    this.props.setCoords([y, x]);
    //for testing
    var board = handleCellOpen(this.props.board, y, x, value, 0);
    board = recursivelyOpen(board);
    //redux
    this.props.setBoard(board);

  }

  render() {
    return (
      <>
      <Zoom>
        <div id="title-container">
          <h1 id="title">MineSweeper</h1>
        </div>
        <div id="board">
          {this.props.board ? <Board cellClickHandler={this.cellClickHandler} /> : null}
        </div>
      </Zoom>

      </>
    )
  }
}



const App = connect(mapStateToProps, mapDispatchToProps)(ConnectedApp);

export default App;
