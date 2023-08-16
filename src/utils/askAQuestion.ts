import { Configuration, OpenAIApi, ChatCompletionRequestMessageRoleEnum } from 'openai';
import type { ChatCompletionRequestMessage } from 'openai';

import { calculateModelTemperature } from './calculateModelTemperature';

import type { MessageOptions } from '../types/MessageOptions';

const openai = new OpenAIApi(
	new Configuration({
		apiKey: process.env.REACT_APP_API_KEY,
	}),
);

// TODO: Make this a BE call instead of a direct call to their APIs
export const askAQuestion = async (
	question: string,
	context: ChatCompletionRequestMessage[],
	messageOptions: MessageOptions,
) => {
	const res = await openai.createChatCompletion({
		model: 'gpt-3.5-turbo',
		messages: [
			{ role: ChatCompletionRequestMessageRoleEnum.User, content: question },
			...context.slice(0, messageOptions.context),
		].reverse(),
		temperature: calculateModelTemperature(messageOptions.temperature),
		max_tokens: messageOptions.maxTokens,
	});

	return res.data.choices[0].message;
};
