var lastLog = [];
console.newLog = console.log;
console.log = function (...str) {
  console.newLog("--被覆盖新Log--", ...str);
  lastLog = str;
};

console.log("注入成功！");
