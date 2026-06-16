import styled from "styled-components";
import {
  ArrowLeftIcon,
  PhoneIcon,
  VideoIcon,
  CameraIcon,
  PaperclipIcon,
  MicIcon,
  SendHorizontalIcon,
  ArrowBigDownDashIcon,
} from "lucide-react";
import { Link } from "react-router-dom";
import { PATHS } from "@/routes/paths";
import { MessageItem } from "@/components/messageItem";
import type { Message } from "@/types";
import {
  shouldShowDateDivider,
  shouldShowSenderInfo,
  shouldShowTimestamp,
} from "@/utils/dates";
import { formatMessageDate } from "@/utils/dates";
import { Fragment } from "react/jsx-runtime";
import { useRef, useEffect, useState } from "react";

const messages: Message[] = [
  {
    id: "1",
    senderId: "john",
    senderName: "John Abraham",
    senderAvatar: "/images/messagemsg.png",
    content: "Hey 👋",
    createdAt: "2026-05-20T08:15:00Z",
    isMine: false,
    type: "text",
    audioUrl: "",
    duration: 12,
  },
  {
    id: "2",
    senderId: "john",
    senderName: "John Abraham",
    senderAvatar: "/images/messagemsg.png",
    content: "How's the MessageMe project going?",
    createdAt: "2026-05-20T08:15:20Z",
    isMine: false,
    type: "text",
    audioUrl: "",
    duration: 12,
  },
  {
    id: "3",
    senderId: "me",
    senderName: "Me",
    senderAvatar: "",
    content: "Morning ☀️",
    createdAt: "2026-05-20T08:18:00Z",
    isMine: true,
    type: "text",
    audioUrl: "",
    duration: 12,
  },
  {
    id: "4",
    senderId: "me",
    senderName: "Me",
    senderAvatar: "",
    content: "Still planning the architecture.",
    createdAt: "2026-05-20T08:18:40Z",
    isMine: true,
    type: "text",
    audioUrl: "",
    duration: 12,
  },
  {
    id: "5",
    senderId: "john",
    senderName: "John Abraham",
    senderAvatar: "/images/messagemsg.png",
    content: "Smart move 👍",
    createdAt: "2026-05-20T08:20:00Z",
    isMine: false,
    type: "text",
    audioUrl: "",
    duration: 12,
  },

  {
    id: "6",
    senderId: "john",
    senderName: "John Abraham",
    senderAvatar: "/images/messagemsg.png",
    content: "Did you decide on Socket.IO or native WebSockets?",
    createdAt: "2026-05-25T15:05:00Z",
    isMine: false,
    type: "text",
    audioUrl: "",
    duration: 12,
  },
  {
    id: "7",
    senderId: "me",
    senderName: "Me",
    senderAvatar: "",
    content: "Native WebSockets 🚀",
    createdAt: "2026-05-25T15:12:00Z",
    isMine: true,
    type: "text",
    audioUrl: "",
    duration: 12,
  },
  {
    id: "8",
    senderId: "me",
    senderName: "Me",
    senderAvatar: "",
    content: "I want to understand the protocol better.",
    createdAt: "2026-05-25T15:12:20Z",
    isMine: true,
    type: "text",
    audioUrl: "",
    duration: 12,
  },
  {
    id: "9",
    senderId: "john",
    senderName: "John Abraham",
    senderAvatar: "/images/messagemsg.png",
    content: "Respect 😎",
    createdAt: "2026-05-25T15:15:00Z",
    isMine: false,
    type: "text",
    audioUrl: "",
    duration: 12,
  },

  {
    id: "10",
    senderId: "me",
    senderName: "Me",
    senderAvatar: "",
    content: "Authentication is done 🎉",
    createdAt: "2026-06-01T10:00:00Z",
    isMine: true,
    type: "text",
    audioUrl: "",
    duration: 12,
  },
  {
    id: "11",
    senderId: "me",
    senderName: "Me",
    senderAvatar: "",
    content: "Using Zustand for state management.",
    createdAt: "2026-06-01T10:00:30Z",
    isMine: true,
    type: "text",
    audioUrl: "",
    duration: 12,
  },
  {
    id: "12",
    senderId: "john",
    senderName: "John Abraham",
    senderAvatar: "/images/messagemsg.png",
    content: "Nice choice.",
    createdAt: "2026-06-01T10:02:00Z",
    isMine: false,
    type: "text",
    audioUrl: "",
    duration: 12,
  },
  {
    id: "13",
    senderId: "john",
    senderName: "John Abraham",
    senderAvatar: "/images/messagemsg.png",
    content: "Persist middleware?",
    createdAt: "2026-06-01T10:02:20Z",
    isMine: false,
    type: "text",
    audioUrl: "",
    duration: 12,
  },
  {
    id: "14",
    senderId: "me",
    senderName: "Me",
    senderAvatar: "",
    content: "Yep. Token storage survives refreshes.",
    createdAt: "2026-06-01T10:04:00Z",
    isMine: true,
    type: "text",
    audioUrl: "",
    duration: 12,
  },

  {
    id: "15",
    senderId: "john",
    senderName: "John Abraham",
    senderAvatar: "/images/messagemsg.png",
    content: "How's the UI coming along?",
    createdAt: "2026-06-07T18:30:00Z",
    isMine: false,
    type: "text",
    audioUrl: "",
    duration: 12,
  },
  {
    id: "16",
    senderId: "me",
    senderName: "Me",
    senderAvatar: "",
    content: "Finished onboarding and splash screen.",
    createdAt: "2026-06-07T18:45:00Z",
    isMine: true,
    type: "text",
    audioUrl: "",
    duration: 12,
  },
  {
    id: "17",
    senderId: "me",
    senderName: "Me",
    senderAvatar: "",
    content: "Currently building the chat list screen.",
    createdAt: "2026-06-07T18:45:40Z",
    isMine: true,
    type: "text",
    audioUrl: "",
    duration: 12,
  },
  {
    id: "18",
    senderId: "john",
    senderName: "John Abraham",
    senderAvatar: "/images/messagemsg.png",
    content: "The swipe-to-delete feature?",
    createdAt: "2026-06-07T18:50:00Z",
    isMine: false,
    type: "text",
    audioUrl: "",
    duration: 12,
  },
  {
    id: "19",
    senderId: "me",
    senderName: "Me",
    senderAvatar: "",
    content: "Exactly 😂",
    createdAt: "2026-06-07T18:52:00Z",
    isMine: true,
    type: "text",
    audioUrl: "",
    duration: 12,
  },

  {
    id: "20",
    senderId: "john",
    senderName: "John Abraham",
    senderAvatar: "/images/messagemsg.png",
    content: "Did you get it working?",
    createdAt: "2026-06-12T13:20:00Z",
    isMine: false,
    type: "text",
    audioUrl: "",
    duration: 12,
  },
  {
    id: "21",
    senderId: "me",
    senderName: "Me",
    senderAvatar: "",
    content: "After fighting CSS for 2 hours 😭",
    createdAt: "2026-06-12T13:25:00Z",
    isMine: true,
    type: "text",
    audioUrl: "",
    duration: 12,
  },
  {
    id: "22",
    senderId: "me",
    senderName: "Me",
    senderAvatar: "",
    content: "Finally got the drag gesture working.",
    createdAt: "2026-06-12T13:25:40Z",
    isMine: true,
    type: "text",
    audioUrl: "",
    duration: 12,
  },
  {
    id: "23",
    senderId: "john",
    senderName: "John Abraham",
    senderAvatar: "/images/messagemsg.png",
    content: "That's software development in one sentence 🤣",
    createdAt: "2026-06-12T13:28:00Z",
    isMine: false,
    type: "text",
    audioUrl: "",
    duration: 12,
  },

  {
    id: "24",
    senderId: "john",
    senderName: "John Abraham",
    senderAvatar: "/images/messagemsg.png",
    content: "What are you working on today?",
    createdAt: "2026-06-14T09:25:00Z",
    isMine: false,
    type: "text",
    audioUrl: "",
    duration: 12,
  },
  {
    id: "25",
    senderId: "me",
    senderName: "Me",
    senderAvatar: "",
    content: "Conversation screen.",
    createdAt: "2026-06-14T09:26:00Z",
    isMine: true,
    type: "text",
    audioUrl: "",
    duration: 12,
  },
  {
    id: "26",
    senderId: "me",
    senderName: "Me",
    senderAvatar: "",
    content: "Grouping messages, timestamps and date dividers.",
    createdAt: "2026-06-14T09:26:20Z",
    isMine: true,
    type: "text",
    audioUrl: "",
    duration: 12,
  },
  {
    id: "27",
    senderId: "john",
    senderName: "John Abraham",
    senderAvatar: "/images/messagemsg.png",
    content: "Ahh, the details users notice immediately 👌",
    createdAt: "2026-06-14T09:28:00Z",
    isMine: false,
    type: "text",
    audioUrl: "",
    duration: 12,
  },
  {
    id: "28",
    senderId: "me",
    senderName: "Me",
    senderAvatar: "",
    content: "Exactly. I'm trying to make it feel like WhatsApp.",
    createdAt: "2026-06-14T09:30:00Z",
    isMine: true,
    type: "text",
    audioUrl: "",
    duration: 12,
  },
  {
    id: "29",
    senderId: "john",
    senderName: "John Abraham",
    senderAvatar: "/images/messagemsg.png",
    content: "You're getting close 🔥",
    createdAt: "2026-06-14T09:35:00Z",
    isMine: false,
    type: "text",
    audioUrl: "",
    duration: 12,
  },
  {
    id: "30",
    senderId: "john",
    senderName: "John Abraham",
    senderAvatar: "/images/messagemsg.png",
    content: "Can't wait to test the first beta 🚀",
    createdAt: "2026-06-14T09:35:30Z",
    isMine: false,
    type: "text",
    audioUrl: "",
    duration: 12,
  },
   {
    id: "31",
    senderId: "john",
    senderName: "John Abraham",
    senderAvatar: "/images/messagemsg.png",
    createdAt: "2026-06-14T09:35:30Z",
    isMine: true,
    type: "audio",
    audioUrl: "/audio/audioTest.ogg",
    duration: 12,
  },
];

