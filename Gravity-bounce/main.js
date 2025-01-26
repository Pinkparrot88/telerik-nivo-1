'use strict'
const game = new Phaser.Game(800, 800, Phaser.AUTO, 'game-canvas', { preload, create, update })

function preload() {
    
    game.load.spritesheet("dude", "Unarmed_Walk_full.png", 384 / 6, 256 / 4)
   
}

let dude

function create() {
   

    dude = game.add.sprite(0,0, "dude")
    dude.animations.add("dude", [0, 1, 2, 3, 4, 5], 6, true).play()
    dude.scale.setTo(4)
    dude.anchor.setTo(0)
    dude.alpha = 1

   game.physics.arcade.enable(dude) //we add arcade physics for our "dude" sprite

  
  dude.body.collideWorldBounds = true
  dude.body.velocity.setTo(400)
  dude.body.bounce.setTo(1)
 // dude.body.gravity.y = 100

}

function update() {

}

