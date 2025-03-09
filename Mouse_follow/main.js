'use strict'
const game = new Phaser.Game(800, 800, Phaser.AUTO, 'game-canvas', { preload, create, update })

function preload() {

    game.load.image("space_ship", "ship (13).png")

}

let ship

function create() {
    
    ship = game.add.sprite(game.width/2, game.height/2, "space_ship")
    ship.anchor.setTo(0.5)

    game.physics.arcade.enable(ship)
    

}

function update() {

    if (game.physics.arcade.distanceToPointer (ship, game.input.activePointer) > 30){
        ship.rotation = game.physics.arcade.moveToPointer(ship, 500)
    }
    else{ship.body.velocity.setTo(0)}

}