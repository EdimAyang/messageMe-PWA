import type { ChangeEvent, Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import {
  // CameraIcon,
  PaperclipIcon,
  MicIcon,
  SendHorizontalIcon,
} from "lucide-react";

interface Props {
  textContent: string;
  setTextContent: Dispatch<SetStateAction<string>>;
  handleInput: (e: ChangeEvent<HTMLTextAreaElement, Element>) => void;
  onStartRecording: Dispatch<SetStateAction<boolean>>
}

export const MessageComposer: React.FC<Props> = ({
  textContent,
  setTextContent,
  handleInput,
  onStartRecording
}) => {
  

  return (
    <Composer>
      <PaperclipIcon size={24}  stroke="#000" />{" "}
      <TextArea
        rows={1}
        placeholder="Write your message"
        onInput={() => handleInput}
        onChange={(e) => setTextContent(e.target.value)}
      />
      {textContent ? (
        <SendButton>
          <SendHorizontalIcon size={24} stroke="#ffff" />
        </SendButton>
      ) : (
        <MediaLeftContent>
          {/* <CameraIcon size={24} stroke="#000" /> */}
          <MicButton
          onClick={()=>onStartRecording(true)}
          >
            <MicIcon size={24} stroke="#000" />
          </MicButton>
        </MediaLeftContent>
      )}
    </Composer>
  );
};

const MicButton = styled.button`
  height: auto;
  width: auto;
  outline:none;
  border:none;
  background:none;
`;

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
const Composer = styled.div`
  position: fixed;
  bottom: 0;
  height: 11%;
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

  font-size: 16px;

  min-height: 24px;
  max-height: 120px;

  overflow-y: auto;

  font-family: inherit;
  padding: 12px;
  background-color: ${({ theme }) => theme.colors.input};
  border-radius: 15px;
  &::placeholder {
    font-size: ${({ theme }) => theme.typography.bodySm.size};
    padding-top: 1.5px;
  }
`;
