'use strict'
const game = new Phaser.Game(800, 800, Phaser.AUTO, 'game-canvas', { preload, create, update })

function preload() {

 
    
    game.load.spritesheet("dude", "Unarmed_Walk_full.png", 384 / 6, 256 / 4)
   

}

let speed = 200
let dude
let a,w,s,d



function create() {
   

    dude = game.add.sprite(40,40, "dude");
    dude.animations.add("dudedown", [0, 1, 2, 3, 4, 5], 6, true)
    dude.animations.add("dudeup", [18, 19, 20, 21, 22, 23], 6, true)   
    dude.animations.add("dudeleft", [6, 7, 8, 9, 10, 11], 6, true) 
    dude.animations.add("duderight", [12, 13, 14, 15, 16, 17], 6, true)
    dude.animations.add("stop", [0], 10, true)
    dude.scale.setTo(5)
    dude.anchor.setTo(0)
    dude.alpha = 1

   game.physics.arcade.enable(dude) //we add arcade physics for our "dude" sprite

   game.input.keyboard.createCursorKeys()
   
   a = game.input.keyboard.addKey(Phaser.Keyboard.A)
   s = game.input.keyboard.addKey(Phaser.Keyboard.S)
   d = game.input.keyboard.addKey(Phaser.Keyboard.D)
   w = game.input.keyboard.addKey(Phaser.Keyboard.W)

}

function update() {

    let isMoving = true

    if (d.isDown && dude.x < game.width - dude.width) {
        dude.body.velocity.x = speed, //instead of doing "dude.x += speed", we do it with velocity
         dude.animations.play("duderight"),
          isMoving = false
    } 
    else if (a.isDown && dude.x > 0) {
        dude.body.velocity.x = -speed,
         dude.animations.play("dudeleft"),
          isMoving = false
    }
    else{dude.body.velocity.x = 0} //This helps "dude" stop after we've finished pressing for left and right


   if (w.isDown && dude.y > 0) {
       dude.body.velocity.y = -speed,
        dude.animations.play("dudeup"),
         isMoving = false
    } 
    else if (s.isDown && dude.y < game.height - dude.height) {
        dude.body.velocity.y = speed,
         dude.animations.play("dudedown"),
          isMoving = false
    }
    else{dude.body.velocity.y = 0} //This helps "dude" stop after we've finished pressing for up and down




    
    if (isMoving==true) {
        dude.animations.play("stop")
    }  
}

