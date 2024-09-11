/*
 * Install the Generative AI SDK
 *
 * $ npm install @google/generative-ai
 */

const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } = require("@google/generative-ai");
  
  const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
  };
  
 
    export const GenerateCourseLayout_Ai = model.startChat({
      generationConfig,
   // safetySettings: Adjust safety settings
   // See https://ai.google.dev/gemini-api/docs/safety-settings
      history: [
        {
          role: "user",
          parts: [
            {text: "Generate A Course Tutorial on Following Detail With field as Course Name, Description, Along with Chapter Name, about, Duration: Category: 'Programming', Topic: Python, Level: Basic, Duration: 1 hours, NoOf Chapters:5, in JSON format\n"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n{\n  \"course\": {\n    \"name\": \"Python Programming Fundamentals\",\n    \"description\": \"This course provides a comprehensive introduction to Python programming, covering fundamental concepts and practical skills for beginners. Learn how to write, execute, and debug basic Python programs.\",\n    \"chapters\": [\n      {\n        \"name\": \"Introduction to Python\",\n        \"about\": \"This chapter covers the basics of Python, including its history, syntax, data types, variables, and operators.\",\n        \"duration\": \"30 minutes\"\n      },\n      {\n        \"name\": \"Control Flow and Loops\",\n        \"about\": \"Learn about conditional statements (if-else), loops (for and while), and how to control the flow of execution in your Python programs.\",\n        \"duration\": \"15 minutes\"\n      },\n      {\n        \"name\": \"Functions and Modules\",\n        \"about\": \"Explore how to define and use functions, create modules for code reusability, and understand the concept of namespaces.\",\n        \"duration\": \"15 minutes\"\n      },\n      {\n        \"name\": \"Data Structures\",\n        \"about\": \"This chapter introduces essential data structures like lists, tuples, dictionaries, and sets. Learn how to manipulate and work with these structures.\",\n        \"duration\": \"15 minutes\"\n      },\n      {\n        \"name\": \"Input/Output and File Handling\",\n        \"about\": \"Discover how to interact with the user, read and write data from files, and perform basic file operations in Python.\",\n        \"duration\": \"15 minutes\"\n      }\n    ]\n  },\n  \"meta\": {\n    \"category\": \"Programming\",\n    \"topic\": \"Python\",\n    \"level\": \"Basic\",\n    \"duration\": \"1 hour\",\n    \"noOfChapters\": 5\n  }\n}\n```\n"},
          ],
        },
      ],
    });
  
    //const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
   // console.log(result.response.text());
