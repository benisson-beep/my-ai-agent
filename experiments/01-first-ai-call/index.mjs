const response = await fetch("http://localhost:11434/api/generate", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    model: "gemma3:4b",
    prompt: "Explain what an AI agent is in one simple paragraph.",
    stream: false
  })
});

const data = await response.json();

console.log(data.response);
