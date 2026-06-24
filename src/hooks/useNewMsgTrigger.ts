import type { Message } from "@/types";
import { useState, useRef, useEffect } from "react";



export const useNewMsgTrigger = (messages :Message[]) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const [isAtBottom, setIsAtBottom] = useState(true);
  const [unreadCount, setUnreadCount] = useState(0);

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

 return {scrollToBottom, unreadCount, isAtBottom, handleScroll, bottomRef, containerRef}
};
