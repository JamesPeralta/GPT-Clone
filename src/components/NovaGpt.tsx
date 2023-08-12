import React, { useState } from 'react';

import Chat from './Chat';
import InputBox from './InputBox';

import './NovaGpt.css';

const NovaGpt: React.FC<{}> = () => {
  const [chatHistory, setChatHistory] = useState<string[]>([]);

  return (
    <div className="content-wrapper">
      <Chat chatHistory={chatHistory} />
      <InputBox setChatHistory={setChatHistory}/>
    </div>
  );
};

export default NovaGpt;
