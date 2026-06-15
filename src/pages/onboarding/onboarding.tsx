import { Button } from "@/components/Button";
import styled from "styled-components";
import { SectionDivider } from "@/lib/ui/divider";


const OnboardingPage = () => {
  return (
    <>
      <StyledOnboarding>
        <OnboardingTextWrapper>
          <h1>
            Connect friends <span>easily & quickly</span>
          </h1>
          <p>
            Our chat app is the perfect way to stay connected with friends and
            family.
          </p>
        </OnboardingTextWrapper>
        <RegistrationIconsWrapper>
          <div>
            <img src="/icons/facebook.svg" alt="facebook icon" />
          </div>
          <div>
            <img src="/icons/google.svg" alt="google icon" />
          </div>
          <div>
            <img src="/icons/apple.svg" alt="apple icon" />
          </div>
        </RegistrationIconsWrapper>

        <SectionDivider label="OR" />

        <Button fullWidth variant="primary">
          Sign up with email
        </Button>

        <ButtonText>
          Existing account? <span>Log in</span>
        </ButtonText>
      </StyledOnboarding>
    </>
  );
};

export default OnboardingPage;

const StyledOnboarding = styled.div`
  background: ${({ theme }) => theme.colors.background};
  width: 100%;
  height: 100vh;
  background-image: url("/Ellipse1.png");
  background-position: top;
  background-size:contain;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-inline: 20px;
  padding-bottom:10px;
`;

const OnboardingTextWrapper = styled.div`
  width: 100%;
  height: auto;

  h1 {
    font-weight: 500;
    font-size: 4.5rem;
    line-height: 5rem;
    text-align: start;
    margin-bottom: 1rem;
    padding-inline: 10px;
    color: ${({ theme }) => theme.colors.primary};
  }
  span {
    font-weight: 700;
  }

  p {
    line-height: 1.5rem;
    color: ${({ theme }) => theme.colors.textSecondary};
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
    border: 1px solid #ffffff;
    background: transparent;
    width: auto;
    height: auto;
    padding: 10px;
    cursor:pointer;
  }
`;

const ButtonText = styled.p`
  margin-top: 35px;

  text-align: center;
  color: ${({ theme }) => theme.colors.textSecondary};

  span {
    font-size: ${({ theme }) => theme.typography.bodySm.size};
    font-weight: ${({ theme }) => theme.typography.h4.weight};
  }
`;
