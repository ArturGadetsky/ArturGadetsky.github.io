"use strict";
/*
console.log(library.translation("Mov", "4", "200", true));
console.log(library.translation("Add", "4", "1", false));
console.log(library.translation("Jmp", "4", "", true));
*/

const compile = document.querySelector('.compile');  //для компиляции кода
let textInput = document.querySelector('#text_input');  //поле ввода для кода
let textOutput = document.querySelector('#text_output');  //поле вывода для скомпилированного кода
compile.addEventListener('click', () => {
    textOutput.value = PARSER(LEXER(textInput.value));
});