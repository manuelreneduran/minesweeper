import React from 'react';
import Header from './components/Header.jsx';
import Canvas from './components/Canvas.jsx';
import Footer from './components/Footer.jsx';
import parse from 'parse-link-header';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: null,
      data: null,
      page: 1,
      links: null
    };

    this.searchChangeHandler = this.searchChangeHandler.bind(this);
    this.searchSubmitHandler = this.searchSubmitHandler.bind(this);
    this.paginationSubmitHandler = this.paginationSubmitHandler.bind(this);
  }

  searchChangeHandler(e) {
    this.setState({
      query: e.target.value
    })
  }

  searchSubmitHandler(e) {
    e.preventDefault();
    this.getPages(this.state.query, this.state.page)
  }

  getPages(q, p) {
    axios.get(`/events?q=${q}&_limit=10&_page=${p}`)
    .then(resp => {
      var parsedLinks = parse(resp.headers.link);
      this.setState({
        data: resp.data,
        links: parsedLinks
      })
    })
    .catch(error => {
        console.log(error);
    });
  }

  paginationSubmitHandler(e) {
    var name = e.target.name;
    var page;

    if (name === "prev") {
      page = this.state.links.prev._page;
    } else if (name === "next") {
      page = this.state.links.next._page;
    } else if (name === "last") {
      page = this.state.links.last._page;
    } else if (name === "first") {
      page = this.state.links.first._page;
    }

    this.getPages(this.state.query, page);
  }

  render() {
    return (
      <div>
        <Header searchChangeHandler={this.searchChangeHandler} searchSubmitHandler={this.searchSubmitHandler}/>
        {this.state.data ? <Canvas data={this.state.data}/> : null}
        {this.state.links ? <Footer paginationSubmitHandler={this.paginationSubmitHandler} links={this.state.links}/> : null}
      </div>
    )
  }
}

export default App;