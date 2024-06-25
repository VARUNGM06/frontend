function reverseString(str) {
    return str.split("").reverse().join("");
}
let originalString = "JavaScript";
let reversedString = reverseString(originalString);
console.log("Reversed String:", reversedString);