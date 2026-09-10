import "dotenv/config";

const client = new OpenAI();

const response = await client.responses.create({
  model: "gpt-5.6-luna",
  input: "Explain what an AI agent is in one simple paragraph."
});

console.log(response.output_text);