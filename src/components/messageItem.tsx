import type { Message } from "@/types";
import styled from "styled-components";
import { formatTime } from "@/utils/dates";
import { AudioMessage } from "@/components/AudioMsg";

interface MessageItemProps {
  message: Message;
  showTimeStamp: boolean;
  showSenderInfo: boolean;
}

export const MessageItem = ({ message }: MessageItemProps) => {
  if (message.type === "audio") {
    return <AudioMessage message={message} />;
  }

  if (message.isMine) {
    return (
      <OutgoingMessage>
        <Bubble $isMine>
          {message.content}
          <TimestampInside>{formatTime(message.createdAt)}</TimestampInside>
        </Bubble>
      </OutgoingMessage>
    );
  }

  return (
    <IncomingMessage>
      <IncomingContent>
        <Bubble>
          {message.content}
          <TimestampInside>{formatTime(message.createdAt)}</TimestampInside>
        </Bubble>
      </IncomingContent>
    </IncomingMessage>
  );
};


// const AvatarSpacer = styled.div`
//   width: 50px;
//   flex-shrink: 0;
// `;

// const AvatarSmall = styled.div`
//   width: 40px;
//   height: 40px;
//   border-radius: 50%;
//   position: relative;

//   img {
//     width: 100%;
//     height: 100%;
//     object-fit: cover;
//   }
// `;



const Bubble = styled.div<{
  $isMine?: boolean;
}>`
  padding: 15px;

  max-width: 280px;

  word-break: break-word;

  background: ${({ theme, $isMine }) =>
    $isMine ? theme.colors.secondary : theme.colors.message};

  color: ${({ theme, $isMine }) =>
    $isMine ? theme.colors.primary : theme.colors.text};

  border-radius: ${({ $isMine }) =>
    $isMine ? "20px 0 20px 20px" : "0 20px 20px 20px"};

  display: flex;
  flex-direction: column;
`;

const OutgoingMessage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  margin-bottom: 1rem;
`;

const IncomingMessage = styled.div`
  display: flex;
  gap: 0.75rem;

  margin-bottom: 1rem;
`;

const IncomingContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

// const SenderName = styled.h4`
//   color: ${({ theme }) => theme.colors.text};

//   font-size: ${({ theme }) => theme.typography.bodySm.size};
//   font-weight: 600;

//   margin: 0;
// `;

//

const TimestampInside = styled.span<{ $isMine?: boolean }>`
  display: block;

  margin-top: 4px;

  text-align: right;

  font-size: 11px;

  opacity: 0.7;

  color: inherit;
`;
