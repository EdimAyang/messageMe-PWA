import styled from "styled-components";
import { SearchIcon } from "lucide-react";
import { SwipeableItem } from "@/lib/ui/swipable";
import { ConversationCard } from "@/components/conversationCard";
import { PATHS } from "@/routes/paths";
import { useNavigate, Link } from "react-router-dom";
import { BottomNav } from "@/components/BottomNav";

export const Conversations = [
  {
    image: "/images/headerimg.png",
    name: "Team Batman",
    lastMsg: "20 members",
    time: "10 min ago",
    unreadMsg: "1",
    isGroup: true,
  },
  {
    image: "/images/headerimg.png",
    name: "Ose David",
    lastMsg: "Send your details",
    time: "1 hour ago",
    unreadMsg: "",
    isGroup: false,
  },
  {
    image: "/images/headerimg.png",
    name: "Nuel Jackson",
    lastMsg: "How are doing?",
    time: "2 min ago",
    unreadMsg: "5",
    isGroup: false,
  },
  {
    image: "/images/headerimg.png",
    name: "Nuel Jackson",
    lastMsg: "How are doing?",
    time: "2 min ago",
    unreadMsg: "5",
    isGroup: false,
  },
  {
    image: "/images/headerimg.png",
    name: "Nuel Jackson",
    lastMsg: "How are doing?",
    time: "2 min ago",
    unreadMsg: "5",
    isGroup: false,
  },
  {
    image: "/images/headerimg.png",
    name: "Nuel Jackson",
    lastMsg: "How are doing?",
    time: "2 min ago",
    unreadMsg: "5",
    isGroup: false,
  },
  {
    image: "/images/headerimg.png",
    name: "Nuel Jackson",
    lastMsg: "How are doing?",
    time: "2 min ago",
    unreadMsg: "5",
    isGroup: false,
  },
  {
    image: "/images/headerimg.png",
    name: "Nuel Jackson",
    lastMsg: "How are doing?",
    time: "2 min ago",
    unreadMsg: "5",
    isGroup: false,
  },
  {
    image: "/images/headerimg.png",
    name: "Nuel Jackson",
    lastMsg: "How are doing?",
    time: "2 min ago",
    unreadMsg: "5",
    isGroup: false,
  },
  {
    image: "/images/headerimg.png",
    name: "Nuel Jackson",
    lastMsg: "How are doing?",
    time: "22 min ago",
    unreadMsg: "5",
    isGroup: false,
  },
  {
    image: "/images/headerimg.png",
    name: "Nuel Jackson",
    lastMsg: "How are doing?",
    time: "22 min ago",
    unreadMsg: "5",
    isGroup: false,
  },
  {
    image: "/images/headerimg.png",
    name: "Nuel Jackson",
    lastMsg: "How are doing?",
    time: "22 min ago",
    unreadMsg: "5",
    isGroup: false,
  },
  {
    image: "/images/headerimg.png",
    name: "Nuel Jackson",
    lastMsg: "How are doing?",
    time: "22 min ago",
    unreadMsg: "5",
    isGroup: false,
  },
  {
    image: "/images/headerimg.png",
    name: "Nuel Jackson",
    lastMsg: "How are doing?",
    time: "22 min ago",
    unreadMsg: "5",
    isGroup: false,
  },
  {
    image: "/images/headerimg.png",
    name: "Nuel Jackson",
    lastMsg: "How are doing?",
    time: "22 min ago",
    unreadMsg: "5",
    isGroup: false,
  },
  {
    image: "/images/headerimg.png",
    name: "Nuel Jackson",
    lastMsg: "How are doing?",
    time: "22 min ago",
    unreadMsg: "5",
    isGroup: false,
  },
  {
    image: "/images/headerimg.png",
    name: "Nuel Jackson",
    lastMsg: "How are doing?",
    time: "22 min ago",
    unreadMsg: "5",
    isGroup: false,
  },
  {
    image: "/images/headerimg.png",
    name: "Nuel Jackson",
    lastMsg: "How are doing?",
    time: "22 min ago",
    unreadMsg: "5",
     isGroup: false,
  },
  {
    image: "/images/headerimg.png",
    name: "Team NightWing",
    lastMsg: "4 members",
    time: "34 min ago",
    unreadMsg: "5",
    isGroup: true,
  },
];

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <>
      <StyledHomePage>
        <Header>
          <SearchWrapper>
            <SearchIcon
              size={24}
              onClick={() => navigate(PATHS.SEARCH.SEARCH)}
            />
          </SearchWrapper>
          <HeaderText>MessageMe</HeaderText>
          <Avatar>
            <img src="/images/headerimg.png" alt="user image" />

            <OnlineBadge />
          </Avatar>
        </Header>

        {/* <StatusUpdateWrapper>
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
        </StatusUpdateWrapper> */}

        <StyledChatList>
          {Conversations.map((c, i) => (
            <SwipeableItem onDelete={() => console.log("deleted")} key={i}>
              <Link to={PATHS.CHAT.MESSAGE}>
                <ConversationCard
                  image={c.image}
                  userName={c.name}
                  lastMsg={c.lastMsg}
                  time={c.time}
                  unreadMsg={c.unreadMsg}
                />
              </Link>
            </SwipeableItem>
          ))}
        </StyledChatList>
        <BottomNav />
      </StyledHomePage>
    </>
  );
};

export default HomePage;

const StyledHomePage = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.primary};
`;

const Header = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  top: 2rem;
  background-color: none;
  color: ${({ theme }) => theme.colors.background};
  background-color: ${({ theme }) => theme.colors.primary};
  padding-inline: 2rem;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 30;
`;

const SearchWrapper = styled.div`
  border-radius: 50%;
  border: 1px solid #000;
  background: transparent;
  width: 35px;
  height: 35px;
  padding: 5px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeaderText = styled.h2`
  color: ${({ theme }) => theme.colors.background};
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

// const StatusAvatar = styled.div`
//   width: 70px;
//   height: 70px;
//   border-radius: 50%;

//   img {
//     width: 100%;
//     height: 100%;
//     object-fit: cover;
//   }
// `;
// const StatusUpdateWrapper = styled.div`
//   width: 100%;
//   height: auto;
//   padding-left: 4rem;
//   overflow: auto;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   gap: 1rem;
//   margin-top: 4rem;
//   margin-bottom: 2rem;
//   scrollbar-width: none; /* Firefox */
//   -ms-overflow-style: none; /* IE and old Edge */
// `;

// const StatusUpdate = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   flex-direction: column;
//   gap: 1rem;
// `;

const StyledChatList = styled.section`
  background-color: ${({ theme }) => theme.colors.primary};
  padding-inline: 20px;
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
  overflow: auto;
  padding-top: 130px;
  padding-bottom: 130px;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE and old Edge */
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
