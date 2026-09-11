# AI Agent Fundamentals

## What is an LLM?

An LLM (Large Language Model) is an AI model that
can understand and generate human language.

## What is an API?

An API is a way for one piece of software to
communicate with another piece of software.

## What is an AI Agent?

An AI agent uses an AI model together with tools,
instructions, memory, and the ability to take actions
to accomplish a goal.

## LLM vs Agent

LLM = the brain

Agent = brain + tools + instructions + memory + actions


## Local LLMs

A local LLM is a language model that runs directly on my computer
instead of sending requests to a cloud AI provider.

For this project, I am using Ollama to run a local LLM.

### Cloud LLM

My application sends a request through the internet:

Application → API → Cloud LLM → Response

### Local LLM

My application communicates with a model running on my computer:

Application → Ollama → Local LLM → Response

### Why use a local LLM?

- No API credits are required
- Can work without internet after the model is downloaded
- Good for learning
- Gives more control over the environment

### Ollama

Ollama is the software that manages and runs local language models
and provides an API that applications can communicate with.
## Tools

A tool is a function or capability that an AI agent can use to
interact with the outside world.

Examples:

- Search the web
- Read a file
- Query a database
- Calculate something
- Send an email
- Call another API

The LLM decides when a tool is needed, while the application
actually executes the tool.

## Agent Loop

A basic agent loop is:

1. Receive the user's request
2. Send the request to the LLM
3. Determine whether a tool is needed
4. Execute the selected tool
5. Give the tool result back to the LLM
6. Generate the final response

The loop can repeat when a task requires multiple steps.

## Important distinction

LLM = generates and reasons about language

Tool = performs a specific operation

Agent = LLM + tools + instructions + loop
## Tools

A tool is a function or capability that an AI agent can use to
perform an operation outside of the language model itself.

Examples of tools:

- Calculator
- Web search
- Database queries
- File access
- APIs
- Sending messages
- Reading information from external services

The LLM decides when a tool is needed, while the application
executes the actual tool.

## Tool Calling

Tool calling allows an LLM to request that an application execute
a specific function.

The basic flow is:

User request
→ LLM
→ Tool call
→ Application executes the tool
→ Tool result
→ LLM
→ Final response

For example:

User: "What is 25 + 17?"

The LLM can decide to call:

calculator(a=25, b=17)

The application executes:

calculator(25, 17)

The result is:

42

The application can then send the result back to the LLM so it
can produce the final answer.

## Agent Loop

A basic AI agent can follow this loop:

1. Receive the user's request
2. Send the request to the LLM
3. Let the LLM decide whether a tool is needed
4. Execute the requested tool
5. Return the tool result to the LLM
6. Generate the final response

The loop can repeat when a task requires multiple tools or multiple
steps.

## LLM vs Tool vs Agent

LLM
- Understands and generates language
- Reasons about the user's request
- Can decide what action may be needed

Tool
- Performs a specific operation
- Is executed by the application
- Can interact with external systems

Agent
- Combines an LLM with tools, instructions, and an execution loop
- Can decide what actions to take
- Can perform multi-step tasks

A simple mental model:

LLM = brain

Tool = ability to perform an action

Agent = brain + tools + instructions + loop

## Local LLMs

A local LLM runs directly on my computer instead of using a
cloud AI API.

For this project, Ollama is used to run local models.

The architecture is:

Application
→ Ollama
→ Local LLM
→ Response

Advantages of local LLMs:

- No API credits are required
- Models can run without an internet connection after downloading
- Useful for learning and experimentation
- Gives more control over the AI environment

## Models Used

### Gemma 3 4B

I first tested Gemma 3 4B through Ollama.

It successfully generated normal text responses, but the
Ollama version I used did not support tool calling.

### Qwen3 4B

I then used Qwen3 4B because it supports tool calling through
Ollama.

Qwen3 successfully recognized that the calculator tool was needed
for:

"What is 25 + 17?"

It returned a tool call with:

calculator(a=25, b=17)

The JavaScript application can then execute the function and
receive the result:

42

This demonstrated the basic mechanism behind AI agents.

## First Tool-Calling Experiment

The first tool used in this project is a simple calculator:

```js
function calculator(a, b) {
  return a + b;
}