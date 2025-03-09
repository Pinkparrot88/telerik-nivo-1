'use strict'
const game = new Phaser.Game(1200, 400, Phaser.AUTO, 'game-canvas', { preload, create, update })

function preload() {
    
    game.load.spritesheet("dude", "dude.png", 288 / 9, 48 / 1)
    game.load.image("desert", "desert.png")
    game.load.image("spherepurple", "sphere-purple.png")

}

let dude
let cursors
let a,s,d,w
let speed = 600
let desert
let sphere
let wowcircle
let score = 0


function create() {


    desert = game.add.sprite(0, 0, 'desert')
    desert.width=game.width
    desert.height=game.height

    dude = game.add.sprite(100, 300, "dude")
    dude.animations.add("dudeup", [1,2], 6, true)   
    dude.animations.add("dudeleft", [0,1,2,3], 4, true) 
    dude.animations.add("duderight", [5,6,7,8], 4, true)
    dude.animations.add("stop", [4], 1, true)
    dude.scale.setTo(1)
    dude.anchor.setTo(0)
    dude.alpha = 1

    sphere = game.add.group()

   createsphere()

    cursors=game.input.keyboard.createCursorKeys() 
    game.input.keyboard.createCursorKeys() 
    
    a = game.input.keyboard.addKey(Phaser.Keyboard.A)
    s = game.input.keyboard.addKey(Phaser.Keyboard.S)
    d = game.input.keyboard.addKey(Phaser.Keyboard.D)
    w = game.input.keyboard.addKey(Phaser.Keyboard.W)



   game.physics.arcade.enable(dude) 


  dude.body.collideWorldBounds = true
  dude.body.gravity.y = 1000
  dude.body.bounce.y = 0.1



}

function update() {

movement()
  game.physics.arcade.collide(dude, sphere, spherebye)

}



const createsphere = function() {

if (sphere == false){
    sphere = game.add.group()
}


const wowcircle = sphere.create(game.world.randomX, 100, 'spherepurple')
    
wowcircle.scale.setTo(0.1)
wowcircle.anchor.setTo(0.5)
game.physics.arcade.enable(wowcircle) 
  wowcircle.body.collideWorldBounds = true
  wowcircle.body.gravity.y = 1000
  wowcircle.body.bounce.y = 0.1
}



const movement = function(){

let isMoving = false


if (d.isDown) {
    dude.body.velocity.x = speed, dude.animations.play("duderight"), isMoving = true
} 
else if (a.isDown) {
    dude.body.velocity.x = -speed, dude.animations.play("dudeleft"), isMoving = true
}
else {dude.body.velocity.x = 0}

if (w.isDown){
    dude.body.velocity.y = -500
}


if (isMoving==false) {
    dude.animations.play("stop")
}

}

const spherebye = function (_sprite, destroyedsphere){
    destroyedsphere.destroy()
    createsphere()
    console.log ( "Your score is " + ++score)
}