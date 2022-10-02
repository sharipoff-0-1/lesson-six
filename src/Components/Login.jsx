import { ThemeProvider } from "styled-components";
import facebook from "../assets/facebook.svg";
import google from "../assets/google.svg";
import React, { Component } from "react";
import {
  Wrapper,
  Title,
  Paragraph,
  Input,
  ForgotPassword,
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

export default class Login extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Wrapper>
          <TitleWrapper>
            <Title type="true">Login</Title>
            <Span>|</Span>
            <Title>Register</Title>
          </TitleWrapper>
          <Paragraph>Enter your username and password to login.</Paragraph>
          <form action="#">
            <Input type="email" placeholder="Example@gmail.com" />
            <Input type="password" placeholder="Password" />
          </form>
          <ForgotPassword>Forgot Password?</ForgotPassword>
          <MainButton onClick={() => this.props.getSwitch(false)}>
            Login
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
