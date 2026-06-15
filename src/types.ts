export interface Message {
  id: string;
  senderId: string;
  senderName: string;
  senderAvatar: string;
  content: string;
  isMine: boolean;
  createdAt:string;
  
}