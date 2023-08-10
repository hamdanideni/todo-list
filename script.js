"use strict";

// select element
const inputText = document.getElementById("input-text");
const pendingNumberEl = document.querySelector(".pending");
const btnClear = document.querySelector(".clear-all");
const inputLists = document.querySelector(".input-lists");

let inputValueArray = [];

function clearTodo() {
  while (inputLists.firstChild) {
    inputLists.removeChild(inputLists.firstChild);
  }
}

function addTodoList(index, todo) {
  // create element list item
  let inputListItem = document.createElement("div");
  inputListItem.classList.add("input-list-item");
  // create element arrow
  let arrowRight = document.createElement("i");
  arrowRight.classList.add("ri-arrow-right-double-line");
  // creta element todo
  let todoEl = document.createElement("p");
  todoEl.classList.add("todo");
  todoEl.innerText = todo;
  // create element delete button
  let deleteButton = document.createElement("i");
  deleteButton.classList.add("ri-check-double-line", "delete-button");
  deleteButton.onclick = function () {
    removeTodo(index);
  };

  // append element to parent
  inputListItem.appendChild(arrowRight);
  inputListItem.appendChild(todoEl);
  inputListItem.appendChild(deleteButton);
  inputLists.appendChild(inputListItem);
}

function removeTodo(index) {
  inputValueArray.splice(index, 1);
  displayTodo();
  pendingNumber();
}

function displayTodo() {
  //clear todo first
  clearTodo();
  // display todo
  for (let i = 0; i < inputValueArray.length; i++) {
    const todo = inputValueArray[i];
    addTodoList(i, todo);
  }
}

// get input value
inputText.addEventListener("keyup", function (e) {
  let inputValue = inputText.value.trim();
  if (e.key === "Enter" && inputValue.length > 0) {
    inputValueArray.push(inputValue);
    inputText.value = "";
    displayTodo();
    pendingNumber();
  }
});

function pendingNumber() {
  pendingNumberEl.innerText =
    inputValueArray.length < 1 ? "no" : inputValueArray.length;
}
pendingNumber();

// button clear all
btnClear.addEventListener("click", function () {
  inputValueArray = [];
  displayTodo();
  pendingNumber();
});
