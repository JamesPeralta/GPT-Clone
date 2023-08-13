import { Configuration, OpenAIApi } from 'openai';
import { ChatCompletionRequestMessageRoleEnum } from 'openai';

import type { ChatCompletionRequestMessage } from 'openai';
import type { MessageOptions } from '../types/MessageOptions';

const openai = new OpenAIApi(
  new Configuration({
    apiKey: process.env.REACT_APP_API_KEY,
  })
);

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
    temperature: messageOptions.temperature,
    max_tokens: messageOptions.maxTokens,
  });

  return res.data.choices[0].message;
};
