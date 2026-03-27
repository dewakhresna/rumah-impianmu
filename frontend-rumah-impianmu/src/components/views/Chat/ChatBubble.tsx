import { Avatar } from "@heroui/react";
import { Message } from "./types.js";

interface ChatBubbleProps {
  message: Message;
}

export default function ChatBubble({ message }: ChatBubbleProps) {
  const isUser = message.role === "user";

  return (
    <div
      className={`flex items-start gap-2 max-w-[85%] ${
        isUser ? "self-end flex-row-reverse" : ""
      }`}
    >
      {!isUser && (
        <Avatar
          src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
          size="sm"
          className="mt-1 shrink-0"
        />
      )}

      <div
        className={`p-3 text-sm shadow-sm ${
          isUser
            ? "bg-blue-600 text-white rounded-2xl rounded-tr-sm"
            : "bg-white border border-slate-100 text-slate-700 rounded-2xl rounded-tl-sm"
        }`}
      >
        {message.text}
      </div>
    </div>
  );
}