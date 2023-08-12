import React, { useState } from 'react';
import { TextField, Button, Container, Divider } from '@mui/material';
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
    <Container maxWidth="lg" sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
    }}>
      <TextField
        id="standard-multiline-static"
        label="Ask a question"
        multiline
        maxRows={8}
        variant="outlined"
        value={currentMessage}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setCurrentMessage(event.target.value);
        }}
        size='medium'
        disabled={isSendingMessage}
        fullWidth={true}
      />
      <Button
        variant="outlined"
        disabled={isSendingMessage}
        onClick={onSendMessage}
        sx={{
          marginLeft: '15px'
        }}
      >
        Send
      </Button>
    </Container>
  );
};
export default InputBox;
