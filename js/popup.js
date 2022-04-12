"use strict";

var lastLog = [];
console.newLog = console.error;
console.error = function (...str) {
  console.newLog(...str);
  lastLog = str;
};
console.error("Hello, Neo", "hello");
console.error("--lastLog--", ...lastLog);
document.write(lastLog);

// let result = console.log;
// console.log(`% 打印信息${result}`, "color:red");

// console.log("%c hello world", "color:red");
