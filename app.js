//input variable
const inputField = document.getElementById('input');

//to insert number in input field
const insertNum = num => inputField.textContent += num;

//to carry out operation uing eval() function
const equalTo = () => (inputField.textContent) ? inputField.textContent = eval(inputField.textContent) : false;

//to remove one value at a time using the erase button
const eraseNum = () => inputField.textContent = inputField.textContent.substring(0, inputField.textContent.length - 1);

//to clear all the input using the clear button
const clearInput = () => inputField.textContent = '';