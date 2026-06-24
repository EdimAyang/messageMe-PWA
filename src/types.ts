export interface Message {
  id: string;
  senderId: string;
  senderName: string;
  senderAvatar: string;
  isMine: boolean;
  isGroup?:boolean;
  createdAt: string;

  type: "text" | "audio";

  content?: string;
  audioUrl?: string;
  duration?: number;
}
