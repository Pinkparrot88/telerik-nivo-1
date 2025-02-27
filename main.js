'use strict'
const game = new Phaser.Game(800, 800, Phaser.AUTO, 'game-canvas', { preload, create, update })

function preload() {
    
    game.load.image("sphere", "sphere.png")
    game.load.image("spherepurple", "sphere-purple.png")
    game.load.image("spheregreen", "sphere-green.png")
    game.load.image("sphereyellow", "sphere-yellow.png")
    game.load.image("sphereblue", "sphere-blue (1).png")
   
}

let sphere
let spherepurple
let spheregreen
let sphereyellow
let sphereblue

function create() {

    sphere = game.add.sprite(800,800, "sphere")
    sphere.scale.setTo(0.3)
    sphere.anchor.setTo(0)

    spherepurple = game.add.sprite(0,0, "spherepurple")
    spherepurple.scale.setTo(0.3)
    spherepurple.anchor.setTo(0)

    spheregreen = game.add.sprite(800,0, "spheregreen")
    spheregreen.scale.setTo(0.3)
    spheregreen.anchor.setTo(0)
    
    sphereyellow = game.add.sprite(0,800, "sphere")
    sphereyellow.scale.setTo(0.3)
    sphereyellow.anchor.setTo(0)

    sphereblue = game.add.sprite(game.width/2,game.height/2, "sphereblue")
    sphereblue.scale.setTo(0.3)
    sphereblue.anchor.setTo(0)


    game.physics.arcade.enable(sphere) 
    game.physics.arcade.enable(spherepurple) 
    game.physics.arcade.enable(spheregreen) 
    game.physics.arcade.enable(sphereyellow) 
    game.physics.arcade.enable(sphereblue) 


  sphere.body.collideWorldBounds = true
  sphere.body.velocity.setTo(500)
  sphere.body.bounce.setTo(1)
 
  spherepurple.body.collideWorldBounds = true
  spherepurple.body.velocity.setTo(500)
  spherepurple.body.bounce.setTo(1)
 
  spheregreen.body.collideWorldBounds = true
  spheregreen.body.velocity.setTo(500)
  spheregreen.body.bounce.setTo(1)
 
  sphereyellow.body.collideWorldBounds = true
  sphereyellow.body.velocity.setTo(500)
  sphereyellow.body.bounce.setTo(1)

  sphereblue.body.collideWorldBounds = true
  sphereblue.body.velocity.setTo(500)
  sphereblue.body.bounce.setTo(1)
  
 

}

function update() {
    game.physics.arcade.collide(sphere,spherepurple)
    game.physics.arcade.collide(sphere,spheregreen)
    game.physics.arcade.collide(spherepurple,spheregreen)
    game.physics.arcade.collide(sphere,sphereyellow)
    game.physics.arcade.collide(sphereyellow,spheregreen)
    game.physics.arcade.collide(spherepurple,sphereyellow)
    game.physics.arcade.collide(sphere,sphereblue)
    game.physics.arcade.collide(sphereblue,spheregreen)
    game.physics.arcade.collide(sphereblue,sphereyellow)
    game.physics.arcade.collide(sphereblue,spherepurple)

}

