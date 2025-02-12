'use strict'
const game = new Phaser.Game(800, 800, Phaser.AUTO, 'game-canvas', { preload, create, update })

function preload() {
    game.load.image("sphere", "sphere.png")
    game.load.image("spherepurple", "sphere-purple.png")
    game.load.image("spheregreen", "sphere-green.png")
    game.load.image("sphereyellow", "sphere-yellow.png")
    game.load.image("sphereblue", "sphere-blue (1).png")
    game.load.image("spheresad", "sphere-sad (1).png")
    game.load.image("fish", "fish (0).png")
}


let spheres
let spheresad

const foo = function() { game.stage.backgroundColor = Phaser.Color.getRandomColor()
}


function create() {

    spheresad = game.add.group()

    spheresad.create(0,300, "spheresad")

    game.physics.arcade.enable(spheresad) 
 

    spheresad.setAll("body.collideWorldBounds", true)
    spheresad.setAll("body.bounce.x", 1)
    spheresad.setAll("body.bounce.y", 1)
    spheresad.setAll("body.velocity.x", 500)
    spheresad.setAll("body.velocity.y", 500)
    spheresad.setAll("scale.x", 0.2)
    spheresad.setAll("scale.y", 0.2)



    spheres = game.add.group()
    
    spheres.create (0,800, "sphere")
    spheres.create (800,0, "sphereblue")
    spheres.create (0,0 , "sphereyellow")
    spheres.create (800,800 , "spheregreen")
    spheres.create (game.width/2,game.height/2 , "spherepurple")
  

    game.physics.arcade.enable(spheres) 
 
    spheres.setAll("body.collideWorldBounds", true)
    spheres.setAll("body.bounce.x", 1)
    spheres.setAll("body.bounce.y", 1)
    spheres.setAll("body.velocity.x", 500)
    spheres.setAll("body.velocity.y", 500)
    spheres.setAll("scale.x", 0.2)
    spheres.setAll("scale.y", 0.2)

}

function update() {

   game.physics.arcade.collide(spheres)
   game.physics.arcade.collide(spheres,spheresad, foo)
    
}






















/*'use strict'
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

const foo = function() { game.stage.backgroundColor = Phaser.Color.getRandomColor()
}

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
  sphere.body.velocity.setTo(1000)
  sphere.body.bounce.setTo(1)
 
  spherepurple.body.collideWorldBounds = true
  spherepurple.body.velocity.setTo(1000)
  spherepurple.body.bounce.setTo(1)
 
  spheregreen.body.collideWorldBounds = true
  spheregreen.body.velocity.setTo(1000)
  spheregreen.body.bounce.setTo(1)
 
  sphereyellow.body.collideWorldBounds = true
  sphereyellow.body.velocity.setTo(1000)
  sphereyellow.body.bounce.setTo(1)

  sphereblue.body.collideWorldBounds = true
  sphereblue.body.velocity.setTo(1000)
  sphereblue.body.bounce.setTo(1)
  
 

}

function update() {
    game.physics.arcade.collide(sphere,spherepurple, foo)
    game.physics.arcade.collide(sphere,spheregreen, foo)
    game.physics.arcade.collide(spherepurple,spheregreen, foo)
    game.physics.arcade.collide(sphere,sphereyellow, foo)
    game.physics.arcade.collide(sphereyellow,spheregreen, foo)
    game.physics.arcade.collide(spherepurple,sphereyellow)
    game.physics.arcade.collide(sphere,sphereblue, foo)
    game.physics.arcade.collide(sphereblue,spheregreen, foo)
    game.physics.arcade.collide(sphereblue,sphereyellow, foo)
    game.physics.arcade.collide(sphereblue,spherepurple, foo)

}


*/