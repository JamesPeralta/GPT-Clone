import React, { useState } from 'react';
import Chat from './Chat';
import InputBox from './InputBox';

import './NovaGpt.css';

import type { ChatMessage } from '../types/ChatMessage';
import {
  AppBar,
  Typography,
  Divider,
  LinearProgress,
  SvgIcon,
  Toolbar,
} from '@mui/material';
// @ts-ignore
import { ReactComponent as NovaLogo } from '../images/logo.svg';

const NovaGpt: React.FC<{}> = () => {
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([]);
  const [isSendingMessage, setIsSendingMessage] = useState(false);

  return (
    <div className="content-wrapper">
      <AppBar position="relative">
        <Toolbar sx={{ display: 'flex', justifyContent: 'center' }}>
          <SvgIcon component={NovaLogo} viewBox="0 0 35 35" color="primary" />
          <Typography variant="h6" sx={{ marginLeft: '4px' }}>
            Nova GPT
          </Typography>
        </Toolbar>
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
