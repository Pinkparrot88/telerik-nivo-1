'use strict'
const game = new Phaser.Game(800, 800, Phaser.AUTO, 'game-canvas', { preload, create, update })

function preload() {

game.load.image("yellow_dino", "dino (0).png")
game.load.image("red_dino", "dino (2).png")

}

let y_dino
let r_dino


function create() {

y_dino = game.add.sprite(game.width/4, game.height/4, "yellow_dino")
r_dino = game.add.sprite(game.width/2, game.height/2, "red_dino")

y_dino.anchor.setTo(0.5)
r_dino.anchor.setTo(0.5)

y_dino.scale.setTo(0.7)
r_dino.scale.setTo(0.7)

y_dino.inputEnabled = true
r_dino.inputEnabled = true

y_dino.input.enableDrag(true)
r_dino.input.enableDrag(true)


}

function update() {

}