'use strict'
const game = new Phaser.Game(800, 800, Phaser.AUTO, 'game-canvas', { preload, create, update })


function preload() {
    game.load.spritesheet("cat", "kitty run.jpg", 563 / 3, 375 / 2)

}
let cat


function create() {

  cat = game.add.sprite(0,0, "cat")
  cat.anchor.setTo(0)
  cat.scale.setTo(0.5)
  cat.animations.add("cat", [0, 1, 2, 3, 4, 5], 10, true)
  cat.animations.play("cat")

}

function update() {
  
    
    
  cat.x = game.world.randomX //this gives a randome cordinate for the x axis
  cat.y = game.world.randomY //this gives a randome cordinate for the y axis

  //the combination of bothe makes it so the image can generate anywhere on the screen
  
}