export interface Message {
  id: number;
  role: "user" | "admin";
  text: string;
}