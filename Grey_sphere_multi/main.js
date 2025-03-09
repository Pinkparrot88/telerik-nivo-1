'use strict'
const game = new Phaser.Game(1000, 1000, Phaser.AUTO, 'game-canvas', { preload, create, update })

function preload() {
    
    game.load.image("sphere", "sphere.png")
    game.load.image("spherepurple", "sphere-purple.png")
    game.load.image("spheregreen", "sphere-green.png")
    game.load.image("sphereyellow", "sphere-yellow.png")
    game.load.image("sphereblue", "sphere-blue (1).png")
    game.load.image("spheresad", "sphere-sad (1).png")
   
}

let spheres
let spheresad
let spheregreen

function create() {

    spheresad = game.add.group()



spheregreen = game.add.sprite(390, 600, "spheregreen")
spheregreen.scale.setTo(0.1)
    spheregreen.anchor.setTo(0)
    game.physics.arcade.enable(spheregreen) 
    spheregreen.body.collideWorldBounds = true
    spheregreen.body.velocity.setTo(500)
    spheregreen.body.bounce.setTo(1)
    



    spheres = game.add.group()
    
    spheres.create (0,800, "sphere")
    spheres.create (800,0, "sphereblue")
    spheres.create (0,0 , "sphereyellow")
    spheres.create (game.width/2,game.height/2 , "spherepurple")
  

    game.physics.arcade.enable(spheres) 
 
    spheres.setAll("body.collideWorldBounds", true)
    spheres.setAll("body.bounce.x", 1)
    spheres.setAll("body.bounce.y", 1)
    spheres.setAll("body.velocity.x", 500)
    spheres.setAll("body.velocity.y", 500)
    spheres.setAll("scale.x", 0.1)
    spheres.setAll("scale.y", 0.1)

}

function update() {

   game.physics.arcade.collide(spheres, spheregreen, grey)
   game.physics.arcade.collide(spheres)
   game.physics.arcade.collide(spheresad)
   game.physics.arcade.collide(spheres, spheresad)
   game.physics.arcade.collide(spheregreen, spheresad)

}


const grey = function(){

spheresad.create(spheregreen.x, spheregreen.y, 'spheresad')    

    game.physics.arcade.enable(spheresad) 
    spheresad.forEach(function(newSphere) {
        newSphere.scale.setTo(0.1)
        newSphere.body.collideWorldBounds = true
        newSphere.body.bounce.setTo(1)
        newSphere.body.velocity.setTo(500)
       
  
        
    })
}