const MessagePage = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const [isAtBottom, setIsAtBottom] = useState(true);
  const [unreadCount, setUnreadCount] = useState(0);
  const [textContent, setTextContent] = useState("");
  // const [messages, setMessages] = useState<Message[]>([]);

  const handleScroll = () => {
    const el = containerRef.current;

    if (!el) return;

    const atBottom = el.scrollHeight - el.scrollTop - el.clientHeight < 80;

    setIsAtBottom(atBottom);

    if (atBottom) {
      setUnreadCount(0);
    }
  };

  const scrollToBottom = () => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  };

  useEffect(() => {
    handleScroll();
    if (isAtBottom) {
    } else {
      setUnreadCount((count) => count + 1);
    }
  }, [messages]);

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    e.target.style.height = "auto";
    e.target.style.height = `${e.target.scrollHeight}px`;
  };

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setMessages((prev) => [
  //       ...prev,
  //       {
  //         id: crypto.randomUUID(),
  //         senderId: "john",
  //         senderName: "John Abraham",
  //         senderAvatar: "/images/messagemsg.png",
  //         content: `Random message ${Date.now()}`,
  //         createdAt: new Date().toISOString(),
  //         isMine: false,
  //       },
  //     ]);
  //   }, 4000);

  //   return () => clearInterval(interval);
  // }, []);

  return (
    <>
      <StyledMessagePage>
        <ConversationHeader>
          <Link to={PATHS.CHAT.HOME}>
            <ArrowLeftIcon size={24} />
          </Link>

          <LeftContentWrapper>
            <LeftContent>
              <Avatar>
                <img src="/images/messagemsg.png" alt="profile" />
                <OnlineBadge />
              </Avatar>

              <LeftContentText>
                <h3>John Abraham</h3>
                <p>Active now</p>
              </LeftContentText>
            </LeftContent>

            <RightContent>
              <PhoneIcon size={24} />
              <VideoIcon size={24} />
            </RightContent>
          </LeftContentWrapper>
        </ConversationHeader>

        <MessagesContainer ref={containerRef} onScroll={() => handleScroll()}>
          {messages.map((message, index) => {
            const nextMessage = messages[index + 1];
            const previousMessage = messages[index - 1];

            return (
              <Fragment key={message.id}>
                {shouldShowDateDivider(message, previousMessage) && (
                  <DateDivider>
                    <span>{formatMessageDate(message.createdAt)}</span>
                  </DateDivider>
                )}
                <MessageItem
                  key={message.id}
                  message={message}
                  showTimeStamp={shouldShowTimestamp(message, nextMessage)}
                  showSenderInfo={shouldShowSenderInfo(
                    message,
                    previousMessage,
                    
                  )}
                />
              </Fragment>
            );
          })}
          <div ref={bottomRef} />
        </MessagesContainer>

        {unreadCount > 0 && <NewMessageBadge>{unreadCount}</NewMessageBadge>}
        {!isAtBottom && (
          <NewMessageButton onClick={scrollToBottom}>
            <ArrowBigDownDashIcon size={24} />
          </NewMessageButton>
        )}

        <MessageComposer>
          <PaperclipIcon size={24} />{" "}
          <TextArea
            rows={1}
            placeholder="Write your message"
            onInput={() => handleInput}
            onChange={(e) => setTextContent(e.target.value)}
          />
          {textContent ? (
            <SendButton>
              <SendHorizontalIcon size={24} />
            </SendButton>
          ) : (
            <MediaLeftContent>
              <CameraIcon size={24} />
              <MicIcon size={24} />
            </MediaLeftContent>
          )}
        </MessageComposer>
      </StyledMessagePage>
    </>
  );
};

export default MessagePage;

const SendButton = styled.button`
  border-radius: 50%;
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.secondary};

  color: ${({ theme }) => theme.colors.primary};
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
`;
const MediaLeftContent = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
`;
const MessageComposer = styled.div`
  position: fixed;
  bottom: 0;
  height: 90px;
  width: 100%;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;

  background: ${({ theme }) => theme.colors.primary};
  box-shadow: ${({ theme }) => theme.shadows.md};
  padding-inline: 20px;
`;

const TextArea = styled.textarea`
  flex: 1;

  border: none;
  outline: none;
  resize: none;

  background: transparent;

  font-size: 16px;

  min-height: 24px;
  max-height: 120px;

  overflow-y: auto;

  font-family: inherit;
  padding: 12px;
  background-color: #f3f6f6;
  border-radius: 15px;
  &::placeholder {
    font-size: ${({ theme }) => theme.typography.bodySm.size};
    padding-top: 1.5px;
  }
`;

const NewMessageBadge = styled.div`
  position: fixed;
  padding: 9px;
  border-radius: 50%;
  color: ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.secondary};
  box-shadow: ${({ theme }) => theme.shadows.md};

  z-index: 999;
  right: 13px;

  bottom: 150px;

  border: none;
  outline: none;
  display: flex;
  align-items: center;
  height: auto;
