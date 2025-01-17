'use strict'
const game = new Phaser.Game(800, 800, Phaser.AUTO, 'game-canvas', { preload, create, update })

function preload() {

game.load.spritesheet("cat", "kitty run.jpg", 563 / 3, 375 / 2)

}
let cat
let d = 5
function create() {
    
cat = game.add.sprite(0,0, "cat")
cat.anchor.setTo(0)
cat.scale.setTo(0.5)
cat.animations.add("cat", [0,1,2,3,4,5], 10, true)
cat.animations.play("cat")


}

function update() {

   if(cat.x <= game.width/3 && cat.y === 0 ){
    cat.x += d
   }

   else if (cat.x >= game.width/3 && cat.y <= game.height/3){
    cat.y +=d
}

    else if (cat.x <= game.width*(2/3) && cat.y <= game.height/3){
    cat.x += d
}
   

}