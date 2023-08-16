import React, { useState } from 'react';
import { TextField, Button, Container } from '@mui/material';
import { askAQuestion } from '../utils/askAQuestion';

import './InputBox.css';

import { ChatCompletionResponseMessageRoleEnum } from 'openai';
import type { ChatMessage } from '../types/ChatMessage';
import type { MessageOptions } from '../types/MessageOptions';

type InputBoxProps = {
	chatHistory: ChatMessage[];
	isSendingMessage: boolean;
	messageOptions: MessageOptions;
	setChatHistory: React.Dispatch<React.SetStateAction<ChatMessage[]>>;
	setIsSendingMessage: React.Dispatch<React.SetStateAction<boolean>>;
};

const InputBox: React.FC<InputBoxProps> = ({
	chatHistory,
	isSendingMessage,
	messageOptions,
	setChatHistory,
	setIsSendingMessage,
}) => {
	const [currentMessage, setCurrentMessage] = useState('');

	const onSendMessage = async () => {
		setIsSendingMessage(true);
		setChatHistory(prevHistory => [
			{
				role: ChatCompletionResponseMessageRoleEnum.User,
				content: currentMessage,
			},
			...prevHistory,
		]);

		const answer = await askAQuestion(currentMessage, chatHistory, messageOptions);
		if (answer) {
			setChatHistory(prevHistory => [answer, ...prevHistory]);
		}

		setCurrentMessage('');
		setIsSendingMessage(false);
	};

	return (
		<Container className="user-input" maxWidth="lg">
			<TextField
				label="Ask a question"
				multiline
				maxRows={8}
				variant="outlined"
				size="medium"
				fullWidth={true}
				disabled={isSendingMessage}
				value={currentMessage}
				onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
					setCurrentMessage(event.target.value);
				}}
			/>
			<Button
				className="send-button"
				variant="contained"
				disabled={isSendingMessage}
				onClick={onSendMessage}
			>
				Send
			</Button>
		</Container>
	);
};
export default InputBox;
