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

    export const GenerateChapterContent_AI = model.startChat({
      generationConfig,
      history: [
        {
          role: "user",
          parts: [
            {text: "Explain the concept in Detail on Topic:yoga, Chapter:Restorative Poses, in JSON Format with list of array with field as title, explanation on given chapter in detail, Code Example(Code field in <precode> format) if applicable"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n{\n  \"chapter\": \"Restorative Poses\",\n  \"description\": \"Restorative yoga is a gentle form of yoga that emphasizes deep relaxation and stress reduction. It utilizes props such as blankets, bolsters, and blocks to support the body in comfortable, passive postures. These poses are held for extended periods, allowing the nervous system to calm down, muscles to release tension, and the mind to quiet. Restorative yoga is beneficial for everyone, especially those dealing with stress, anxiety, insomnia, or physical limitations.\",\n  \"poses\": [\n    {\n      \"title\": \"Supported Child's Pose\",\n      \"explanation\": \"This pose is a gentle way to release tension in the back, hips, and shoulders. Kneel on the floor with your feet together and your knees wider than hip-width apart. Sit back on your heels, fold forward and rest your forehead on the floor. Place a bolster or pillow lengthwise in front of you, then rest your chest and belly on the bolster.  Arms can be extended forward or resting alongside the body. \",\n      \"benefits\": [\n        \"Relaxes the spine and back muscles\",\n        \"Opens the hips\",\n        \"Relieves stress and anxiety\",\n        \"Promotes deep relaxation\"\n      ],\n      \"image\": \"https://example.com/supported-childs-pose.jpg\"\n    },\n    {\n      \"title\": \"Supported Bridge Pose\",\n      \"explanation\": \"This pose is a restorative inversion that encourages relaxation and opens the chest and front of the body. Lie on your back with your knees bent and feet flat on the floor.  Place a bolster or pillow under your sacrum (the base of the spine).  Rest your arms by your sides, palms facing up. \",\n      \"benefits\": [\n        \"Relieves stress and anxiety\",\n        \"Calms the nervous system\",\n        \"Promotes relaxation and sleep\",\n        \"Opens the chest and shoulders\",\n        \"Releases tension in the hips and lower back\"\n      ],\n      \"image\": \"https://example.com/supported-bridge-pose.jpg\"\n    },\n    {\n      \"title\": \"Reclining Butterfly Pose\",\n      \"explanation\": \"This pose helps release tension in the hips, inner thighs, and lower back. Lie on your back with your feet together and your knees bent.  Let your knees fall open, allowing your thighs to drop towards the floor.  Use bolsters or pillows to support your thighs and legs if needed. \",\n      \"benefits\": [\n        \"Opens the hips and groin\",\n        \"Releases tension in the lower back\",\n        \"Promotes relaxation and sleep\",\n        \"Reduces stress and anxiety\"\n      ],\n      \"image\": \"https://example.com/reclining-butterfly-pose.jpg\"\n    },\n    {\n      \"title\": \"Supported Savasana\",\n      \"explanation\": \"This pose is the ultimate relaxation pose. Lie on your back with your arms at your sides, palms facing up.  Place a bolster or pillow under your knees to support your lower back.  Use blankets to cover your body and keep it warm. \",\n      \"benefits\": [\n        \"Deep relaxation and stress reduction\",\n        \"Calms the nervous system\",\n        \"Promotes restful sleep\",\n        \"Reduces tension throughout the body\",\n        \"Enhances self-awareness\"\n      ],\n      \"image\": \"https://example.com/supported-savasana.jpg\"\n    }\n  ],\n  \"tips\": [\n    \"Use props to support your body in a comfortable position.\",\n    \"Hold each pose for 5-10 minutes or longer.\",\n    \"Breathe deeply and slowly throughout the practice.\",\n    \"Focus on relaxing your body and mind.\",\n    \"Listen to your body and adjust the pose as needed.\"\n  ],\n  \"benefits\": [\n    \"Reduced stress and anxiety\",\n    \"Improved sleep quality\",\n    \"Increased relaxation and well-being\",\n    \"Reduced muscle tension\",\n    \"Improved circulation\",\n    \"Enhanced flexibility and range of motion\",\n    \"Increased body awareness\",\n    \"Improved digestion\",\n    \"Reduced inflammation\",\n    \"Improved mental clarity and focus\"\n  ]\n}\n```\n\n**Explanation:**\n\nThis JSON object provides information about the \"Restorative Poses\" chapter in yoga. It includes:\n\n* **chapter:** The name of the chapter.\n* **description:** A brief overview of restorative yoga and its purpose.\n* **poses:** An array of objects, each representing a specific restorative pose. Each pose object includes:\n    * **title:** The name of the pose.\n    * **explanation:** A detailed description of how to enter and hold the pose, including any prop recommendations.\n    * **benefits:** A list of the benefits of practicing the pose.\n    * **image:** (Optional) A link to an image illustrating the pose.\n* **tips:** General tips for practicing restorative yoga.\n* **benefits:** A comprehensive list of the overall benefits of practicing restorative yoga.\n\n**Note:**  This JSON structure can be further customized to include more information, such as variations of each pose, contraindications, or links to relevant resources. \n"},
          ],
        },
      ],
    });
      




    //const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
   // console.log(result.response.text());
