const tools = [
  {
    type: "function",
    function: {
      name: "calculator",
      description: "Add two numbers together.",
      parameters: {
        type: "object",
        properties: {
          a: {
            type: "number",
            description: "The first number"
          },
          b: {
            type: "number",
            description: "The second number"
          }
        },
        required: ["a", "b"]
      }
    }
  }
];

function calculator(a, b) {
  return a + b;
}

const messages = [
  {
    role: "user",
    content: "What is 25 + 17?"
  }
];

const response = await fetch("http://localhost:11434/api/chat", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    model: "qwen3:4b",
    messages,
    tools,
    stream: false
  })
});

const data = await response.json();

console.log(JSON.stringify(data, null, 2));