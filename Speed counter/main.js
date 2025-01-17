'use strict'
const game = new Phaser.Game(800, 800, Phaser.AUTO, 'game-canvas', { preload, create, update })

function preload() {

    game.load.spritesheet("cat", "kitty run.jpg", 563 / 3, 375 / 2)

}

let speed = 1
let cat
let text
let a=0

function create() {

    const myStyle = {

        font: '50px Tahoma',
        fill: '#0eedbd',
        strokeThickness: 4
    }

  cat = game.add.sprite(0,0, "cat")
cat.anchor.setTo(0)
cat.scale.setTo(0.5)
cat.animations.add("cat", [0,1,2,3,4,5], 10, true)
cat.animations.play("cat")

 text = game.add.text (game.width/2, game.height/2, a, myStyle)
text.anchor.setTo(0.5)
    
}

function update() {

   a++
   if(a<=100) {speed++}
    text.setText(speed)
     
    

    if (cat.x < game.width-cat.width && cat.y<=0) {
        cat.x+=speed  //right
        }
    
      else if (cat.x >= game.width-cat.width && cat.y < game.height-cat.height) {
        cat.y+=speed  //down
      }
      else if (cat.x > 0 && cat.y >= game.height-cat.height ) {
        cat.x-=speed  //left
        
      }
      else if (cat.x <= 0 && cat.y > 0 ) {
        cat.y-=speed//up
        
      }
    
}