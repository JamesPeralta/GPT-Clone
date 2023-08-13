import React from 'react';
import { Paper, Avatar, CardContent, Typography } from '@mui/material';
import ReactMarkdown from 'react-markdown';
import { ChatCompletionRequestMessageRoleEnum } from 'openai';
import { deepOrange, green } from '@mui/material/colors';
import SmartToyOutlinedIcon from '@mui/icons-material/SmartToyOutlined';

import './ChatBubble.css';

// @ts-ignore
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import type { ChatMessage } from '../types/ChatMessage';

type ChatBubbleProps = {
  message: ChatMessage;
};

const GptAvatar = () => (
  <Avatar
    className="avatar"
    alt="GPT"
    sx={{ width: 40, height: 40, bgcolor: green[500] }}
  >
    <SmartToyOutlinedIcon />
  </Avatar>
);

const UserAvatar = () => (
  <Avatar
    className="avatar"
    alt="You"
    sx={{ bgcolor: deepOrange[500], width: 40, height: 40 }}
  >
    U
  </Avatar>
);

const ChatBubble: React.FC<ChatBubbleProps> = ({ message }) => (
  <Paper variant="outlined">
    <CardContent className="message-box">
      {message.role === ChatCompletionRequestMessageRoleEnum.Assistant ? (
        <GptAvatar />
      ) : (
        <UserAvatar />
      )}
      <Paper elevation={0}>
        <ReactMarkdown
          children={message.content as string}
          components={{
            code({ node, inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || '');
              return !inline && match ? (
                <SyntaxHighlighter
                  {...props}
                  children={String(children).replace(/\n$/, '')}
                  language={match[1]}
                  PreTag="div"
                />
              ) : (
                <code {...props} className={className}>
                  {children}
                </code>
              );
            },
          }}
        />
      </Paper>
    </CardContent>
  </Paper>
);

export default ChatBubble;
