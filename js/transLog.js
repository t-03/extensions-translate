// const theScript = document.createElement("script");
// theScript.src = "http://192.168.17.94/git/2022/04/crx/js/injection.js";
// theScript.charset = "utf-8";
// document.body.appendChild(theScript);

console.log("----", window);

var lastLog,
  lastErr = [];
console.newLog = console.log;
console.newErr = console.error;
console.log = function (...str) {
  console.newLog("--被覆盖的新Log--", ...str);
  lastLog = str;
};
console.error = function (...str) {
  console.newErr("--被覆盖的新Err--", ...str);
  lastErr = str;
};

console.log("注入成功！");

console.log("----");

window.console.log = console.log;
console.log("\n", "----++++", console.log);
window.console.error = console.error;
// console.error("Hello, Neo", "hello");
// console.error(...lastLog);
