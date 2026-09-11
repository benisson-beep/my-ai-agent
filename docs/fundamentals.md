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
