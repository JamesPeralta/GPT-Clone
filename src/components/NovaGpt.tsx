import React, { useState } from 'react';
import Chat from './Chat';
import InputBox from './InputBox';

import './NovaGpt.css';

import type { ChatMessage } from '../types/ChatMessage';
import { AppBar, Typography, Divider, LinearProgress } from '@mui/material';

const NovaGpt: React.FC<{}> = () => {
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([]);
  const [isSendingMessage, setIsSendingMessage] = useState(false);

  return (
    <div className="content-wrapper">
      <AppBar className="app-bar" position="relative">
        <Typography variant="h6">Nova GPT</Typography>
      </AppBar>
      <Chat chatHistory={chatHistory} />
      {isSendingMessage && (
        <LinearProgress
          sx={{ margin: '0px 1vw', height: '10px' }}
          color="success"
        />
      )}
      <Divider
        sx={{
          margin: '5px 0px',
        }}
      />
      <InputBox
        chatHistory={chatHistory}
        setChatHistory={setChatHistory}
        isSendingMessage={isSendingMessage}
        setIsSendingMessage={setIsSendingMessage}
      />
    </div>
  );
};

export default NovaGpt;
