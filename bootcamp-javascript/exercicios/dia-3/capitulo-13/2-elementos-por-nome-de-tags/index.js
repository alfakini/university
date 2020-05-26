function byTagName(node, tagName) {
  // IMPLEMENTE
}

console.log(byTagName(document.body, "h1").length);
// → 1

console.log(byTagName(document.body, "span").length);
// → 3

var para = document.querySelector("p");
console.log(byTagName(para, "span").length);
// → 2
