#10 JavaScript Challenges: Functions (with and without parameters)

This list of challenges is designed to consolidate your skills on creating and manipulating **functions in JavaScript**, ranging from beginner to advanced level.

---

## Beginner level (1 to 3)

### Challenge 1: The Automatic Saluter
* **Objective:** Create a function without parameters.
* **Instructions:** Write a function named `showWelcome` that takes no parameters. When called, it should display the message in the console: `"Welcome to the JavaScript course! Good luck."`.
* **Notions:** Function declaration, `console.log`.

---

### Challenge 2: Canine Age Calculator
* **Objective:** Create a function with a simple parameter.
* **Instructions:** Write a function `calculateDogAge` which takes a parameter `HumanAge` (a number). The function must calculate and return the equivalent age of the dog (knowing that 1 human year ≈ 7 dog years).
* **Example:** `calculateDogAge(4)` must return `28`.
* **Notions:** Parameter, arithmetic operations, `return` instruction.

---

### Challenge 3: Professional Email Generator
* **Goal:** Use a function with multiple parameters.
* **Instructions:** Write a function `generateEmail` which takes two parameters: `first name` and `last name`. The function must return an email address in the form: `firstname.lastname@company.com` (all lowercase).
* **Example:** `generateEmail("Tayeb", "Souini")` ➔ `"tayeb.souini@entreprise.com"`.
* **Notions:** Multiple parameters, concatenation or Template Literals (`` ` ``), `.toLowerCase()` method.

---

## Intermediate level (4 to 7)

### Challenge 4: Personalized Greeting with Default Value
* **Purpose:** Manipulate default parameter values.
* **Instruction:** Write a `greetClient` function that accepts two parameters: `name` (character string) and `title` (character string, default value: `"Customer"`).
    * If only the name is provided, display: `"Hello Customer [name]"`.
    * If both are provided, display: `"Hello [title] [name]"`.
* **Example:** `greetClient("Dupont")` ➔ `"Hello Client Dupont"`.
* **Notions:** Default parameters.

---

### Challenge 5: The Universal Somator (Rest Parameter)
* **Objective:** Process a variable number of arguments.
* **Instruction:** Create an `addAll` function that accepts any number of numeric arguments (without knowing in advance how many) and returns the total sum of all these numbers.
* **Example:** `addAll(10, 20, 30, 40)` ➔ `100`.
* **Notions:** Rest parameters (`...args`), loops or `reduce()` method.

---

### Challenge 6: Password Validator
* **Purpose:** Function performing conditional checks and returning a boolean.
* **Instruction:** Write a `checkPassword` function taking a `Password` parameter. The function must return `true` if the password contains at least 8 characters AND contains the `@` character, otherwise it returns `false`.
* **Example:** `verifyPassword("code1234")` ➔ `false`, `verifyPassword("code@1234")` ➔ `true`.
* **Notions:** Conditions, String methods (`.length`, `.includes()`).

---

### Challenge 7: System Clock / Timestamp
* **Objective:** Create a parameterless function returning dynamic data.
* **Instruction:** Write a `getCurrentTime` function without parameters that generates and returns the current time in HH:MM:SS format.
* **Example output:** `"14:30:15"`.
* **Notions:** `Date` object, handling of time methods.

---

## Advanced / Expert level (8 to 10)

### Challenge 8: Universal Currency Converter with Callback
* **Objective:** Pass a function as a parameter of another function (Callback).
* **Instructions:** Write a `convertAmount` function which takes three parameters: `amount`, `rate` and a `formatter` callback function.
    * The function should multiply the `amount` by the `rate`, then pass the result to the `formatter` function before returning the final result.
* **Example:** 
  ```javascript
  const formatMAD = (val) => val + "DH";
  convertAmount(100, 10.5, formatMAD); // Returns "1050 DH"
  ```
* **Notions:** Callback functions, Higher-Order Functions.

---

### Challenge 9: Independent Counter Generator (Closure)
* **Objective:** Return a function without parameters from a function with parameters.
* **Instruction:** Write a `createCounter` function which takes an `initialvalue` parameter (default `0`). It must return a new function (without parameters) which, on each call, increments the value by 1 and returns it.
* **Example:**
  ```javascript
  const MyCounter = createCounter(10);
  MyCounter(); // Returns 11
  MyCounter(); // Returns 12
  ```
* **Notions:** Closures, portability of variables (lexical scope).

---

### Challenge 10: The Text Transformation Pipeline
* **Objective:** Combine several modular functions with and without parameters.
* **Instructions:** Write:
    1. A parameterless function `cleanSpaces(text)` which removes spaces at the beginning and end.
    2. A `capitalize(text)` function.
    3. A `addPrefix(text, prefix = "LOG:")` function.
    4. A main function `processMessage(text, ...transformations)` which successively applies each transformation function transmitted to the original text.
* **Notions:** Composition of functions, Rest parameters, advanced modularity.