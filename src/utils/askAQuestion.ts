import { Configuration, OpenAIApi } from 'openai';
import { ChatCompletionRequestMessageRoleEnum } from 'openai';

import type { ChatCompletionRequestMessage } from 'openai';

const openai = new OpenAIApi(
  new Configuration({
    apiKey: process.env.REACT_APP_API_KEY,
  })
);

export const askAQuestion = async (
  question: string,
  context: ChatCompletionRequestMessage[]
) => {
  const res = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    messages: [
      { role: ChatCompletionRequestMessageRoleEnum.User, content: question },
      ...context.slice(0, 10),
    ].reverse(),
  });

  return res.data.choices[0].message;
};
