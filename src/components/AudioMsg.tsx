import styled from "styled-components";
import { useRef, useState, useEffect } from "react";
import type { Message } from "@/types";
import { PlayIcon, PauseIcon } from "lucide-react";
import { formatTime } from "@/utils/dates";

interface AudioProps {
  message: Message;
}

export const AudioMessage: React.FC<AudioProps> = ({ message }) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState("0:00");

  const toggleAudio = async () => {
    const audio = audioRef.current;

    if (!audio) return;

    if (audio.paused) {
      await audio.play();
    } else {
      audio.pause();
    }
  };

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    const handlePlay = () => setIsPlaying(true);

    const handlePause = () => setIsPlaying(false);

    const handleTimeUpdate = () => {
      const percentage = (audio.currentTime / audio.duration) * 100 || 0;

      setProgress(percentage);

      const minutes = Math.floor(audio.currentTime / 60);
      const seconds = Math.floor(audio.currentTime % 60);

      setCurrentTime(`${minutes}:${seconds.toString().padStart(2, "0")}`);
    };

    const handleEnded = () => {
      setIsPlaying(false);
      setProgress(0);
    };

    audio.addEventListener("play", handlePlay);
    audio.addEventListener("pause", handlePause);
    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("play", handlePlay);
      audio.removeEventListener("pause", handlePause);
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("ended", handleEnded);
    };
  }, []);

  return (
    <AudioMessageContainer $isMine={message.isMine}>
      <AudioBubble $isMine={message.isMine}>
        <PlayButton onClick={toggleAudio} $isMine={message.isMine}>
          {isPlaying ? (
            <PauseIcon size={17} className="icon" />
          ) : (
            <PlayIcon size={17} className="icon" />
          )}
        </PlayButton>

        <Waveform>
          <Progress $progress={progress} $isMine={message.isMine} />
        </Waveform>

        <Duration>{currentTime}</Duration>

        <audio ref={audioRef} src={message.audioUrl} preload="metadata" />
      </AudioBubble>

      <Timestamp>{formatTime(message.createdAt)}</Timestamp>
    </AudioMessageContainer>
  );
};

const Duration = styled.span`
  min-width: 40px;

  font-size: ${({ theme }) => theme.typography.caption?.size || "12px"};

  color: ${({ theme }) => theme.colors.textSecondary};
`;

const Timestamp = styled.span`
  margin-top: 4px;

  font-size: ${({ theme }) => theme.typography.timestamp.size};

  color: ${({ theme }) => theme.colors.textSecondary};
`;

const AudioMessageContainer = styled.div<{ $isMine: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: ${({ $isMine }) => ($isMine ? "flex-end" : "flex-start")};
  margin-bottom: 12px;
`;

const AudioBubble = styled.div<{ $isMine?: boolean }>`
  display: flex;
  align-items: center;
  gap: 12px;

  padding: 12px 16px;

  border-radius: ${({ $isMine }) =>
    $isMine ? "20px 0 20px 20px" : "0 20px 20px 20px"};

  width: 240px;

  background: ${({ theme, $isMine }) =>
    $isMine ? theme.colors.secondary : theme.colors.message};

  color: ${({ theme, $isMine }) =>
    $isMine ? theme.colors.primary : theme.colors.text};

  .icon {
    fill: ${({ theme, $isMine }) =>
      $isMine ? theme.colors.secondary : theme.colors.message};
    stroke: ${({ theme, $isMine }) =>
      $isMine ? theme.colors.secondary : theme.colors.message};
  }
`;

const PlayButton = styled.button<{ $isMine?: boolean }>`
  padding: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 50%;

  cursor: pointer;
  background: ${({ theme, $isMine }) =>
    $isMine ? theme.colors.message : theme.colors.secondary};
`;

const Waveform = styled.div`
  flex: 1;
  height: 4px;

  border-radius: 999px;

  background: rgba(0, 0, 0, 0.1);

  position: relative;
`;

const Progress = styled.div<{ $progress: number; $isMine?: boolean }>`
  width: ${({ $progress }) => $progress}%;

  height: 100%;

  border-radius: inherit;

  background: ${({ theme, $isMine }) =>
    $isMine ? theme.colors.primary : theme.colors.secondary};

  color: ${({ theme, $isMine }) =>
    $isMine ? theme.colors.primary : theme.colors.text};
`;
