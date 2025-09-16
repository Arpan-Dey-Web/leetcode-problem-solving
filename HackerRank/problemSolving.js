function solve(r) {
  const PI = Math.PI;
  let area = PI * r * r;
  let perimeter = 2 * PI * r;
  // console.log(area);
  // console.log(perimeter);
}

// console.log(solve(2.6));

// function getAreaAndParameter(r) {
//   const PI = Math.PI;
//   const area = r*(r * r) ;
//   console.log(area);
// }

// getAreaAndParameter(2.6)

function getGrade(score) {
  let grade;
  // Write your code here

  if (score > 25 && score <= 30) {
    return (grade = "A");
  } else if (score > 20 && score <= 25) {
    return (grade = "B");
  } else if (score > 15 && score <= 20) {
    return (grade = "C");
  } else if (score > 10 && score <= 15) {
    return (grade = "D");
  } else if (score > 5 && score <= 10) {
    return (grade = "E");
  } else if (score >= 0 && score <= 5) {
    return (grade = "F");
  }
}

// console.log(getGrade(11));

function vowelsAndConsonants(s) {
  const vowels = ["a", "e", "i", "o", "u"];

  for (let char of s) {
    // console.log(char);
    if (vowels.includes(char)) {
      console.log(char);
    }
  }
  for (let char of s) {
    if (!vowels.includes(char)) {
      console.log(char);
    }
  }
}
// vowelsAndConsonants("javascriptloops");

function regexVar() {
  /*
   * Declare a RegExp object variable named 're'
   * It must match a string that starts and ends with the same vowel (i.e., {a, e, i, o, u})
   */
  const re = new RegExp(/^(["a" ,"e" ,"i" "o" , "u"]).*\1$/);
  /*
   * Do not remove the return statement
   */
  return re;
}

function reverseString(s) {
  try {
    s = s.split("").reverse().join("");
  } catch (error) {
    console.log(error.message);
  } finally {
    console.log(s);
  }
}

// reverseString(1234);

function getLetter(s) {
  let letter;
  // Get the first character of the string
  const firstChar = s[0];

  switch (firstChar) {
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
      letter = "A";
      break;
    case "b":
    case "c":
    case "d":
    case "f":
    case "g":
      letter = "B";
      break;
    case "h":
    case "j":
    case "k":
    case "l":
    case "m":
      letter = "C";
      break;
    default:
      letter = "D";
      break;
  }
  return letter;
}

// console.log(getLetter("adfgt"));
