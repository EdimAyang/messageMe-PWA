import styled from "styled-components";
import {
  SearchIcon,
  PhoneCallIcon,
  UserCircle2Icon,
  SettingsIcon,
  LucideMessageCircleMore,
} from "lucide-react";
import { SwipeableItem } from "@/lib/ui/swipable";
import { ConversationCard } from "@/components/conversationCard";
import { PATHS } from "@/routes/paths";
import { NavLink, useNavigate } from "react-router-dom";
import { Fragment } from "react/jsx-runtime";

const Conversations = [
  {
    image: "/images/headerimg.png",
    name: "Samantha Smith",
    lastMsg: "Good morning",
    time: "10 min ago",
    unreadMsg: "1",
  },
  {
    image: "/images/headerimg.png",
    name: "Ose David",
    lastMsg: "Send your details",
    time: "1 hour ago",
    unreadMsg: "",
  },
  {
    image: "/images/headerimg.png",
    name: "Nuel Jackson",
    lastMsg: "How are doing?",
    time: "2 min ago",
    unreadMsg: "5",
  },
  {
    image: "/images/headerimg.png",
    name: "Nuel Jackson",
    lastMsg: "How are doing?",
    time: "2 min ago",
    unreadMsg: "5",
  },
  {
    image: "/images/headerimg.png",
    name: "Nuel Jackson",
    lastMsg: "How are doing?",
    time: "2 min ago",
    unreadMsg: "5",
  },
  {
    image: "/images/headerimg.png",
    name: "Nuel Jackson",
    lastMsg: "How are doing?",
    time: "2 min ago",
    unreadMsg: "5",
  },
];

const Navigation = [
  {
    url: PATHS.CHAT.HOME,
    icon: <LucideMessageCircleMore size={24} />,
    name: "Message",
  },
  {
    url: PATHS.CALLS.LOGS,
    icon: <PhoneCallIcon size={24} />,
    name: "Calls",
  },
  {
    url: PATHS.CONTACTS.CONTACTlIST,
    icon: <UserCircle2Icon size={24} />,
    name: "Contacts",
  },
  {
    url: PATHS.SETTINGS.SETTING,
    icon: <SettingsIcon size={24} />,
    name: "Settings",
  },
];

const HomePage = () => {
  const navigate = useNavigate();
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

            <OnlineBadge />
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
          {Conversations.map((c, i) => (
            <SwipeableItem onDelete={() => console.log("deleted")} key={i}>
              <div onClick={() => navigate("/")}>
                <ConversationCard
                  image={c.image}
                  userName={c.name}
                  lastMsg={c.lastMsg}
                  time={c.time}
                  unreadMsg={c.unreadMsg}
                />
              </div>
            </SwipeableItem>
          ))}
        </StyledChatList>

        <BottomNav>
          {Navigation.map((nav, i) => (
            <StyledNavLink to={nav.url} key={i} end>
              {nav.icon}
              <p>{nav.name}</p>
            </StyledNavLink>
          ))}
        </BottomNav>
      </StyledHomePage>
    </>
  );
};

export default HomePage;

const BottomNav = styled.nav`
  width: 100%;
  height: 13%;
  padding-inline: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary};
  padding-block: 15px;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 3;
`;

const StyledNavLink = styled(NavLink)`
  height: 100%;
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 0.5rem;
  color: ${({ theme }) => theme.colors.textSecondary};

  text-decoration: none;
  transition: 0.2s ease;

  &.active {
    color: ${({ theme }) => theme.colors.secondary};
    background: ${({ theme }) => `${theme.colors.secondary}15`};
  }
`;

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
  position: relative;

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
  height: 60%;
  background-color: ${({ theme }) => theme.colors.primary};
  padding-inline: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
  border-radius: 50px 50px 0 0;
  overflow: auto;
  padding-bottom: 4rem;
  padding-top: 15rem;
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

// const StatusText = styled.p`
//   color: ${({ theme }) => theme.colors.primary};
//   overflow:auto;
// `;
