import styled from "styled-components";

interface Props {
  image: string;
  userName: string;
  lastMsg: string;
  time: string;
  unreadMsg: string;
}
export const ConversationCard: React.FC<Props> = ({
  image,
  unreadMsg,
  lastMsg,
  time,
  userName,
}) => {
  return (
    <>
      <StyledChatItem>
        <LeftContent>
          <Avatar>
            <img src={image} alt="avatar image" />
            <OnlineBadge />
          </Avatar>
          <LeftContentText>
            <h3>{userName}</h3>
            <p>{lastMsg}</p>
          </LeftContentText>
        </LeftContent>

        <RightContent>
          <p>{time}</p>
          <MessageBadge>{unreadMsg}</MessageBadge>
        </RightContent>
      </StyledChatItem>
    </>
  );
};

const StyledChatItem = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background};
  z-index: 2;
  position: relative;
  padding-inline: 10px;
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

  p, h3 {
    color: ${({ theme }) => theme.colors.textSecondary};
  }
`;

const RightContent = styled.div`
  width: auto;
  height: 100%;
  display: flex;
  justify-content: start;
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

const OnlineBadge = styled.span`
  background-color: ${({ theme }) => theme.colors.success};
  width: 10px;
  height: 10px;
  border-radius: 50%;
  position: absolute;
  right: 10%;
  bottom: 1px;
`;

const Avatar = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
