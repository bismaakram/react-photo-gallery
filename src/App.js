import React, { Component, Fragment } from "react";
import AppNavbar from "./components/AppNavbar";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import Gallery from "./components/Gallery";
import "./App.css";
import SearchForm from "./components/SearchForm";
import { Row } from "reactstrap";
import { Route, BrowserRouter as Router } from "react-router-dom";
import NoResults from "./components/NoResults";
class App extends Component {
  state = {
    photos: [],
    query: ""
  };

  fetchPhotos = query => {
    if (query) {
      axios
        .get(
          `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${process.env.REACT_APP_FLICKR_API_KEY}&tags=${query}&sort=relevance&per_page=24&format=json&nojsoncallback=1`
        )
        .then(res => {
          this.setState({
            photos: res.data.photos.photo
          });
        });
    } else {
      return null;
    }
  };

  handleSearch = query => {
    this.setState({
      query: query
    });
  };
  render() {
    return (
      <div className="App">
        <Router>
          <Route
            exact
            path="/"
            render={() => {
              return (
                <Fragment>
                  <AppNavbar handleSearch={this.handleSearch} />
                  {this.fetchPhotos("beach")}
                  <Row>
                    <Gallery photos={this.state.photos} />
                  </Row>
                </Fragment>
              );
            }}
          ></Route>

          <Route
            exact
            path={`/search/${this.state.query}`}
            render={() => {
              if (this.state.query !== "")
                return (
                  <Fragment>
                    <AppNavbar handleSearch={this.handleSearch} />
                    {this.fetchPhotos(`${this.state.query}`)}
                    <Row>
                      <Gallery photos={this.state.photos} />
                    </Row>
                  </Fragment>
                );
              else {
                return (
                  <Fragment>
                    <AppNavbar handleSearch={this.handleSearch}></AppNavbar>
                    <NoResults></NoResults>
                  </Fragment>
                );
              }
            }}
          ></Route>
          <Route
            exact
            path="/beaches"
            render={() => {
              return (
                <Fragment>
                  <AppNavbar handleSearch={this.handleSearch} />
                  {this.fetchPhotos("beach")}
                  <Row>
                    <Gallery photos={this.state.photos} />
                  </Row>
                </Fragment>
              );
            }}
          ></Route>
          <Route
            exact
            path="/mountains"
            render={() => {
              return (
                <Fragment>
                  <AppNavbar handleSearch={this.handleSearch} />
                  {this.fetchPhotos("mountains")}
                  <Row>
                    <Gallery photos={this.state.photos} />
                  </Row>
                </Fragment>
              );
            }}
          ></Route>
          <Route
            exact
            path="/lakes"
            render={() => {
              return (
                <Fragment>
                  <AppNavbar handleSearch={this.handleSearch} />
                  {this.fetchPhotos("lakes")}
                  <Row>
                    <Gallery photos={this.state.photos} />
                  </Row>
                </Fragment>
              );
            }}
          ></Route>
        </Router>
      </div>
    );
  }
}

export default App;
