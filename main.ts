// Advanture gaming project

import chalk from "chalk"
import inquirer from "inquirer"

class Player {
    name:string
    fuel:number = 100
    constructor(name:string) {
        this.name = name
        
    }
    fuelDecreaser(){
        let fuel = this.fuel - 25
        this.fuel = fuel
    }
    fuelIncrease(){
        this.fuel = 100
    }
}
class Enemy {
    name:string
    fuel:number = 100
    constructor(name:string) {
        this.name = name
    }
    fuelDecreaser(){
        let fuel = this.fuel - 25
        this.fuel = fuel
    }
}

let player = await inquirer.prompt([
    {
        name: 'name',
        type: 'input',
        message: 'Please enter your name'
    }
])

console.log(player.name);

let enemy = await inquirer.prompt([
    {
        name: 'select',
        type: 'list',
        message: 'Select enemy',
        choices: ['Skeleton', 'Assassin', 'Zombie']
    }
])

let p1 = new Player(player.name)
let e1 = new Enemy(enemy.select)


do {
    if(enemy.select == 'Skeleton'){
        
        let ask = await inquirer.prompt({
            name: 'opt',
            type: 'list',
            message: 'Select enemy',
            choices: ['Attack', 'Drink Portion', 'Run For Your Life']
        })
        if(ask.opt == "Attack"){
            let num = Math.floor(Math.random() * 2)
            if (num > 0) {
                p1.fuelDecreaser()
                console.log(chalk.bold.red(`${p1.name} fuel is  ${p1.fuel}`));
                console.log(chalk.bold.green(`${e1.name} fuel is  ${e1.fuel}`));
                if(p1.fuel <= 0){
                    console.log(chalk.red.bold.italic("You Loose, Better luck next time"));
                    process.exit();
                }
            }
            if (num <= 0) {
                e1.fuelDecreaser()
                console.log(chalk.bold.green(`${p1.name} fuel is  ${p1.fuel}`));
                console.log(chalk.bold.red(`${e1.name} fuel is  ${e1.fuel}`));
                if(e1.fuel <= 0){
                    console.log(chalk.green.bold.italic("You Win!"));
                    process.exit();
                }
            }
        }
        if(ask.opt == "Drink Portion"){
            p1.fuelIncrease()
            console.log(chalk.bold.italic.green(`You Drink Health Portion Your Fuel is ${p1.fuel}`));
            
        }
        if(ask.opt == "Run For Your Life"){
            console.log(chalk.red.bold.italic("You Loose, Better luck next time"));
            process.exit();
        }
    }
    if(enemy.select == 'Assassin'){
        
        let ask = await inquirer.prompt({
            name: 'opt',
            type: 'list',
            message: 'Select enemy',
            choices: ['Attack', 'Drink Portion', 'Run For Your Life']
        })
        if(ask.opt == "Attack"){
            // console.log(chalk.red('Attack'));
            let num = Math.floor(Math.random() * 2)
            if (num > 0) {
                p1.fuelDecreaser()
                console.log(chalk.bold.red(`${p1.name} fuel is  ${p1.fuel}`));
                console.log(chalk.bold.green(`${e1.name} fuel is  ${e1.fuel}`));
                if(p1.fuel <= 0){
                    console.log(chalk.red.bold.italic("You Loose, Better luck next time"));
                    process.exit();
                }
            }
            if (num <= 0) {
                e1.fuelDecreaser()
                console.log(chalk.bold.green(`${p1.name} fuel is  ${p1.fuel}`));
                console.log(chalk.bold.red(`${e1.name} fuel is  ${e1.fuel}`));
                if(e1.fuel <= 0){
                    console.log(chalk.green.bold.italic("You Win!"));
                    process.exit();
                }
            }
        }
        if(ask.opt == "Drink Portion"){
            p1.fuelIncrease()
            console.log(chalk.bold.italic.green(`You Drink Health Portion Your Fuel is ${p1.fuel}`));
            
        }
        if(ask.opt == "Run For Your Life"){
            console.log(chalk.red.bold.italic("You Loose, Better luck next time"));
            process.exit();
        }
    }
    if(enemy.select == 'Zombie'){
        
        let ask = await inquirer.prompt({
            name: 'opt',
            type: 'list',
            message: 'Select enemy',
            choices: ['Attack', 'Drink Portion', 'Run For Your Life']
        })
        if(ask.opt == "Attack"){
            // console.log(chalk.red('Attack'));
            let num = Math.floor(Math.random() * 2)
            if (num > 0) {
                p1.fuelDecreaser()
                console.log(chalk.bold.red(`${p1.name} fuel is  ${p1.fuel}`));
                console.log(chalk.bold.green(`${e1.name} fuel is  ${e1.fuel}`));
                if(p1.fuel <= 0){
                    console.log(chalk.red.bold.italic("You Loose, Better luck next time"));
                    process.exit();
                }
            }
            if (num <= 0) {
                e1.fuelDecreaser()
                console.log(chalk.bold.green(`${p1.name} fuel is  ${p1.fuel}`));
                console.log(chalk.bold.red(`${e1.name} fuel is  ${e1.fuel}`));
                if(e1.fuel <= 0){
                    console.log(chalk.green.bold.italic("You Win!"));
                    process.exit();
                }
            }
        }
        if(ask.opt == "Drink Portion"){
            p1.fuelIncrease()
            console.log(chalk.bold.italic.green(`You Drink Health Portion Your Fuel is ${p1.fuel}`));
            
        }
        if(ask.opt == "Run For Your Life"){
            console.log(chalk.red.bold.italic("You Loose, Better luck next time"));
            process.exit();
        }
    }
} while (true);
