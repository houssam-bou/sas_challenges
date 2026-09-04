# 20 JavaScript Challenges: Strings

Here are two series of 10 challenges on manipulating character strings in JavaScript: 
1. **Without predefined methods** (raw algorithmic manipulation via loops and indices).
2. **With predefined methods** (modern use with `String` object methods).

---

# PART 1: 10 Challenges WITHOUT predefined methods
*(Prohibition of using `split`, `join`, `slice`, `substring`, `includes`, `indexOf`, `toUpperCase`, `toLowerCase`, `replace`, `trim`, etc. Only the `.length` property, access by index `string[i]` and `for` / `while` loops are allowed).*

---

### Beginner Level

#### Challenge 1: Character Counter
* **Instructions:** Write a `countCharacters(string)` function that iterates through a string and returns the total number of characters it contains (without using `.length`).
* **Example:** `countCharacters("Code")` ➔ `4`.

#### Challenge 2: Character Occurrence Counter
* **Instruction:** Write a function `countLetter(string, letter)` that counts how many times a specific character appears in a string.
* **Example:** `countLetter("javascript", "a")` ➔ `2`.

#### Challenge 3: Chain Reverser
* **Instructions:** Write a function `reverseString(string)` that constructs and returns a new string with the characters in reverse order.
* **Example:** `reverseString("hello")` ➔ `"olleh"`.

---

### Intermediate Level

#### Challenge 4: Vowel Counter
* **Instructions:** Write a function `countVowels(string)` which returns the number of vowels (a, e, i, o, u, y) present in a lowercase string.
* **Example:** `countVowels("developer")` ➔ `5`.

#### Challenge 5: Palindrome Test
* **Instructions:** Write a function `isPalindrome(string)` which checks if a word reads the same way in both senses (eg: "radar", "kayak"). The function must return `true` or `false`.
* **Example:** `estPalindrome("kayak")` ➔ `true`.

#### Challenge 6: String Duplication (`repeat` simulation)
* **Instruction:** Write a function `repeatString(string, times)` which constructs a string by repeating the given text the specified number of times.
* **Example:** `repeatString("JS", 3)` ➔ `"JSJSJS"`.

#### Challenge 7: Manual Replacement of a Character
* **Instructions:** Write a function `replaceCharacter(string, old, new)` which replaces all occurrences of an `old` character with `new`.
* **Example:** `replaceCharacter("banana", "a", "o")` ➔ `"bonono"`.

---

### Advanced Level

#### Challenge 8: Manual Substring Extraction (Slice Simulation)
* **Instructions:** Write a function `extractString(string, start, end)` which extracts the characters located between the `start` index (inclusive) and the `end` index (excluding).
* **Example:** `extractString("JavaScript", 0, 4)` ➔ `"Java"`.

#### Challenge 9: Removal of Exterior Spaces (`trim` simulation)
* **Instruction:** Write a `cleanSpaces(string)` function that removes all spaces located at the very beginning and very end of a string, leaving the spaces in the middle untouched.
* **Example:** `cleanSpaces("hello world")` ➔ `"hello world"`.

#### Challenge 10: Manual Word Splitting (Simulation of `split(' ')`)
* **Instructions:** Write a function `separateWords(string)` that takes a sentence with spaces and returns an array containing each individual word.
* **Example:** `separateWords("Learn JavaScript")` ➔ `["Learn", "the", "JavaScript"]`.

---
---

# PART 2: 10 Challenges WITH predefined methods
*(Using native methods: `slice`, `substring`, `split`, `includes`, `indexOf`, `startsWith`, `endsWith`, `toUpperCase`, `toLowerCase`, `replace`, `replaceAll`, `trim`, `padStart`, `padEnd`, etc.)*

---

### Beginner Level

#### Challenge 11: Capitalization and Lowercase
* **Instructions:** Write a function `formatText(string)` that takes a string and returns an object `{ uppercase: string, lowercase: string }`.
* **Example:** `formatText("Code")` ➔ `{ uppercase: "CODE", lowercase: "code" }`.
* **Suggested methods:** `toUpperCase()`, `toLowerCase()`.

#### Challenge 12: Email Domain Verification
* **Instructions:** Write a `verifyEmail(email)` function that checks if an email address ends with `"@gmail.com"`.
* **Example:** `verifierEmail("test@gmail.com")` ➔ `true`.
* **Suggested methods:** `endsWith()`, `includes()`.

#### Challenge 13: Extraction of Initials
* **Instructions:** Write a function `getInitials(fullname)` which takes a full name (ex: `"Tayeb Souini"`) and returns the initials in capital letters separated by a period.
* **Example:** `getInitials("tayeb souini")` ➔ `"T.S"`.
* **Suggested methods:** `split()`, `toUpperCase()`, `map()`, `join()`.

---

### Intermediate Level

#### Challenge 14: Bank Card Hiding
* **Guidelines:** Write a function `hideCard(Cardnumber)` that takes a 16-digit card number as a string and replaces all but the last 4 digits with stars (`*`).
* **Example:** `hideMap("1234567812345678")` ➔ `"************5678"`.
* **Suggested methods:** `slice()`, `padStart()`.

#### Challenge 15: Capitalize the First Letter of Each Word
* **Instructions:** Write a `capitalizePhrase(sentence)` function that transforms the first letter of each word in a sentence into capital letters.
* **Example:** `capitalizePhrase("welcome to the course")` ➔ `"Welcome to the Course"`.
* **Suggested methods:** `split()`, `map()`, `slice()`, `toUpperCase()`, `join()`.

#### Challenge 16: Censorship of Forbidden Words
* **Instructions:** Write a function `censorText(text, forbiddenwords)` which takes a text and an array of forbidden words, then replaces each forbidden word found with `"***"`.
* **Example:** `censorText("This code is bad and slow", ["bad", "slow"])` ➔ `"This code is *** and ***"`.
* **Suggested methods:** `replaceAll()` or `reduce()`.

#### Challenge 17: Conversion to URL Slug Format
* **Guidelines:** Write a `generateSlug(title)` function that transforms a title into a readable slug for a URL (lowercase, without spaces at the start/end, and replacing spaces with hyphens).
* **Example:** `generateSlug("My First JS Article")` ➔ `"my-first-js-article"`.
* **Suggested methods:** `trim()`, `toLowerCase()`, `replaceAll()` or `split().join()`.

---

### Advanced Level

#### Challenge 18: Word Frequency Analyzer
* **Instructions:** Write a function `parseWords(sentence)` that takes a text, removes basic punctuation (full stops, commas), converts to lowercase and returns an object containing the frequency of each word.
* **Example:** `analyzeWords("The cat eats, the cat sleeps.")` ➔ `{ le: 2, cat: 2, eats: 1, sleeps: 1 }`.
* **Suggested methods:** `toLowerCase()`, `replaceAll()`, `split()`, `reduce()`.

#### Challenge 19: Phone Format Validation
* **Instruction:** Write a function `validateTelephone(number)` which checks if a number respects the format `"06-XX-XX-XX-XX"` or `"07-XX-XX-XX-XX"` (exact length, hyphens in the right places, starts with 06 or 07).
* **Suggested methods:** `startsWith()`, `split()`, `length`, `every()`.

#### Challenge 20: Number and Letter Counter
* **Guidelines:** Write a function `parseComposition(string)` that takes an alphanumeric string and returns an object indicating the exact number of letters, number of digits, and number of symbols/spaces.
* **Example:** `analyzeComposition("Code123!")` ➔ `{ letters: 4, numbers: 3, symbols: 1 }`.
* **Suggested methods:** `split()`, `filter()`, conversion or simple regular expressions.