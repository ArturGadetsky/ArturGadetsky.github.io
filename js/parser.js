"use strict";

/* Это PARSER!!! */
const PARSER = function (content) {
    let text = "";      // строка текста кода который будет выводиться после компиляции
    let line = 1;
    for (let xyz of content) {
        //console.log(xyz);
        //console.log(library.translation(xyz.command, xyz.reg0, xyz.reg1, xyz.reg1IsNum, xyz.reg1IsNon));
        text += library.translation(xyz.command, xyz.reg0, xyz.reg1, xyz.reg1IsNum, xyz.reg1IsNon);
        if (xyz.reg1IsNon || xyz.reg1 == "A") {
            line += 2;
        }
        else {
            line += 3;
        }
    }
    for (let i; line <= 54; i++) {
        text += `00\n`;
        line++;
    }
    text += `FF\n`
    return text;
};