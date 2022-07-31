module.exports = function check(str, bracketsConfig) {
  str = str.split('');
  let objectBrackets = Object.fromEntries(bracketsConfig);
  let stack = [];
 
  str.forEach(element => {
    if (element === objectBrackets[stack[stack.length - 1]]) {
      stack.pop()
    }  else {
      stack.push(element)
    };
  });
  return stack.length === 0;
}
