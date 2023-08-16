import React, { useState } from 'react';
import Chat from './Chat';
import InputBox from './InputBox';

import './NovaGpt.css';

import type { ChatMessage } from '../types/ChatMessage';
import { Divider } from '@mui/material';

import Settings from './Settings';
import AppBar from './AppBar';

const MODEL_DEFAULTS = {
	// The number of previous messages to include with current question
	defaultContext: 10,
	// Controls the randomness of the model. Where 1 is deterministic and 200 is almost a new answer everytime for the same question
	defaultTemperature: 100,
	// Controls the length of the output
	defaultMaxTokens: 1000,
} as const;

const NovaGpt: React.FC<{}> = () => {
	const [chatHistory, setChatHistory] = useState<ChatMessage[]>([]);
	const [isSendingMessage, setIsSendingMessage] = useState(false);

	// Settings
	const [isSettingsOpen, setSettingsOpen] = useState(false);
	const [context, setContext] = React.useState<number>(MODEL_DEFAULTS.defaultContext);
	const [temperature, setTemperature] = React.useState<number>(MODEL_DEFAULTS.defaultTemperature);
	const [maxTokens, setMaxTokens] = React.useState<number>(MODEL_DEFAULTS.defaultMaxTokens);

	return (
		<div className="content-wrapper">
			<AppBar openSettings={() => setSettingsOpen(true)} />
			<Settings
				isSettingsOpen={isSettingsOpen}
				onClose={() => setSettingsOpen(false)}
				context={context}
				temperature={temperature}
				maxTokens={maxTokens}
				setContext={context => setContext(context)}
				setTemperature={temperature => setTemperature(temperature)}
				setMaxTokens={maxTokens => setMaxTokens(maxTokens)}
			/>
			<Chat chatHistory={chatHistory} isSendingMessage={isSendingMessage} />
			<Divider />
			<InputBox
				chatHistory={chatHistory}
				setChatHistory={setChatHistory}
				isSendingMessage={isSendingMessage}
				setIsSendingMessage={setIsSendingMessage}
				messageOptions={{ context, temperature: temperature, maxTokens }}
			/>
		</div>
	);
};

export default NovaGpt;
