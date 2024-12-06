'use strict'
const game = new Phaser.Game(900, 800, Phaser.AUTO, 'game-canvas', { preload, create, update })

function preload() {
   
    game.load.spritesheet("cat","kitty run.jpg",563/3,375/2)
}

let cat
let d = 2   //this is for the speed, its optional

function create() {
cat=game.add.sprite(0,game.height,"cat")
cat.anchor.setTo(0,1)
cat.animations.add("cat",[0,1,2,3,4,5,6],10,true)
cat.animations.play("cat")
}

function update() {
cat.x += d   //if you decide not to speed it up, you can keep the cat moving by typing ----> cat.x++
}