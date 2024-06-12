function reverseString(str) {
  let result = "";
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }

  return result;
}

console.log(reverseString("yoyo master"));

function reverseStringRecursive(str) {
  // if (!str.length) return "";
  const strTmp = str.slice(0, str.length - 1);

  // * in case str.slice(0, 0) => it's '' and here it's last element so we need to return it right so that's the base case
  if (strTmp === "") return str[0];

  return str[str.length - 1] + reverseStringRecursive(strTmp);
}

console.log(reverseStringRecursive("yoyo master"));
