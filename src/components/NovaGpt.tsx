import React, { useState } from 'react';
import Chat from './Chat';
import InputBox from './InputBox';

import './NovaGpt.css';

import type { ChatMessage } from '../types/ChatMessage';
import {
  AppBar,
  Typography,
  Divider,
  SvgIcon,
  Toolbar,
  IconButton,
} from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
// @ts-ignore
import { ReactComponent as NovaLogo } from '../images/logo.svg';
import Settings from './Settings';

const NovaGpt: React.FC<{}> = () => {
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([]);
  const [isSendingMessage, setIsSendingMessage] = useState(false);
  const [open, setOpen] = useState(false);

  // Settings
  const [context, setContext] = React.useState<number>(10);
  const [temperature, setTemperature] = React.useState<number>(100);
  const [maxTokens, setMaxTokens] = React.useState<number>(256);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="content-wrapper">
      <AppBar position="relative">
        <Toolbar sx={{ display: 'flex', justifyContent: 'center' }}>
          <SvgIcon component={NovaLogo} viewBox="0 0 35 35" color="primary" />
          <Typography variant="h6" sx={{ marginLeft: '4px' }}>
            Nova GPT
          </Typography>
          <IconButton
            aria-label="settings"
            sx={{ color: 'white', ml: 'auto' }}
            onClick={handleClickOpen}
          >
            <SettingsIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Chat chatHistory={chatHistory} isSendingMessage={isSendingMessage} />
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
        messageOptions={{ context, temperature: temperature / 100, maxTokens }}
      />
      <Settings
        open={open}
        onClose={handleClose}
        context={context}
        temperature={temperature}
        maxTokens={maxTokens}
        setContext={setContext}
        setTemperature={setTemperature}
        setMaxTokens={setMaxTokens}
      />
    </div>
  );
};

export default NovaGpt;
