//JS for If2
//same as If1 Simplest but the string is converted to
//all lowercase before evaluating
//also wrapped in a function
const val = document.querySelector(".firstName").innerHTML;
console.log(typeof val);
console.log(val);

function ifJulie() {
  let targetName = "julie";
  if (val === "") {
    alert("please enter text");
  } else if (val.toLowerCase() !== targetName) {
    alert("no match");
  } else if (val.toLowerCase() === targetName) {
    alert("match");
  }
}

ifJulie();
