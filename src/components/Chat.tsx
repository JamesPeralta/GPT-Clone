import React from 'react';
import { Stack } from '@mui/material';
import { ChatCompletionRequestMessageRoleEnum } from 'openai';
import ChatBubble from './ChatBubble';

import './Chat.css';

import type { ChatMessage } from '../types/ChatMessage';

type ChatProps = {
	chatHistory: ChatMessage[];
	isSendingMessage: boolean;
};

const GptTypingComponent = () => (
	<ChatBubble
		message={{
			role: ChatCompletionRequestMessageRoleEnum.Assistant,
			content: 'Typing...',
		}}
	/>
);

const Chat: React.FC<ChatProps> = ({ chatHistory, isSendingMessage }) => (
	<Stack className="all-messages" direction="column-reverse" spacing={1}>
		{isSendingMessage && <GptTypingComponent />}
		{chatHistory.map(message => (
			<ChatBubble message={message} />
		))}
	</Stack>
);

export default Chat;
