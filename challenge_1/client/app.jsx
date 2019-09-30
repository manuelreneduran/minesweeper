import React from 'react';
import Header from './components/Header.jsx';
import Canvas from './components/Canvas.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: null
    };

    this.searchChangeHandler = this.searchChangeHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  searchChangeHandler(e) {
    this.setState({
      search: e.target.value
    })
  }

  onSubmitHandler(e) {
    e.preventDefault();
    axios.get('/events?q=greece&_limit=10&_page=5')
      .then(resp => {
          console.log(resp.data);
      })
      .catch(error => {
          console.log(error);
      });
  }

  render() {
    return (
      <div>
        <Header searchChangeHandler={this.searchChangeHandler} onSubmitHandler={this.onSubmitHandler}/>
        <Canvas/>
      </div>
    )
  }
}

export default App;