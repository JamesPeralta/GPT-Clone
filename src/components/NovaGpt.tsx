import React, { useState } from 'react';
import Chat from './Chat';
import InputBox from './InputBox';

import './NovaGpt.css';

import type { ChatMessage } from '../types/ChatMessage';

const NovaGpt: React.FC<{}> = () => {
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([]);

  return (
    <div className="content-wrapper">
      <Chat chatHistory={chatHistory} />
      <InputBox chatHistory={chatHistory} setChatHistory={setChatHistory}/>
    </div>
  );
};

export default NovaGpt;
