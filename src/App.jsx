import React, { Component } from "react";
import { Container } from "./Register.styled";
import Login from "./Components/Login.jsx";
import Register from "./Components/Register.jsx";

import "./App.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: true,
    };
  }
  render() {
    const getSwitch = (value) => {
      console.log(value);
      this.setState({ active: value });
    };
    return (
      <Container>
        {this.state.active ? (
          <Login getSwitch={getSwitch} />
        ) : (
          <Register getSwitch={getSwitch} />
        )}
      </Container>
    );
  }
}
