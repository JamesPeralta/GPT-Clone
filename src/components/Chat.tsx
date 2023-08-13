import React from 'react';
import { Stack, LinearProgress } from '@mui/material';
import ChatBubble from './ChatBubble';

import './Chat.css';

import type { ChatMessage } from '../types/ChatMessage';

type ChatProps = {
  chatHistory: ChatMessage[];
};

const Chat: React.FC<ChatProps> = ({ chatHistory }) => (
  <Stack className="all-messages" direction="column-reverse" spacing={2}>
    {chatHistory.map((message) => (
      <ChatBubble message={message} />
    ))}
  </Stack>
);

export default Chat;
