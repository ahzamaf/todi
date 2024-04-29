#! /usr/bin/env node
import inquirer from "inquirer";

let todolist = [];
let conditions = true;
console.log("\n \t welcome to codewithahzam - todo-list applicatioin\n")

while(conditions){
let addtask = await inquirer.prompt([
{
    type: "input",
    name: "task",
    message: "enter your task : "
}
]);
todolist.push(addtask.task);
console.log(`${addtask.task} task added successfully`);





let addmoretask = await inquirer.prompt([
    {
        type: "confirm",
        name: "addmore",
        message: "do you want to enter more task ? ",
        default: "false"
    }
    ]);
conditions = addmoretask.addmore
}
console.log("your updated todo-list :" , todolist)
