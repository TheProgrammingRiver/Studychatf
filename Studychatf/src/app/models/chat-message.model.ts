export interface ChatMessage {
  timestamp: string | number | Date;
  sender: { username: string };
  text: string;
}
