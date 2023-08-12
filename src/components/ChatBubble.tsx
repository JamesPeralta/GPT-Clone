import React from 'react';

import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import ReactMarkdown from 'react-markdown';

import './ChatBubble.css';

type ChatBubbleProps = {
  message: string;
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
        {message}
      </Typography>
    </CardContent>
  </Paper>
);

export default ChatBubble;
