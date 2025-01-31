'use strict'
const game = new Phaser.Game(800, 800, Phaser.AUTO, 'game-canvas', { preload, create, update })

function preload() {
    
    game.load.image("sphere", "sphere.png")
    game.load.image("spherepurple", "sphere-purple.png")
    game.load.image("spheregreen", "sphere-green.png")
    game.load.image("sphereyellow", "sphere-yellow.png")
    game.load.image("sphereblue", "sphere-blue (1).png")
   
}

let spheres

function create() {
    
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
    spheres.setAll("body.velocity.x", 1000)
    spheres.setAll("body.velocity.y", 1000)
    spheres.setAll("scale.x", 0.2)
    spheres.setAll("scale.y", 0.2)

}

function update() {

   game.physics.arcade.collide(spheres)
    
}

