import React from 'react';
import Stack from '@mui/material/Stack';

import ChatBubble from './ChatBubble';

import './Chat.css';

type ChatProps = {
  chatHistory: string[];
};

const Chat: React.FC<ChatProps> = ({ chatHistory }) => (
  <Stack
    className="all-messages"
    direction="column-reverse"
    spacing={2}
  >
    {chatHistory.map((message) => (
      <ChatBubble message={message} />
    ))}
  </Stack>
);

export default Chat;
