    // chapter#1:alert
    alert("Welcome to JavaScript!");
    // chapter#2:variable
    let greeting = "Hello, user!";
    alert(greeting);
    // chapter#3: Variables for Numbers
    let userAge = 18;
    let futureAge = userAge + 5;
    // chapter#4: Variables  Names Legal and Illegal
    // Valid variable names
    let userName;
    let $dollarValue;
    let camelCaseExample;
    // chapter#5:Math Expressions – Familiar Operators
    let a = 8;
    let b = 2;
    alert(a + b); // Addition
    alert(a - b); // Subtraction
    alert(a * b); // Multiplication
    alert(a / b); // Division
    alert(a % b); // Modulus
    // Chapter 6: Math Expressions – Unfamiliar Operators
    let num = 10;
    num++;
    alert(num); // 11

    --num;
    alert(num); // 10
    // Chapter 7: Math Expressions – Eliminating Ambiguity
    let result1 = (2 + 3) * 4;
    let result2 = 2 + (3 * 4);

    console.log(result1); // 20
    console.log(result2); // 14
    // Chapter 8: Concatenating Text Strings
    let userName = "Alex";
    let message = "Hello, " + userName + "!";
    alert(message);
    // Chapter 9: Prompts
    let name = prompt("Enter your name:");
    alert("Hello, " + name + "!");
    // Chapter 10: if Statements
    let password = prompt("Enter your password:");
    if (password === "letmein") {
        alert("Access granted");
    }
    // Chapter 11: Comparison Operators
    let x = 10;
    let y = 5;

    alert(x > y); // true
    alert(x < y); // false
    alert(x === y); // false
    alert(x !== y); // true
    // Chapter 12: if...else and else if Statements
    let guess = +prompt("Guess a number:");
    let correct = 7;

    if (guess < correct) {
        alert("Too low");
    } else if (guess > correct) {
        alert("Too high");
    } else {
        alert("Correct!");
    }
    // Chapter 13: Testing Sets of Conditions
    let age = 20;
    let hasID = true;

    if (age > 18 && hasID) {
        alert("You may enter");
    }
    // Chapter 14: if Statements Nested
    let user = prompt("Enter username:");
    let pass = prompt("Enter password:");

    if (user === "admin") {
        if (pass === "1234") {
            alert("Welcome!");
        } else {
            alert("Wrong password!");
        }
    } else {
        alert("Unknown user!");
    }
    // Chapter 15: Arrays
    let fruits = ["apple", "banana", "mango", "grape", "orange"];
    alert(fruits[2]); // "mango"
    // Chapter 16: Arrays – Adding and Removing Elements
    fruits.push("kiwi"); // Add to end
    fruits.shift(); // Remove first item
    // Chapter 17: Arrays – Removing, Inserting, and Extracting Elements
    fruits.splice(1, 1, "peach", "plum"); // Replace 2nd item
    // Chapter 18: for Loops
    for (let i = 0; i < fruits.length; i++) {
        alert(fruits[i]);
    }
    // Chapter 19: for Loops – Flags, Booleans, array length, and breaks
    let search = prompt("Enter a fruit name:");
    let found = false;

    for (let i = 0; i < fruits.length; i++) {
        if (fruits[i] === search) {
            found = true;
            break;
        }
    }

    if (found) {
        alert("Found");
    } else {
        alert("Not found");
    }
    // Chapter 20: for Loops Nested
    let firstNames = ["Cool", "Fast", "Big"];
    let lastNames = ["Bear", "Tiger", "Lion"];

    for (let i = 0; i < firstNames.length; i++) {
        for (let j = 0; j < lastNames.length; j++) {
            console.log(firstNames[i] + " " + lastNames[j]);
        }
    }


    // Chapter 20 – For Loops Nested
    let firstNames = ["Lil", "Big"];
    let lastNames = ["Zzz", "Boom"];

    console.log("Combinations:");
    for (let i = 0; i < firstNames.length; i++) {
        for (let j = 0; j < lastNames.length; j++) {
            console.log(firstNames[i] + " " + lastNames[j]);
        }
    }
    // Inner loop runs 2 times for each outer loop run. If outer runs 3 times, inner runs 3×2 = 6 times.

    console.log("Filtered Combinations (index not same):");
    for (let i = 0; i < firstNames.length; i++) {
        for (let j = 0; j < lastNames.length; j++) {
            if (i !== j) console.log(firstNames[i] + " " + lastNames[j]);
        }
    }

    // Chapter 21 – Changing case
    let userInput = prompt("Enter something: ");
    console.log("Lowercase:", userInput.toLowerCase());

    let city = prompt("Enter your city name:");
    if (city.toUpperCase() === "KARACHI") {
        console.log("Welcome to Karachi!");
    }
    // Changing case helps in comparison regardless of user input format.

    // Chapter 22 – String length and parts
    let str = "JavaScriptRocks";
    console.log("First 5 chars:", str.slice(0, 5));

    let userStr = prompt("Enter any string:");
    console.log("Last character:", userStr[userStr.length - 1]);

    let fullName = prompt("Enter full name:");
    console.log("Length of full name:", fullName.length);

    // Chapter 23 – Finding segments
    let sentence = "The lazy dog sleeps.";
    console.log("Index of 'dog':", sentence.indexOf("dog"));

    let greet = prompt("Type something:");
    if (greet.toLowerCase().indexOf("hello") !== -1) {
        console.log("You said hello!");
    } else {
        console.log("No hello found.");
    }
    // If not found, indexOf returns -1.

    // Chapter 24 – Finding character at location
    let word = "JavaScript";
    console.log("Character at pos 4:", word.charAt(4));

    let str2 = prompt("Enter a string:");
    let pos = +prompt("Enter a position:");
    console.log("Character at that position:", str2.charAt(pos));
    // If out of bounds, returns ""

    // Chapter 25 – Replacing characters
    let msg = "This is a bad example.";
    console.log(msg.replace("bad", "good"));

    let sentence2 = "I love JS. JS is fun!";
    console.log(sentence2.replace(/JS/g, "JavaScript"));

    let template = "Hello, NAME";
    let username = prompt("Enter your name:");
    console.log(template.replace("NAME", username));

    // Chapter 26 – Rounding numbers
    console.log("Math.round(2.6):", Math.round(2.6));
    console.log("Math.floor(2.6):", Math.floor(2.6));
    console.log("Math.ceil(2.6):", Math.ceil(2.6));

    let number = +prompt("Enter a number:");
    console.log("Rounded:", Math.round(number));

    console.log("Math.floor(-2.9):", Math.floor(-2.9));
    console.log("Math.ceil(-2.9):", Math.ceil(-2.9));
    // floor goes down, ceil goes up (towards positive)

    // Chapter 27 – Random numbers
    console.log("Dice roll:", Math.floor(Math.random() * 6) + 1);

    let coin = Math.random() < 0.5 ? "Heads" : "Tails";
    console.log("Coin toss:", coin);

    let password = Math.floor(Math.random() * 9000) + 1000;
    console.log("Random password:", password);

    // Chapter 28 – String to int/float
    let floatStr = "45.67";
    console.log("Parsed float:", parseFloat(floatStr));

    let pxVal = "123px";
    console.log("Parsed int:", parseInt(pxVal));

    let badVal = "abc";
    console.log("Parsed int (abc):", parseInt(badVal)); // NaN

    // Chapter 29 – Converting numbers and strings
    let num = 123;
    let strNum = num.toString();
    console.log(strNum, typeof strNum);

    let year = "2025";
    let result = Number(year) + 10;
    console.log(result);

    // parseInt ignores non-numeric characters, Number() returns NaN if invalid
    console.log("parseInt('50px'):", parseInt("50px")); // 50
    console.log("Number('50px'):", Number("50px")); // NaN

    // Chapter 30 – Decimal control
    let val = 123.45678;
    console.log(val.toFixed(2));

    let strDec = "12.999";
    console.log("Rounded 1 decimal:", Math.round(parseFloat(strDec) * 10) / 10);

    let userDec = +prompt("Enter a decimal number:");
    console.log("Rounded to 3 decimals:", userDec.toFixed(3));

    // Chapter 31 – Current date and time
    let now = new Date();
    console.log("Current date and time:", now);

    console.log("Current year:", now.getFullYear());

    let hours = now.getHours();
    console.log(hours < 12 ? "Good Morning!" : "Good Evening!");

    // Chapter 32 – Extracting date parts
    console.log("Day:", now.getDate());
    console.log("Month:", now.getMonth() + 1);
    console.log("Year:", now.getFullYear());

    console.log("Hours:", now.getHours());
    console.log("Minutes:", now.getMinutes());

    let digitalClock = `${now.getHours()}:${now.getMinutes().toString().padStart(2, '0')}`;
    console.log("Digital Clock:", digitalClock);