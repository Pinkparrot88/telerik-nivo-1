'use strict'
const game = new Phaser.Game(800, 800, Phaser.AUTO, 'game-canvas', { preload, create, update })

function preload() {

game.load.image("flamingo_background", "background-flamingos-transparent.png")
game.load.image("sphere_clicker", "sphere-purple.png")

}

let background
let sphere


function create() {

game.stage.backgroundColor = "fff"

    background = game.add.sprite(0,0, "flamingo_background")
    background.scale.setTo(0.9)

    sphere = game.add.sprite(game.width/2, game.height/2, "sphere_clicker")
    sphere.scale.setTo(0.2)
    sphere.anchor.setTo(0.5)

    sphere.inputEnabled = true
   sphere.input.pixelPerfectOver = true
   //sphere.input.pixelPerfectClick = true
   
    sphere.events.onInputDown.add(function(){
        game.stage.backgroundColor = Phaser.Color.getRandomColor()
    })
}

function update() {

}