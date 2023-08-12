import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { askAQuestion } from '../utils/askAQuestion';

import './InputBox.css';

import { ChatCompletionResponseMessageRoleEnum } from 'openai';
import type { ChatMessage } from '../types/ChatMessage';

type InputBoxProps = {
  chatHistory: ChatMessage[];
  setChatHistory: React.Dispatch<React.SetStateAction<ChatMessage[]>>;
};

const InputBox: React.FC<InputBoxProps> = ({ chatHistory, setChatHistory }) => {
  const [currentMessage, setCurrentMessage] = useState('');
  const [isSendingMessage, setIsSendingMessage] = useState(false);

  const onSendMessage = async () => {
    setIsSendingMessage(true);
    setChatHistory((prevHistory) => [
      {
        role: ChatCompletionResponseMessageRoleEnum.User,
        content: currentMessage,
      },
      ...prevHistory,
    ]);
    const answer = await askAQuestion(currentMessage, chatHistory);

    if (answer) {
      setChatHistory((prevHistory) => [answer, ...prevHistory]);
    }

    setCurrentMessage('');
    setIsSendingMessage(false);
  };

  return (
    <Container className="user-input">
      <TextField
        id="standard-multiline-static"
        label="Ask a question"
        multiline
        rows={4}
        variant="standard"
        value={currentMessage}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setCurrentMessage(event.target.value);
        }}
        disabled={isSendingMessage}
      />
      <Button
        variant="text"
        disabled={isSendingMessage}
        onClick={onSendMessage}
      >
        Submit Text
      </Button>
    </Container>
  );
};
export default InputBox;
