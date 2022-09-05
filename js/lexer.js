"use strict";

/* Это LEXER!!! */
const LEXER = function (content) {
    let text = content.replace(/\s\s+/gm, " ");
    //удаляем пробелы и заменяем на один пробел между словами
    let strings = text.split("\n");
    //разделяем весь документ на строки спомощью переноса строки

    let lexems = [];
    //создаем массив "lexems"

    for (let i = 0; i < strings.length; i++) {
        //проходимся по всем строкам...
        let currentString = strings[i].trim();
        //...и находим текущую строку и удаляем пробелы с начала и конца

        if (currentString !== "") {

            //если после удаления пробелов строка не пустая выполняем...

            let words = currentString.split(" ");
            //...разбиваем строку на слова...

            let copyString = currentString;
            //копируем строку

            let stringObject = {};
            //...и создадим объект нашей строки

            let command = words[0];
            //переменная хранит команду
            let reg0;
            let reg1 = false;
            let line = i + 1;
            let reg1IsNum = false;
            let reg1IsNon = false;
            //console.log(words[1]);
            if (command != "STP") {
                reg0 = words[1].replace(new RegExp(",.+|,", "g"), "");
                reg0 = reg0.trim();
            }
            if (command != "Not" && command != "Jmp" && command != "STP") {
                reg1 = words[2].replace(new RegExp(".+,", "g"), "");
                reg1 = reg1.trim();
            }
            if ((reg1[0] == "\"" && reg1[reg1.length - 1] == "\"") || (reg1[0] == "\'" && reg1[reg1.length - 1] == "\'")) {
                reg1IsNum = true;
                reg1 = reg1.replace(new RegExp(`"|'`, "g"), "");
            }
            if (reg1 == false) {
                reg1IsNon = true;
            }


            //[char1, char2] = DICTIONARY["command"][command](words[1]);




            //console.log(`${char1}-${char2}`);

            //console.info(copyString.replace(new RegExp("(.+ .+ = ).+ ;", "g"), ""));
            Object.assign(stringObject, {
                "command": command,
                "reg0": reg0,
                "reg1": reg1,
                "line": line,
                "reg1IsNum": reg1IsNum,
                "reg1IsNon": reg1IsNon,
            });


            lexems.push(stringObject);
        }
    }
    //console.log(lexems);
    return lexems;
};
