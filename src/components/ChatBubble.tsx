import React from 'react';
import { Paper, Avatar, CardContent, Typography } from '@mui/material';
import ReactMarkdown from 'react-markdown';

import './ChatBubble.css';

import type { ChatMessage } from '../types/ChatMessage';

type ChatBubbleProps = {
  message: ChatMessage;
};

const ChatBubble: React.FC<ChatBubbleProps> = ({ message }) => (
  <Paper variant="outlined">
    <CardContent className="message-box">
      <Avatar
        className="avatar"
        alt="Remy Sharp"
        src="../images/nova-logo.png"
      />
      <Typography component={ReactMarkdown} variant="body1">
        {message.content}
      </Typography>
    </CardContent>
  </Paper>
);

export default ChatBubble;
