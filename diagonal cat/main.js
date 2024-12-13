'use strict'
const game = new Phaser.Game(800, 800, Phaser.AUTO, 'game-canvas', { preload, create, update })

function preload() {
   
    game.load.spritesheet("cat","kitty run.jpg",563/3,375/2)
}

let cat
let direction = 5

function create() {
cat=game.add.sprite(0,0,"cat")
cat.anchor.setTo(0)
cat.animations.add("cat",[0,1,2,3,4,5,6],10,true)
cat.animations.play("cat")
}


function update() {
    
    if (cat.x > game.width - cat.width) {
        direction = -5          //here we change the direction by putting -5 instead of 5
      }
    
      if (cat.x < 0) {        //if the cat lays on an area past the game width, then the cat will move backwards
        direction = 5
      }
      cat.x += direction
      cat.y += direction
    
    
}