`;
const NewMessageButton = styled.button`
  position: fixed;

  right: 10px;

  bottom: 100px;

  border: none;
  outline: none;

  padding: 5px;

  border-radius: 50%;

  background-color: ${({ theme }) => theme.colors.secondary};

  color: ${({ theme }) => theme.colors.primary};
  display: flex;
  align-items: center;

  cursor: pointer;

  box-shadow: ${({ theme }) => theme.shadows.md};

  z-index: 999;
`;

const DateDivider = styled.div`
  text-align: center;
  margin: 2rem;
  span {
    color: ${({ theme }) => theme.colors.text};
    background-color: ${({ theme }) => theme.colors.message};
    padding: 7px;
    border-radius: 8px;
    font-weight: 700;

    font-size: ${({ theme }) => theme.typography.bodySm.size};
  }
`;

const MessagesContainer = styled.div`
  padding-top: 80px;
  padding-bottom: 130px;
  display: flex;
  flex: 1;
  flex-direction: column;

  overflow-y: auto;
`;

const StyledMessagePage = styled.div`
  width: 100%;
  height: 100vh;
  padding-inline: 20px;
  display: flex;
  flex-direction: column;
`;

const ConversationHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  z-index: 20;
  position: fixed;
  box-shadow: ${({ theme }) => theme.shadows.sm};
  top: 0;
  left: 0;
  padding-block: 10px;
  padding-inline: 20px;
  height: 90px;
  background-color: ${({ theme }) => theme.colors.primary};
`;

const LeftContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  gap: 2rem;
`;
const LeftContent = styled.div`
  flex: 1;
  display: flex;
  gap: 1rem;
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
  height: auto;
  display: flex;
  justify-content: center;
  gap: 1rem;
`;
const OnlineBadge = styled.span`
  background-color: ${({ theme }) => theme.colors.success};
  width: 10px;
  height: 10px;
  border-radius: 50%;
  position: absolute;
  right: 10%;
  bottom: 6px;
`;
