'use strict'
const game = new Phaser.Game(800, 800, Phaser.AUTO, 'game-canvas', { preload, create, update })

function preload() {

 
    
    game.load.spritesheet("dude", "Unarmed_Walk_full.png", 384 / 6, 256 / 4)
   

}

let speed = 7
let dude
let a,w,s,d

//here we are creating a function named foo, which we can use again in different places, more than once
//creating a new function must be done outside the prexisting ones ( preload, create, update )
const foo = function() { 
    let isMoving = false

    if (d.isDown && dude.x < game.width - dude.width) {
        dude.x += speed,dude.animations.play("duderight"), isMoving = true
    } 
    else if (a.isDown && dude.x > 0) {
        dude.x -= speed, dude.animations.play("dudeleft"), isMoving = true
    }
   if (w.isDown && dude.y > 0) {
    dude.y -= speed, dude.animations.play("dudeup"), isMoving = true
    } 
    else if (s.isDown && dude.y < game.height - dude.height) {
        dude.y += speed, dude.animations.play("dudedown"), isMoving = true
    }
    if (isMoving==false) {
        dude.animations.play("stop")
    }
}



function create() {
   

    dude = game.add.sprite(40,40, "dude");
    dude.animations.add("dudedown", [0, 1, 2, 3, 4, 5], 6, true).play()
    dude.animations.add("dudeup", [18, 19, 20, 21, 22, 23], 6, true)   
    dude.animations.add("dudeleft", [6, 7, 8, 9, 10, 11], 6, true) 
    dude.animations.add("duderight", [12, 13, 14, 15, 16, 17], 6, true)
    dude.animations.add("stop", [0], 10, true)
    dude.scale.setTo(5)
    dude.anchor.setTo(0)
    dude.alpha = 1


   game.input.keyboard.createCursorKeys()
   
   a = game.input.keyboard.addKey(Phaser.Keyboard.A)
   s = game.input.keyboard.addKey(Phaser.Keyboard.S)
   d = game.input.keyboard.addKey(Phaser.Keyboard.D)
   w = game.input.keyboard.addKey(Phaser.Keyboard.W)

}

function update() {

    foo() //here we are calling the previously made function
     
}



