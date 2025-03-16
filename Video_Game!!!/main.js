'use strict'
const game = new Phaser.Game(1920, 1080, Phaser.AUTO, 'game-canvas', { preload, create, update })

function preload() {


    game.load.spritesheet("dude", "dude-org.288x40.9x1.png", 288 / 9, 48 / 1)
    game.load.image("background", "desert.png")
    game.load.image("platform", "platform.png")
    game.load.spritesheet("coin", "coin.png", 1198 / 5, 704 / 2)
    

}


let cursors 
let speed = 900
let dude
let a,w,s,d 
let platform, platform2, platform3
let coin



const jump = function(){       //this is where I make the function that helps my character jump
    if (w.isDown)
        {dude.body.velocity.y = -700}
}


const collectCoin = function(dude, coin){       //this is where I make the function that helps "dude" destroy a coin when touched
    coin.destroy() 
}


function create() {

    game.add.image(0,0, "background")

    coin = game.add.sprite (300, 150, "coin")
    coin.animations.add("coinspin1", [0,1,2,3,4,5,6,7,8,9],20, true).play()
    coin.scale.setTo(0.4)

    coin = game.add.sprite (550, 150, "coin")
    coin.animations.add("coinspin2", [0,1,2,3,4,5,6,7,8,9],20, true).play()
    coin.scale.setTo(0.4)

    coin = game.add.sprite (1100, 400, "coin")
    coin.animations.add("coinspin3", [0,1,2,3,4,5,6,7,8,9],20, true).play()
    coin.scale.setTo(0.4)

    coin = game.add.sprite (1400, 400, "coin")
    coin.animations.add("coinspin4", [0,1,2,3,4,5,6,7,8,9],20, true).play()
    coin.scale.setTo(0.4)




   platform = game.add.sprite(200,300, "platform")
   platform.scale.setTo(0.7)
    
  platform2 = game.add.sprite(1000, 550, "platform")
  platform2.scale.setTo(0.7)

   platform3 = game.add.sprite(0,880, "platform")
  platform3.height = 200
  platform3.width = game.width
   


    dude = game.add.sprite(40,40, "dude")
    dude.animations.add("dudedown", [0, 1, 2, 3, 4, 5], 6, true) 
    dude.animations.add("dudeup", [1,2], 6, true)   
    dude.animations.add("dudeleft", [0,1,2,3], 4, true) 
    dude.animations.add("duderight", [5,6,7,8], 4, true)
    dude.animations.add("stop", [4], 1, true)
    dude.scale.setTo(3)
    dude.anchor.setTo(0)


   cursors=game.input.keyboard.createCursorKeys() 
   game.input.keyboard.createCursorKeys() 
   
   a = game.input.keyboard.addKey(Phaser.Keyboard.A)
   s = game.input.keyboard.addKey(Phaser.Keyboard.S)
   d = game.input.keyboard.addKey(Phaser.Keyboard.D)
   w = game.input.keyboard.addKey(Phaser.Keyboard.W)



   game.physics.arcade.enable(platform) 
   game.physics.arcade.enable(platform2) 
   game.physics.arcade.enable(platform3) 
   game.physics.arcade.enable(dude) 
   game.physics.arcade.enable(coin)


   platform.body.immovable = true
   platform2.body.immovable = true
   platform3.body.immovable = true
  
   dude.body.collideWorldBounds = true
   dude.body.gravity.y = 800
   dude.body.bounce.y = 0.1

  
}

function update() {

    let isMoving = false


    if (d.isDown) {
        dude.body.velocity.x = speed, dude.animations.play("duderight"), isMoving = true
    } 
    else if (a.isDown) {
        dude.body.velocity.x = -speed, dude.animations.play("dudeleft"), isMoving = true
    }
    else {dude.body.velocity.x = 0}


 
    if (isMoving==false) {
        dude.animations.play("stop")
    }



    game.physics.arcade.collide(dude,platform, jump)
    game.physics.arcade.collide(dude,platform2, jump)
    game.physics.arcade.collide(dude,platform3, jump)
    game.physics.arcade.overlap(dude,coin, collectCoin)

}






