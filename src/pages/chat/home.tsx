import styled from "styled-components";
import { SearchIcon } from "lucide-react";

const HomePage = () => {
  return (
    <>
      <StyledHomePage>
        <Header>
          <SearchWrapper>
            <SearchIcon size={24} />
          </SearchWrapper>
          <HeaderText>Home</HeaderText>
          <Avatar>
            <img src="/images/headerimg.png" alt="user image" />
          </Avatar>
        </Header>

        <StatusUpdateWrapper>
          <StatusUpdate>
            <StatusAvatar>
              <img src="/images/headerimg.png" alt="user image" />
            </StatusAvatar>
          </StatusUpdate>

          <StatusUpdate>
            <StatusAvatar>
              <img src="/images/headerimg.png" alt="user image" />
            </StatusAvatar>
          </StatusUpdate>

          <StatusUpdate>
            <StatusAvatar>
              <img src="/images/headerimg.png" alt="user image" />
            </StatusAvatar>
          </StatusUpdate>

          <StatusUpdate>
            <StatusAvatar>
              <img src="/images/headerimg.png" alt="user image" />
            </StatusAvatar>
          </StatusUpdate>

          <StatusUpdate>
            <StatusAvatar>
              <img src="/images/headerimg.png" alt="user image" />
            </StatusAvatar>
          </StatusUpdate>
        </StatusUpdateWrapper>

        <StyledChatList>
          <StyledChatItem>
            <LeftContent>
              <Avatar>
                <img src="/images/headerimg.png" alt="user image" />
              </Avatar>

              <LeftContentText>
                <h3>Nuel Jackson</h3>
                <p>how are you today</p>
              </LeftContentText>
            </LeftContent>

            <RightContent>
              <p>2 min ago</p>
              <MessageBadge>3</MessageBadge>
            </RightContent>
          </StyledChatItem>

          <StyledChatItem>
            <LeftContent>
              <Avatar>
                <img src="/images/headerimg.png" alt="user image" />
              </Avatar>

              <LeftContentText>
                <h3>Nuel Jackson</h3>
                <p>how are you today</p>
              </LeftContentText>
            </LeftContent>

            <RightContent>
              <p>2 min ago</p>
              <MessageBadge>3</MessageBadge>
            </RightContent>
          </StyledChatItem>

          <StyledChatItem>
            <LeftContent>
              <Avatar>
                <img src="/images/headerimg.png" alt="user image" />
              </Avatar>

              <LeftContentText>
                <h3>Nuel Jackson</h3>
                <p>how are you today</p>
              </LeftContentText>
            </LeftContent>

            <RightContent>
              <p>2 min ago</p>
              <MessageBadge>3</MessageBadge>
            </RightContent>
          </StyledChatItem>

          <StyledChatItem>
            <LeftContent>
              <Avatar>
                <img src="/images/headerimg.png" alt="user image" />
              </Avatar>

              <LeftContentText>
                <h3>Nuel Jackson</h3>
                <p>how are you today</p>
              </LeftContentText>
            </LeftContent>

            <RightContent>
              <p>2 min ago</p>
              <MessageBadge>3</MessageBadge>
            </RightContent>
          </StyledChatItem>

          <StyledChatItem>
            <LeftContent>
              <Avatar>
                <img src="/images/headerimg.png" alt="user image" />
              </Avatar>

              <LeftContentText>
                <h3>Jack sams</h3>
                <p>how are you today</p>
              </LeftContentText>
            </LeftContent>

            <RightContent>
              <p>30 min ago</p>
              <MessageBadge>7</MessageBadge>
            </RightContent>
          </StyledChatItem>

          <StyledChatItem>
            <LeftContent>
              <Avatar>
                <img src="/images/headerimg.png" alt="user image" />
              </Avatar>

              <LeftContentText>
                <h3>Nuel Jackson</h3>
                <p>how are you today</p>
              </LeftContentText>
            </LeftContent>

            <RightContent>
              <p>2 min ago</p>
              <MessageBadge>3</MessageBadge>
            </RightContent>
          </StyledChatItem>

          <StyledChatItem>
            <LeftContent>
              <Avatar>
                <img src="/images/headerimg.png" alt="user image" />
              </Avatar>

              <LeftContentText>
                <h3>Nuel Jackson</h3>
                <p>how are you today</p>
              </LeftContentText>
            </LeftContent>

            <RightContent>
              <p>10 min ago</p>
              <MessageBadge>10</MessageBadge>
            </RightContent>
          </StyledChatItem>
        </StyledChatList>
      </StyledHomePage>
    </>
  );
};

export default HomePage;

const StyledHomePage = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.background};
`;

const Header = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  top: 2rem;
  background-color: none;
  color: ${({ theme }) => theme.colors.primary};
  padding-inline: 2rem;
`;

const SearchWrapper = styled.div`
  border-radius: 50%;
  border: 1px solid #ffffff;
  background: transparent;
  width: auto;
  height: auto;
  padding: 10px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeaderText = styled.h2`
  color: ${({ theme }) => theme.colors.primary};
`;

const Avatar = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const StatusAvatar = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const StatusUpdateWrapper = styled.div`
  width: 100%;
  height: auto;
  padding-left: 4rem;
  overflow: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-top: 4rem;
  margin-bottom: 2rem;
`;

const StatusUpdate = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
`;

const StyledChatList = styled.section`
  width: 100%;
  height: 450px;
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
  border-radius: 50px 50px 0 0;

  overflow: auto;
`;

const StyledChatItem = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LeftContent = styled.div`
  flex: 1;
  display: flex;
  gap: 1rem;
`;

const LeftContentText = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 0.2rem;

  p {
    color: ${({ theme }) => theme.colors.textSecondary};
  }
`;

const RightContent = styled.div`
  width: auto;
  display: flex;
  justify-content: center;
  align-items: end;
  flex-direction: column;
  p {
    color: ${({ theme }) => theme.colors.textSecondary};
  }
  gap: 0.5rem;
`;

const MessageBadge = styled.span`
  width: 25px;
  height: 25px;
  padding: 5px;
  color: ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.secondary};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
`;

// const StatusText = styled.p`
//   color: ${({ theme }) => theme.colors.primary};
//   overflow:auto;
// `;
