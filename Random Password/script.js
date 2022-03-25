// Database قاعدة البيانات
const chars = [
  {
    letters_small: "abcdefghijklmnopqrstuvwxyz",
  },
  {
    letters_cap: "ABCDEFGHIJKLMNOPRSTUVWXYZ",
  },
  {
    numbers: "0123456789",
  },
  {
    characters: "!@#$%^&*()_+`~|}{[]:;><<>/-=",
  },
];
// دالة generate

function generate() {
  let randomPassword = "";
  let collection_one = chars[0]["letters_small"];
  let collection_two = chars[0]["letters_cup"];
  let collection_three = chars[0]["numbers"];
  let collection_four = chars[0]["characters"];

  randomPassword =
    randomPassword +
    collection_one.charAt(Math.floor(Math.random * collection_one.length));

  randomPassword =
    randomPassword +
    collection_two.charAt(Math.floor(Math.random * collection_two.length));
  randomPassword =
    randomPassword +
    collection_three.charAt(Math.floor(Math.random * collection_three.length));
  randomPassword =
    randomPassword +
    collection_four.charAt(Math.floor(Math.random * collection_four.length));
  display.value = randomPassword;
}
