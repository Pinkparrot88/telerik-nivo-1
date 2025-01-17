'use strict'
const game = new Phaser.Game(800, 800, Phaser.AUTO, 'game-canvas', { preload, create, update })

function preload() {

 
    game.load.spritesheet("broski", "walking dude.jpg", 473 / 8, 869 / 8)
    game.load.spritesheet("dude", "Unarmed_Walk_full.png", 384 / 6, 256 / 4)
   

}

let wasdcurs
let cursors
let speed = 7
let broski
let dude
let a,w,s,d


function create() {

    broski = game.add.sprite(40,40, "broski");
    broski.animations.add("broskidown", [8, 9, 10, 11, 12, 13, 14, 15], 10, true)  
    broski.animations.add("broskiup", [48, 49, 50, 51, 52, 53, 54, 55], 10, true)   
    broski.animations.add("broskileft", [23, 24, 25, 26, 27, 28, 29, 30], 10, true) 
    broski.animations.add("broskiright", [31, 32, 33, 34, 35, 36, 37, 38], 10, true)
    broski.animations.add("stop", [12], 10, true)
    broski.scale.setTo(1)
    broski.anchor.setTo(0)
    broski.alpha = 1

    dude = game.add.sprite(40,40, "dude");
    dude.animations.add("dudedown", [0, 1, 2, 3, 4, 5], 6, true).play()
    dude.animations.add("dudeup", [18, 19, 20, 21, 22, 23], 6, true)   
    dude.animations.add("dudeleft", [6, 7, 8, 9, 10, 11], 6, true) 
    dude.animations.add("duderight", [12, 13, 14, 15, 16, 17], 6, true)
    dude.scale.setTo(5)
    dude.anchor.setTo(0)
    dude.alpha = 1

   cursors=game.input.keyboard.createCursorKeys()
   game.input.keyboard.createCursorKeys()
   
   a = game.input.keyboard.addKey(Phaser.Keyboard.A)
   s = game.input.keyboard.addKey(Phaser.Keyboard.S)
   d = game.input.keyboard.addKey(Phaser.Keyboard.D)
   w = game.input.keyboard.addKey(Phaser.Keyboard.W)

}

function update() {
    let isMoving = false

    if (cursors.right.isDown && broski.x < game.width - broski.width){
        broski.x+= 10 , broski.play("broskiright"), isMoving=true
    }
   else if (cursors.left.isDown && broski.x > 0){
        broski.x-= 10 , broski.play("broskileft"), isMoving=true
    }

   if (cursors.up.isDown && broski.y > 0){
        broski.y-= 10 , broski.play("broskiup"), isMoving=true
    }
   else if (cursors.down.isDown && broski.y < game.height - broski.height){
        broski.y+= 10 , broski.play("broskidown"), isMoving=true
    }
     
    if (isMoving==false) {
           broski.animations.play("stop")}
    



   
    if (d.isDown && dude.x < game.width - dude.width){
        dude.x+= 10 , dude.play("duderight"), isMoving=true
    }
   else if (a.isDown && dude.x > 0){
        dude.x-= 10 , dude.play("dudeleft"), isMoving=true
    }

   if (w.isDown && dude.y > 0){
        dude.y-= 10 , dude.play("dudeup"), isMoving=true
    }
   else if (s.isDown && dude.y < game.height - dude.height){
        dude.y+= 10 , dude.play("dudedown"), isMoving=true
    }

    
}
