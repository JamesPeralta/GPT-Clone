import React, { useState } from 'react';
import Chat from './Chat';
import InputBox from './InputBox';

import './NovaGpt.css';

import type { ChatMessage } from '../types/ChatMessage';
import { AppBar, Typography, Divider } from '@mui/material';

const NovaGpt: React.FC<{}> = () => {
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([]);

  return (
    <div className="content-wrapper">
      <AppBar className="app-bar" position="relative">
        <Typography variant="h6">Nova GPT</Typography>
      </AppBar>
      <Chat chatHistory={chatHistory} />
      <Divider sx={{
        margin: '5px 0px',
      }}/>
      <InputBox chatHistory={chatHistory} setChatHistory={setChatHistory} />
    </div>
  );
};

export default NovaGpt;
