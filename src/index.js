#!/usr/bin/env node

import LinkedList from "./linkedlist.js";

const list = new LinkedList();

// Test appending nodes.
list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");
// Test prepending nodes.
list.prepend("mama");
list.prepend("papa");
list.prepend("vitamin");

// Test all other functions.
console.log("List size: " + list.getSize());
console.log("head node: ");
console.log(list.getHead());
console.log("tail node: ");
console.log(list.getTail());
// console.log("0:" + list.at(0).value);
// console.log("1:" + list.at(1).value);
// console.log("2:" + list.at(2).value);
// console.log("3:" + list.at(3).value);
// console.log("4:" + list.at(4).value);
// console.log("5:" + list.at(5).value);
// console.log("6:" + list.at(6).value);
// console.log("7:" + list.at(7).value);
list.pop();
console.log("Popped last node");
console.log(list.getTail());
console.log("List size: " + list.getSize());
console.log(list.contains("vitamin"));
console.log(list.contains("snake"));
console.log(list.contains("turtle"));
console.log(list.contains("bottle"));
console.log(list.find("vitamin"));
console.log(list.find("snake"));
console.log(list.toString());
list.insertAt("INSERTED at 4", 4);
console.log(list.toString());
list.removeAt(4);
console.log(list.toString());
