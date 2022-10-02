import styled, { css } from "styled-components";

const Wrapper = styled.div`
  max-width: 30vw;
  margin: 0 auto;
  padding: 3rem 4rem;
  min-height: 60vh;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
`;

const Title = styled.h2`
  font-size: 20px;
  font-weight: 500;
  line-height: 16px;
  color: ${(props) => (props.type === "true" ? "#46a358" : "#3d3d3d")};
`;

const Span = styled.span`
  ${Title}
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 3.4rem;
  width: 50%;
`;

const Paragraph = styled.p`
  width: 100%;
  font-size: 13px;
  line-height: 16px;
  font-weight: 400;
  color: #3d3d3d;
  margin-bottom: 14px;
  text-align: left;
  margin-left: 1.3rem;
`;

const Input = styled.input`
  width: 300px;
  padding: 12px 14px;
  border: 1px solid #eaeaea;
  border-radius: 5px;
  margin-bottom: 1rem;

  &:active {
    outline: none;
  }

  &:focus {
    outline: none;
    border: 2px solid #46a358;
  }
`;

const ForgotPassword = styled.a`
  color: #46a358;
  font-size: 14px;
  line-height: 16px;
  font-weight: 400;
  text-decoration: none;
  align-self: flex-end;
  margin-right: 0.9rem;
  margin-bottom: 1.6rem;
  cursor: pointer;

  &:hover {
    color: #46a358;
  }
`;

const button = css`
  width: 300px;
  background-color: "transparent";
  font-weight: 700;
  color: ${({ theme }) => theme.colors.mainColor};
  border: none;
`;

const MainButton = styled.button`
  ${button}
  background-color: ${({ theme }) => theme.colors.mainButton};
  margin-bottom: 3rem;
`;

const SecondaryButton = styled.button`
  ${button}
  border: 1px solid #EAEAEA;
  color: ${({ theme }) => theme.colors.secondaryColor};
  font-weight: 400;
  font-size: 13px;
  margin-bottom: 0.9rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    border-color: #eaeaea;
  }

  &:active {
    outline: none;
  }

  &:focus {
    outline: none;
    border: 2px solid #46a358;
  }
`;

const Text = styled.p`
  width: 100%;
  font-size: 0.8rem;
  margin-bottom: 1.1rem;
  color: #3d3d3d;
  position: relative;

  &::before {
    content: " ";
    position: absolute;
    left: 0.9rem;
    bottom: 0.7rem;
    width: 100px;
    height: 1px;
    background-color: #eaeaea;
  }
  &::after {
    content: " ";
    position: absolute;
    right: 0.9rem;
    bottom: 0.7rem;
    width: 100px;
    height: 1px;
    background-color: #eaeaea;
  }
`;

export {
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
};
