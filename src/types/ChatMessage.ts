import type {
  ChatCompletionRequestMessage,
  ChatCompletionResponseMessage,
} from 'openai';

export type ChatMessage =
  | ChatCompletionRequestMessage
  | ChatCompletionResponseMessage;
