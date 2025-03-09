'use strict'
const game = new Phaser.Game(500, 500, Phaser.AUTO, 'game-canvas', { preload, create, update })

function preload() {
    
    game.load.spritesheet("dude", "Unarmed_Walk_full.png", 384 / 6, 256 / 4)
    game.load.image("background", "background-flamingos.png")
   

}


let dude
let a,w,s,d
let background



function create() {
   

    game.world.setBounds(0 ,0, 1440, 900)
    background = game.add.sprite(0, 0, "background")
   // background.scale.setTo(1)
    // background.anchor.setTo(0)
    


    dude = game.add.sprite(game.width/2,game.height/2, "dude")
    dude.animations.add("dudedown", [0, 1, 2, 3, 4, 5], 6, true)
    dude.animations.add("dudeup", [18, 19, 20, 21, 22, 23], 6, true)   
    dude.animations.add("dudeleft", [6, 7, 8, 9, 10, 11], 6, true) 
    dude.animations.add("duderight", [12, 13, 14, 15, 16, 17], 6, true)
    dude.animations.add("stop", [0], 10, true)
    dude.scale.setTo(4)
    dude.anchor.set(0.4)
    dude.fixedToCamera = true
   

   game.physics.arcade.enable(dude) 
   game.input.keyboard.createCursorKeys()
  
  

   a = game.input.keyboard.addKey(Phaser.Keyboard.A)
   s = game.input.keyboard.addKey(Phaser.Keyboard.S)
   d = game.input.keyboard.addKey(Phaser.Keyboard.D)
   w = game.input.keyboard.addKey(Phaser.Keyboard.W)

}

function update() {
if (d.isDown){
    dude.animations.play("duderight"), game.camera.x += 4
}
else if(a.isDown){
    dude.animations.play("dudeleft"), game.camera.x -= 4
}

if (w.isDown){
    dude.animations.play("dudeup"), game.camera.y -= 4
}
else if (s.isDown){
    dude.animations.play("dudedown"), game.camera.y +=4
}
  
}







//let isMoving = true
/*
    if (d.isDown && dude.x < game.width - dude.width) {
        dude.body.velocity.x = speed, 
         dude.animations.play("duderight"),
          isMoving = false
    } 
    else if (a.isDown && dude.x > 0) {
        dude.body.velocity.x = -speed,
         dude.animations.play("dudeleft"),
          isMoving = false
    }
    else{dude.body.velocity.x = 0} 


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
*/
