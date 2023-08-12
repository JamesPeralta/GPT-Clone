import React, { useState } from 'react';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';

import { askAQuestion } from '../utils/askAQuestion';

import './InputBox.css';

type InputBox = {
  setChatHistory: React.Dispatch<React.SetStateAction<string[]>>;
};

const InputBox: React.FC<InputBox> = ({ setChatHistory }) => {
  const [currentMessage, setCurrentMessage] = useState('');
  const [isSendingMessage, setIsSendingMessage] = useState(false);

  const onSendMessage = async () => {
    setChatHistory((prevHistory) => [currentMessage, ...prevHistory]);

    setIsSendingMessage(true);
    const { role, content: gptAnswer } =
      (await askAQuestion(currentMessage)) || {};

    if (role && gptAnswer) {
      setChatHistory((prevHistory) => [gptAnswer, ...prevHistory]);
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
      <Button variant="text" disabled={isSendingMessage} onClick={onSendMessage}>
        Submit Text
      </Button>
    </Container>
  );
};
export default InputBox;
