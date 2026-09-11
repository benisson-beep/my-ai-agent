function getWeather(city) {
  console.log(`🔧 Tool called: getWeather("${city}")`);

  return `The weather in ${city} is sunny.`;
}

const userRequest = "What is the weather in Kigali?";

console.log("👤 User:", userRequest);

console.log("🤖 Agent: I need to use the weather tool.");

const result = getWeather("Kigali");

console.log("🔧 Tool result:", result);

console.log("🤖 Agent: The weather in Kigali is sunny.");