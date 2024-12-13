"use strict"

const game = new Phaser.Game(800, 800, Phaser.AUTO, 'game-canvas', { preload, create, update })

function preload() {
  game.load.spritesheet("cat", "kitty run.jpg", 563 / 3, 375 / 2)

}
let cat
function create() {

  cat = game.add.sprite(0,0, "cat")
  cat.anchor.setTo(0)
  cat.scale.setTo(1)
  cat.animations.add("cat", [0, 1, 2, 3, 4, 5, 6], 10, true)
  cat.animations.play("cat")

}

function update() {

  if (cat.x < game.width-cat.width && cat.y==0) {
    cat.x+=10    //right
    }

  else if (cat.x >= game.width-cat.width && cat.y < game.height-cat.height) {
    cat.y+=10   //down
  }
  else if (cat.x > 0 && cat.y >= game.height-cat.height ) {
    cat.x-=10   //left
    
  }
  else if (cat.x <= 0 && cat.y > 0 ) {
    cat.y-=10  //up
    
  }

}
