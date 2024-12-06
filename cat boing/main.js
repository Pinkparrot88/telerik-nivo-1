'use strict'

const game = new Phaser.Game(800, 800, Phaser.AUTO, 'game-canvas', { preload, create, update })

function preload() {
  game.load.spritesheet("cat", "kitty run.jpg", 563 / 3, 375 / 2)

}
let cat
let direction = 5
function create() {



  cat = game.add.sprite(190, game.height, "cat")
  cat.anchor.setTo(1)
  cat.scale.setTo(1)
  cat.animations.add("cat", [0, 1, 2, 3, 4, 5, 6], 10, true)
  cat.animations.play("cat")

}

function update() {

  if (cat.x > game.width) {
    direction = -5
  }

  if (cat.x < 190) {
    direction = 5
  }
  cat.x += direction

}