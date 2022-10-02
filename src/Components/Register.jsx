import { ThemeProvider } from "styled-components";
import facebook from "../assets/facebook.svg";
import google from "../assets/google.svg";
import React, { Component } from "react";
import {
  Wrapper,
  Title,
  Paragraph,
  Input,
  MainButton,
  SecondaryButton,
  Text,
  TitleWrapper,
  Span,
} from "./styled/LogReg.styled";

const theme = {
  colors: {
    mainButton: "#46a358",
    secondaryButton: "transparent",
    mainColor: "#fff",
    secondaryColor: "#727272",
  },
};

export default class Register extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Wrapper>
          <TitleWrapper>
            <Title>Login</Title>
            <Span>|</Span>
            <Title type="true">Register</Title>
          </TitleWrapper>
          <Paragraph>Enter your email and password to register.</Paragraph>
          <form action="#">
            <Input type="name" placeholder="Username" />
            <Input type="email" placeholder="Example@gmail.com" />
            <Input type="password" placeholder="Password" />
            <Input type="password" placeholder="Confirm Password" />
          </form>
          <MainButton onClick={() => this.props.getSwitch(true)}>
            Register
          </MainButton>
          <Text>Or login with</Text>
          <SecondaryButton>
            <img className="logo" src={google} />
            Login with Google
          </SecondaryButton>
          <SecondaryButton>
            <img className="logo" src={facebook} />
            Login with Facebook
          </SecondaryButton>
        </Wrapper>
      </ThemeProvider>
    );
  }
}
