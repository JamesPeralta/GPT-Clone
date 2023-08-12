import { Configuration, OpenAIApi } from "openai";

const openai = new OpenAIApi(new Configuration({
	apiKey: process.env.REACT_APP_API_KEY,
}));


export const askAQuestion = async (question: string) => {
	const res = await openai.createChatCompletion({
		model: 'gpt-3.5-turbo',
		messages: [{ role: "user", content: question}]
	})

	console.log(res.data.choices[0].message);
	return res.data.choices[0].message;
}
