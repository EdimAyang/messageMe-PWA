import styled from "styled-components";

const Splash = () => {
  return (
    <>
      <StyledSplashScreen>
        <Logo>
          <img src="/logo.png" alt="messageMe logo" />
        </Logo>
      </StyledSplashScreen>
    </>
  );
};

export default Splash;

const StyledSplashScreen = styled.div`
width:100%,
height:100vh;

`;

const Logo = styled.div`
  height: 100vh;
  width:50%;
  display:flex;
  justify-content:center;
  align-items:center;
  margin:0 auto;


  img {
    object-fit: cover;
    width: 100%;
  }
`;
