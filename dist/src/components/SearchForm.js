import React, { Component } from "react";
import {
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { withRouter } from "react-router-dom";
import Gallery from "./Gallery";

class SearchForm extends Component {
  state = {
    query: ""
  };
  onChange = e => {
    this.setState({
      query: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.history.push(`/search/${this.state.query}`);
    this.props.handleSearch(this.state.query);
  };

  render() {
    return (
      <div>
        <Form onSubmit={this.onSubmit}>
          <FormGroup>
            <Row>
              <Col xs="9">
                <Input
                  type="search"
                  name="search"
                  id="search"
                  placeholder="Search"
                  onChange={this.onChange}
                />
              </Col>
              <Col xs="3">
                <Button>
                  <FontAwesomeIcon icon={faSearch} />
                </Button>
              </Col>
            </Row>
          </FormGroup>
        </Form>
      </div>
    );
  }
}

export default withRouter(SearchForm);
