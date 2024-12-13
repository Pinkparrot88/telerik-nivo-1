'use strict'

let game = new Phaser.Game(800, 800, Phaser.AUTO, 'game-canvas', { preload, create, update })

let a=0   //this will be used for time 
function preload() {
    
}

function create() {

}

function update() {
  
    a++ //this is for it to increase by 1
    if(a>=60)    //this is to count seconds for a minute
        { 
        game.stage.backgroundColor = Phaser.Color.getRandomColor() //this is to randomize the colors
        a=0 //this is for it to reset and start counting again
    }
}