import { useEffect, useRef, useState, type Dispatch, type SetStateAction } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { Send, X, Mic } from "lucide-react";
import toast from "react-hot-toast";

interface AudioRecordingProps {
  onClose: () => void;
  onSend: (audioBlob: Blob, audioUrl: string, duration: number) => void;
  setIsRecording: Dispatch<SetStateAction<boolean>>;
  isRecording:boolean;
}

const AudioRecording = ({ onClose, onSend, setIsRecording, isRecording }: AudioRecordingProps) => {
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);

  const chunksRef = useRef<Blob[]>([]);

  const [duration, setDuration] = useState(0);


  useEffect(() => {
    if (!isRecording) return;

    startRecording();

    return () => {
      stopTracks();
    };
  }, [isRecording]);

  useEffect(() => {
    if (!isRecording) return;

    const interval = setInterval(() => {
      setDuration((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [isRecording]);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: true,
      });

      const recorder = new MediaRecorder(stream);

      mediaRecorderRef.current = recorder;

      chunksRef.current = [];

      recorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          chunksRef.current.push(event.data);
        }
      };

      recorder.start();

      setIsRecording(true);
    } catch (error) {

      onClose();
    }
  };

  const stopTracks = () => {
    mediaRecorderRef.current?.stream
      .getTracks()
      .forEach((track) => track.stop());
  };

  const cancelRecording = () => {
    mediaRecorderRef.current?.stop();

    stopTracks();

    chunksRef.current = [];

    setDuration(0);
    setIsRecording(false);

    onClose();
  };

  const sendRecording = () => {
    const recorder = mediaRecorderRef.current;

    if (!recorder) return;

    recorder.onstop = () => {
      const blob = new Blob(chunksRef.current, {
        type: "audio/webm",
      });

      const audioUrl = URL.createObjectURL(blob);

      onSend(blob, audioUrl, duration);

      stopTracks();

      setDuration(0);
      setIsRecording(false);

      onClose();
    };

    recorder.stop();
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;

    return `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <AnimatePresence>
      {isRecording && (
        <Container
          initial={{
            y: 100,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          exit={{
            y: 100,
            opacity: 0,
          }}
          transition={{
            duration: 0.25,
          }}
        >
          <CancelButton onClick={cancelRecording}>
            <X size={22} />
          </CancelButton>

          <RecordingInfo>
            <Mic size={18} />

            <RecordingText>Recording...</RecordingText>

            <Timer>{formatTime(duration)}</Timer>
          </RecordingInfo>

          <SendButton onClick={sendRecording}>
            <Send size={20} />
          </SendButton>
        </Container>
      )}
    </AnimatePresence>
  );
};

export default AudioRecording;

const Container = styled(motion.div)`
  position: fixed;

  bottom: 20px;
  left: 20px;
  right: 20px;

  height: 70px;

  display: flex;
  align-items: center;
  gap: 1rem;

  padding-inline: 16px;

  border-radius: 20px;

  background: ${({ theme }) => theme.colors.primary};

  box-shadow: ${({ theme }) => theme.shadows.lg};

  z-index: 1000;
`;

const RecordingInfo = styled.div`
  flex: 1;

  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const RecordingText = styled.span`
  color: ${({ theme }) => theme.colors.secondary};

  font-weight: 600;
`;

const Timer = styled.span`
  margin-left: auto;

  font-weight: 700;

  font-variant-numeric: tabular-nums;
`;

const CancelButton = styled.button`
  border: none;

  background: transparent;

  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const SendButton = styled.button`
  width: 48px;
  height: 48px;

  border: none;

  border-radius: 50%;

  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  background: ${({ theme }) => theme.colors.secondary};

  color: white;
`;
