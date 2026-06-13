import styled from "styled-components";
import { ArrowLeftIcon } from "lucide-react";
import { SectionDivider } from "@/lib/ui/divider";
import {
  Input,
  InputErrorMessage,
  InputGroup,
  InputWrapper,
  Label,
  PasswordInput,
} from "@/lib/ui/input";
import { Button } from "@/components/Button";
import { Link } from "react-router-dom";
import { PATHS } from "@/routes/paths";

const RegisterPage = () => {
  return (
    <>
      <StyledRegisterWrapper>
        <BackButtonWrapper>
          <Link to={PATHS.ONBOARDING.ONBOARDING}>
            <ArrowLeftIcon />
          </Link>
        </BackButtonWrapper>

        <LoginTextWrapper>
          <h3>Sign up with Email</h3>

          <p>
            Get chatting with friends and family today, by signing up on
            messageMe
          </p>
        </LoginTextWrapper>

        <RegistrationIconsWrapper>
          <div>
            <img src="/icons/facebook.svg" alt="facebook icon" />
          </div>
          <div>
            <img src="/icons/google.svg" alt="google icon" />
          </div>
          <div>
            <img src="/icons/appleBlack.svg" alt="apple icon" />
          </div>
        </RegistrationIconsWrapper>

        <SectionDivider label="OR" />

        <StyledForm>
          <InputGroup>
            <InputWrapper>
              <Label htmlFor="email">Your Name</Label>
              <Input type="text" />
            </InputWrapper>

            <InputWrapper>
              <Label htmlFor="email" $error={Boolean(true)}>
                Your Email
              </Label>
              <Input type="email" $error={Boolean(true)} />
              <InputErrorMessage>invalid email</InputErrorMessage>
            </InputWrapper>

            <InputWrapper>
              <Label htmlFor="password">Password</Label>
              <PasswordInput />
            </InputWrapper>

            <InputWrapper>
              <Label htmlFor="confirm">Confirm password</Label>
              <PasswordInput />
            </InputWrapper>
          </InputGroup>

          <ButtonWrapper>
            <Button fullWidth variant="secondary" children="Log in" />
          </ButtonWrapper>
        </StyledForm>
      </StyledRegisterWrapper>
    </>
  );
};

export default RegisterPage;

const StyledRegisterWrapper = styled.div`
  width: 100%;
  height: auto;
  color: #000;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.primary};
`;

const BackButtonWrapper = styled.div`
  width: 100%;
  height: auto;
  margin-bottom: 2rem;
`;

const LoginTextWrapper = styled.div`
  text-align: center;
  width: 100%;
  hight: auto;

  p {
    line-height: 1.5rem;
    color: ${({ theme }) => theme.colors.textSecondary};
    padding: 10px;
  }
`;

export const RegistrationIconsWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-block: 20px;
  gap: 15px;

  div {
    border-radius: 50%;
    border: 1px solid #000;
    background: transparent;
    width: auto;
    height: auto;
    padding: 10px;
    cursor: pointer;
  }
`;

const StyledForm = styled.form`
  widht: 100%;
  height: auto;
`;

const ButtonWrapper = styled.div`
  margin-top: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
