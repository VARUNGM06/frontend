var name = new Array("varun", "arun", "jeva", "kd");

// console.log(name);
// console.log(name[0]);
name[3]="dhanraj";
// console.log(name[3]);
// console.log(name);

name.pop();
name.pop();
console.log(name);

name.unshift("gm");
console.log(name);
name.shift();
console.log(name);

console.log(name.indexOf("arun"));

console.log(Array.from("varun"));
    