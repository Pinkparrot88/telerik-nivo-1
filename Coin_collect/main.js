'use strict'
const game = new Phaser.Game(800, 800, Phaser.AUTO, 'game-canvas', { preload, create, update })

function preload() {
    
    game.load.spritesheet("dude", "Unarmed_Walk_full.png", 384 / 6, 256 / 4)
    game.load.image("background", "103709162_907902796391097_4194535646509153945_n.jpg")
    game.load.spritesheet("coin", "coin.png", 1198 / 5, 704 / 2)

}


let dude
let a,w,s,d
let background
let coin
let coin1
let coin2
let coin3
let money
let score = 0



function create() {
   

    game.world.setBounds(0 ,0, 2048, 1365)
    background = game.add.sprite(0, 0, "background")
    //if you want-- game.world.setBounds(0 ,0, 2048, 1365)-- with different numbers but same image, do this for example;
    /*
    game.world.setBounds(0 ,0, 2000, 2000)
    background.width = world.game.width
    background.height = world.game.height
    */
   

moneta ()



    dude = game.add.sprite(game.width/2,game.height/2, "dude")
    dude.animations.add("dudedown", [0,1,2,3,4,5], 8, true)
    dude.animations.add("dudeup", [18,19,20,21,22,23], 8, true)   
    dude.animations.add("dudeleft", [6,7,8,9,10,11], 6, true) 
    dude.animations.add("duderight", [12,13,14,15,16,17], 6, true)
    dude.animations.add("stop", [0], 10, true)
    dude.scale.setTo(2)
    dude.anchor.set(0.5)
    //dude.fixedToCamera = true -----------> this is so the character follows the camera. not the camera following the character
    
   
    game.camera.follow(dude) //this is so tha camera follows the character

   game.physics.arcade.enable(dude) 
  dude.body.collideWorldBounds = true

   game.input.keyboard.createCursorKeys()
   
  

   a = game.input.keyboard.addKey(Phaser.Keyboard.A)
   s = game.input.keyboard.addKey(Phaser.Keyboard.S)
   d = game.input.keyboard.addKey(Phaser.Keyboard.D)
   w = game.input.keyboard.addKey(Phaser.Keyboard.W)

}

function update() {
/*
    let isMoving = true

if (d.isDown){
    dude.animations.play("duderight"), game.camera.x += 4, isMoving = false
}
else if(a.isDown){
    dude.animations.play("dudeleft"), game.camera.x -= 4, isMoving = false
}

if (w.isDown){
    dude.animations.play("dudeup"), game.camera.y -= 4, isMoving = false
}
else if (s.isDown){
    dude.animations.play("dudedown"), game.camera.y +=4, isMoving = false
}
  

if (isMoving==true) {
    dude.animations.play("stop")
}  
*/

dude.body.velocity.x = 0
dude.body.velocity.y = 0

if (d.isDown) {dude.animations.play("duderight"), dude.body.velocity.x = 200}

else if (a.isDown) { dude.animations.play("dudeleft"),dude.body.velocity.x = -200}


if (w.isDown) { dude.animations.play("dudeup"), dude.body.velocity.y = -200}

else if (s.isDown) { dude.animations.play("dudedown"), dude.body.velocity.y = 200}


if (dude.body.velocity.x == 0 && dude.body.velocity.y == 0) {dude.animations.play("stop")}

game.physics.arcade.collide(dude,money, collectCoin)


}



const collectCoin = function(dude, coin){     
    coin.destroy() 

    let newCoin = money.create(game.world.randomX, game.world.randomY, "coin")
    newCoin.animations.add('spin', [], 20, true)
    newCoin.animations.play('spin')
    newCoin.scale.setTo(0.2)
    game.physics.arcade.enable(newCoin)

    console.log("You've collected " + ++score + " coins")
}




const moneta = function(){
    coin = game.add.sprite (1100, 600, "coin")
    coin1 = game.add.sprite (1430, 900, "coin")
    coin2 = game.add.sprite (700, 1000, "coin")
    coin3 = game.add.sprite (1400, 500, "coin")
    money = game.add.group()
    money.add(coin)
    money.add(coin1)
    money.add(coin2)
    money.add(coin3)
    money.forEach(function(allcoins){
        allcoins.animations.add('spin',[],20,true)
        allcoins.animations.play('spin')
        allcoins.scale.setTo(0.2)
    })
    game.physics.arcade.enable(money)
}


