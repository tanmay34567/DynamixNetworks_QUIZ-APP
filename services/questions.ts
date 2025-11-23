import { Difficulty, Question } from "../types";

// Helper to create questions easily
const createQ = (id: number, text: string, options: string[], correct: number, explanation: string): Question => ({
  id, text, options, correctAnswerIndex: correct, explanation
});

// The Data Bank
const QUESTION_BANK: Record<string, Record<Difficulty, Question[]>> = {
  "React.js": {
    [Difficulty.Easy]: [
      createQ(1, "What is React mainly used for?", ["Database Management", "Building User Interfaces", "Operating Systems", "Image Processing"], 1, "React is a JavaScript library specifically designed for building user interfaces, particularly single-page applications."),
      createQ(2, "Which method is used to update state in a class component?", ["this.state()", "updateState()", "this.setState()", "set()"], 2, "In class components, `this.setState()` is the standard method to update the component's state and trigger a re-render."),
      createQ(3, "What is JSX?", ["JavaScript XML", "Java Syntax Extension", "JSON Xylophone", "JavaScript X-Factor"], 0, "JSX stands for JavaScript XML. It allows you to write HTML-like syntax directly within JavaScript code."),
      createQ(4, "How do you pass data to a child component?", ["State", "Props", "Context", "Render"], 1, "Props (short for properties) are used to pass data from a parent component to a child component."),
      createQ(5, "What hook is used to handle side effects?", ["useState", "useEffect", "useReducer", "useRef"], 1, "The `useEffect` hook is designed to perform side effects (like data fetching or DOM updates) in function components."),
    ],
    [Difficulty.Medium]: [
      createQ(6, "What is the virtual DOM?", ["A direct copy of the HTML DOM", "A lightweight JavaScript representation of the DOM", "A browser extension", "A third-party library"], 1, "The Virtual DOM is a lightweight copy of the actual DOM in memory. React uses it to optimize updates by comparing it with the real DOM."),
      createQ(7, "What is the purpose of `useRef`?", ["To cause re-renders", "To store values without causing re-renders", "To manage global state", "To replace useState"], 1, "`useRef` allows you to persist values between renders without causing a re-render, and is often used to access DOM elements directly."),
      createQ(8, "Which of these is NOT a rule of Hooks?", ["Only call Hooks at the top level", "Only call Hooks from React functions", "Hooks must be conditional", "Custom Hooks should start with 'use'"], 2, "Hooks must NOT be conditional. They must always be called in the exact same order every render."),
      createQ(9, "What is 'lifting state up'?", ["Moving state to a parent component", "Using Redux", "Increasing state size", "Deleting state"], 0, "Lifting state up involves moving shared state to the closest common ancestor of the components that need it."),
      createQ(10, "What does `React.memo` do?", ["Memoizes a value", "Memoizes a function", "Memoizes a component", "Caches API calls"], 2, "`React.memo` is a higher-order component that memoizes the result of a component render, preventing unnecessary re-renders if props haven't changed."),
    ],
    [Difficulty.Hard]: [
      createQ(11, "What is the second argument of `useEffect` used for?", ["Cleanup function", "Dependency array", "Initial state", "Callback"], 1, "The second argument is the dependency array. It controls when the effect runs (e.g., only when specific variables change)."),
      createQ(12, "What is a 'Portal' in React?", ["A game engine", "A way to render children into a DOM node outside the parent hierarchy", "A way to pass props deeply", "A security feature"], 1, "Portals provide a first-class way to render children into a DOM node that exists outside the DOM hierarchy of the parent component."),
      createQ(13, "What problem does `useLayoutEffect` solve differently than `useEffect`?", ["It runs asynchronously", "It runs synchronously after all DOM mutations", "It handles API calls better", "It is deprecated"], 1, "`useLayoutEffect` runs synchronously immediately after DOM mutations but before the browser paints, preventing visual flicker."),
      createQ(14, "Which Context API method consumes the context value?", ["Context.Provider", "Context.Consumer", "Context.Create", "useContext"], 3, "While `Context.Consumer` works, `useContext` is the modern hook-based way to consume a context value."),
      createQ(15, "What is Reconciliation?", ["Merging git branches", "The process of syncing the Virtual DOM with the Real DOM", "Compiling JSX", "Error handling"], 1, "Reconciliation is the algorithm React uses to diff one tree with another to determine which parts need to be changed."),
    ]
  },
  "JavaScript": {
    [Difficulty.Easy]: [
      createQ(16, "Which symbol is used for comments in JavaScript?", ["//", "<!-- -->", "#", "**"], 0, "// is used for single-line comments in JavaScript."),
      createQ(17, "How do you declare a variable that cannot be reassigned?", ["var", "let", "const", "static"], 2, "`const` creates a read-only reference to a value."),
      createQ(18, "What does `NaN` stand for?", ["Not a Number", "New and Null", "No a Name", "Null and None"], 0, "NaN stands for Not-a-Number."),
      createQ(19, "Which operator is used to check both value and type?", ["==", "=", "===", "!"], 2, "The strict equality operator (===) checks both the value and the data type."),
      createQ(20, "What is the correct way to write a function?", ["func myFunction()", "function myFunction()", "def myFunction()", "function:myFunction()"], 1, "`function myFunction() {}` is the standard syntax."),
    ],
    [Difficulty.Medium]: [
      createQ(21, "What is a Closure?", ["A function with no name", "A function bundled with its lexical environment", "A method to close a window", "A loop termination"], 1, "A closure gives you access to an outer function's scope from an inner function."),
      createQ(22, "What does `this` refer to in an arrow function?", ["The global object", "The element that called it", "The enclosing lexical context", "Undefined"], 2, "Arrow functions do not have their own `this`. They inherit `this` from the parent scope (lexical scoping)."),
      createQ(23, "What is the output of `2 + '2'`?", ["4", "22", "NaN", "Error"], 1, "JavaScript performs type coercion, converting the number to a string and concatenating them."),
      createQ(24, "Which array method creates a new array by applying a function to every element?", ["forEach", "filter", "map", "reduce"], 2, "`map()` creates a new array populated with the results of calling a provided function on every element."),
      createQ(25, "What is hoisting?", ["Moving declarations to the top", "Lifting weights", "Increasing variable value", "Deleting variables"], 0, "Hoisting is JavaScript's behavior of moving declarations to the top of the current scope."),
    ],
    [Difficulty.Hard]: [
      createQ(26, "What is the Event Loop?", ["A for loop", "A mechanism that handles asynchronous callbacks", "A DOM event listener", "A recursive function"], 1, "The Event Loop monitors the Call Stack and the Callback Queue, pushing tasks from the queue to the stack when the stack is empty."),
      createQ(27, "What is the difference between `null` and `undefined`?", ["They are the same", "Null is an object, undefined is a type", "Undefined is an object", "Null means variable is not declared"], 1, "`undefined` is a type itself (variable declared but not assigned). `null` is an assignment value representing 'no value', and `typeof null` returns 'object' (a legacy bug)."),
      createQ(28, "What does `Promise.all()` do?", ["Runs promises sequentially", "Returns result of first resolved promise", "Resolves when all promises resolve", "Resolves when any promise resolves"], 2, "`Promise.all` takes an array of promises and resolves when all of them have resolved, or rejects if any of them reject."),
      createQ(29, "What is a Generator function?", ["A function that creates objects", "A function that can be paused and resumed", "A function that generates random numbers", "A constructor"], 1, "Generator functions (marked with *) can yield control back to the caller and be resumed later."),
      createQ(30, "What is 'Currying'?", ["Spice mixing", "Transforming a function with multiple args into a sequence of functions", "Parsing JSON", "Looping arrays"], 1, "Currying is the technique of converting a function that takes multiple arguments into a sequence of functions that each take a single argument."),
    ]
  },
  "Web Development": {
    [Difficulty.Easy]: [
      createQ(31, "What does HTML stand for?", ["HyperText Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language", "Hyper Tool Multi Language"], 0, "HTML stands for HyperText Markup Language."),
      createQ(32, "Which tag is used for the largest heading?", ["<h6>", "<head>", "<h1>", "<header>"], 2, "<h1> defines the most important heading."),
      createQ(33, "What does CSS stand for?", ["Creative Style Sheets", "Cascading Style Sheets", "Computer Style Sheets", "Colorful Style Sheets"], 1, "CSS stands for Cascading Style Sheets."),
      createQ(34, "Which property changes text color?", ["text-color", "font-color", "color", "fg-color"], 2, "The `color` property specifies the color of text."),
      createQ(35, "What is the box model?", ["A layout engine", "A container for wrapping elements", "A model consisting of margins, borders, padding, and content", "A flexbox feature"], 2, "The CSS box model essentially wraps every HTML element. It consists of: margins, borders, padding, and the actual content."),
    ],
    [Difficulty.Medium]: [
      createQ(36, "What is Semantic HTML?", ["Using correct tags for their meaning", "Using only div tags", "Using strict XML syntax", "Using HTML5"], 0, "Semantic HTML introduces meaning to the web page rather than just presentation (e.g., using <article> instead of <div>)."),
      createQ(37, "What is the default `position` value?", ["relative", "absolute", "fixed", "static"], 3, "HTML elements are positioned `static` by default."),
      createQ(38, "Which unit is relative to the root element font size?", ["em", "rem", "px", "vh"], 1, "`rem` stands for 'root em' and is relative to the font-size of the root element (<html>)."),
      createQ(39, "What does `z-index` control?", ["Horizontal position", "Vertical position", "Stack order", "Zoom level"], 2, "The `z-index` property specifies the stack order of an element (which element should be placed in front of, or behind, the others)."),
      createQ(40, "What is Flexbox?", ["A grid system", "A one-dimensional layout method", "A javascript library", "A database"], 1, "Flexbox is a one-dimensional layout method for laying out items in rows or columns."),
    ],
    [Difficulty.Hard]: [
      createQ(41, "What is the Critical Rendering Path?", ["The path to the server", "The sequence of steps the browser takes to render the page", "A CSS selector", "A URL structure"], 1, "It is the sequence of steps the browser goes through to convert the HTML, CSS, and JavaScript into pixels on the screen."),
      createQ(42, "What is the difference between `localStorage` and `sessionStorage`?", ["Storage limit", "Data format", "Expiration time", "Access speed"], 2, "`localStorage` persists until explicitly deleted. `sessionStorage` is cleared when the page session ends (tab closed)."),
      createQ(43, "What is CORS?", ["Cross-Origin Resource Sharing", "Computer Operating Resource System", "Cascading Origin Resource Style", "Code Origin Resource Standard"], 0, "CORS is a mechanism that uses additional HTTP headers to tell browsers to give a web application running at one origin, access to selected resources from a different origin."),
      createQ(44, "What does the Viewport meta tag control?", ["SEO ranking", "Layout on mobile devices", "Browser caching", "HTTPS security"], 1, "It gives the browser instructions on how to control the page's dimensions and scaling."),
      createQ(45, "What is Web Accessibility (a11y)?", ["Making sites load fast", "Making websites usable by people with disabilities", "Availability of the site 24/7", "Having a mobile version"], 1, "Web Accessibility ensures that websites, tools, and technologies are designed and developed so that people with disabilities can use them."),
    ]
  },
  "General Knowledge": {
    [Difficulty.Easy]: [
      createQ(46, "What is the capital of France?", ["London", "Berlin", "Paris", "Madrid"], 2, "Paris is the capital and most populous city of France."),
      createQ(47, "Which planet is known as the Red Planet?", ["Earth", "Mars", "Jupiter", "Venus"], 1, "Mars is often called the 'Red Planet' due to the reddish iron oxide prevalent on its surface."),
      createQ(48, "Who wrote 'Romeo and Juliet'?", ["Charles Dickens", "William Shakespeare", "Mark Twain", "Jane Austen"], 1, "William Shakespeare wrote the tragic play Romeo and Juliet."),
      createQ(49, "What is the chemical symbol for water?", ["Wa", "H2O", "O2", "Hy"], 1, "H2O is the chemical formula for water."),
      createQ(50, "How many continents are there?", ["5", "6", "7", "8"], 2, "There are generally considered to be 7 continents: Asia, Africa, North America, South America, Antarctica, Europe, and Australia."),
    ],
    [Difficulty.Medium]: [
      createQ(51, "Which element has the atomic number 1?", ["Helium", "Hydrogen", "Oxygen", "Carbon"], 1, "Hydrogen is the first element on the periodic table."),
      createQ(52, "In which year did the Titanic sink?", ["1905", "1912", "1918", "1920"], 1, "The RMS Titanic sank in the North Atlantic Ocean on April 15, 1912."),
      createQ(53, "What is the longest river in the world?", ["Amazon", "Nile", "Yangtze", "Mississippi"], 1, "The Nile is traditionally considered the longest river, though there is some debate regarding the Amazon."),
      createQ(54, "Who painted the Mona Lisa?", ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"], 2, "Leonardo da Vinci painted the Mona Lisa in the early 16th century."),
      createQ(55, "What is the currency of Japan?", ["Yuan", "Won", "Yen", "Dollar"], 2, "The Yen is the official currency of Japan."),
    ],
    [Difficulty.Hard]: [
      createQ(56, "What is the smallest bone in the human body?", ["Femur", "Stapes", "Tibia", "Humerus"], 1, "The stapes, located in the middle ear, is the smallest bone in the human body."),
      createQ(57, "Who was the first woman to win a Nobel Prize?", ["Marie Curie", "Mother Teresa", "Rosalind Franklin", "Ada Lovelace"], 0, "Marie Curie was the first woman to win a Nobel Prize (Physics, 1903) and the only person to win in two different scientific fields."),
      createQ(58, "What is the speed of light?", ["299,792 km/s", "300,000 km/h", "150,000 km/s", "1,000,000 km/s"], 0, "The speed of light in a vacuum is exactly 299,792,458 meters per second (approx 299,792 km/s)."),
      createQ(59, "Which war was fought between 1939 and 1945?", ["World War I", "World War II", "Vietnam War", "Cold War"], 1, "World War II lasted from 1939 to 1945."),
      createQ(60, "What is the main ingredient in traditional guacamole?", ["Tomato", "Onion", "Avocado", "Pepper"], 2, "Avocados are the primary ingredient in guacamole."),
    ]
  },
    "Science": {
    [Difficulty.Easy]: [
      createQ(61, "What gas do plants breathe in?", ["Oxygen", "Nitrogen", "Carbon Dioxide", "Helium"], 2, "Plants take in Carbon Dioxide for photosynthesis."),
      createQ(62, "What is the center of an atom called?", ["Electron", "Proton", "Nucleus", "Molecule"], 2, "The nucleus is the small, dense region consisting of protons and neutrons at the center of an atom."),
      createQ(63, "Which planet is closest to the sun?", ["Venus", "Earth", "Mercury", "Mars"], 2, "Mercury is the smallest and closest planet to the Sun."),
      createQ(64, "What part of the plant conducts photosynthesis?", ["Root", "Stem", "Leaf", "Flower"], 2, "Leaves are the primary site of photosynthesis."),
      createQ(65, "What freezes at 0 degrees Celsius?", ["Alcohol", "Water", "Mercury", "Oil"], 1, "Water freezes at 0 degrees Celsius (32 degrees Fahrenheit)."),
    ],
    [Difficulty.Medium]: [
      createQ(66, "What is the most abundant gas in Earth's atmosphere?", ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"], 2, "Nitrogen makes up about 78% of Earth's atmosphere."),
      createQ(67, "What is the powerhouse of the cell?", ["Nucleus", "Ribosome", "Mitochondria", "Cytoplasm"], 2, "Mitochondria are often referred to as the powerhouse of the cell because they generate most of the cell's supply of adenosine triphosphate (ATP)."),
      createQ(68, "Who proposed the theory of relativity?", ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Nikola Tesla"], 1, "Albert Einstein proposed the theory of relativity."),
      createQ(69, "What is the chemical symbol for Gold?", ["Go", "Ag", "Au", "Fe"], 2, "Au (from Latin: Aurum) is the symbol for Gold."),
      createQ(70, "What measures earthquake magnitude?", ["Barometer", "Thermometer", "Seismograph (Richter Scale)", "Speedometer"], 2, "The Richter scale (and now Moment Magnitude scale) is used to measure the magnitude of earthquakes."),
    ],
    [Difficulty.Hard]: [
      createQ(71, "What is the hardest natural substance on Earth?", ["Gold", "Iron", "Diamond", "Platinum"], 2, "Diamond is the hardest known natural material."),
      createQ(72, "What particle has a negative charge?", ["Proton", "Neutron", "Electron", "Positron"], 2, "Electrons are subatomic particles with a negative elementary electric charge."),
      createQ(73, "Which planet has the most moons?", ["Jupiter", "Saturn", "Uranus", "Neptune"], 1, "As of recent counts, Saturn has the most confirmed moons."),
      createQ(74, "What is the study of fungi called?", ["Botany", "Mycology", "Virology", "Zoology"], 1, "Mycology is the branch of biology concerned with the study of fungi."),
      createQ(75, "What is Absolute Zero in Celsius?", ["-100°C", "-273.15°C", "-459.67°C", "0°C"], 1, "Absolute zero is -273.15°C (0 Kelvin)."),
    ]
  }
};

export const getQuestions = async (
  topic: string,
  difficulty: Difficulty,
  count: number = 5
): Promise<Question[]> => {
  // Simulate network delay for UX
  await new Promise(resolve => setTimeout(resolve, 600));

  const topicData = QUESTION_BANK[topic];
  if (!topicData) {
    return [];
  }

  // Get questions for difficulty, or fallback to Medium/Easy if empty
  const availableQuestions = topicData[difficulty] || topicData[Difficulty.Medium] || topicData[Difficulty.Easy];

  // Shuffle the QUESTIONS list first
  const shuffledQuestionsList = [...availableQuestions];
  for (let i = shuffledQuestionsList.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledQuestionsList[i], shuffledQuestionsList[j]] = [shuffledQuestionsList[j], shuffledQuestionsList[i]];
  }

  // Select the top 'count' questions
  const selectedQuestions = shuffledQuestionsList.slice(0, count);

  // Now shuffle the OPTIONS within each selected question
  const finalQuestions = selectedQuestions.map(q => {
    // 1. Identify the correct answer text before shuffling
    const correctAnswerText = q.options[q.correctAnswerIndex];

    // 2. Create a copy of options and shuffle them
    const shuffledOptions = [...q.options];
    for (let i = shuffledOptions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledOptions[i], shuffledOptions[j]] = [shuffledOptions[j], shuffledOptions[i]];
    }

    // 3. Find the new index of the correct answer
    const newCorrectAnswerIndex = shuffledOptions.indexOf(correctAnswerText);

    // 4. Return new Question object
    return {
      ...q,
      options: shuffledOptions,
      correctAnswerIndex: newCorrectAnswerIndex
    };
  });

  return finalQuestions;
};