'use strict'
const game = new Phaser.Game(800, 800, Phaser.AUTO, 'game-canvas', { preload, create, update })

function preload() {
    
    game.load.spritesheet("dude", "walking dude.jpg", 474 / 8, 869 / 8)
   
}

let dude

function create() {

    dude = game.add.sprite(0,0, "dude")
    dude.animations.add("dude", [0, 1, 2, 3, 4, 5], 6, true).play()
    dude.scale.setTo(1)
    dude.anchor.setTo(0)
    dude.alpha = 1

   game.physics.arcade.enable(dude) //we add arcade physics for our "dude" sprite

  dude.body.collideWorldBounds = true
  dude.body.velocity.setTo(700)
  dude.body.bounce.setTo(0.9)
  dude.body.gravity.y = 1000

}

function update() {

}

