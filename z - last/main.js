'use strict'
const game = new Phaser.Game(1000, 800, Phaser.AUTO, 'game-canvas', { preload, create, update })

function preload() {

    game.load.tilemap("tilemap", "Tile_Map.tmj", null, Phaser.Tilemap.TILED_JSON)
    game.load.image("tileset", "tileset.png")
    game.load.spritesheet("fox", "Fox Sprite Sheet.png", 448 / 14, 224 / 7)


}

let map
let collision_layer
let through_back
let through_infront
let mostback_trees
let finalback_trees
let hidden_pathway
let fox
let a, s, w, d

let speed = 500


function create() {

    map = game.add.tilemap("tilemap")
    map.addTilesetImage("tileset", "tileset")


    collision_layer = map.createLayer(0)
    through_back = map.createLayer(1)
    through_infront = map.createLayer(2)
    mostback_trees = map.createLayer(3)
    finalback_trees = map.createLayer(4)
    hidden_pathway = map.createLayer(5)


    collision_layer.scale.set(5, 5)
    through_back.scale.set(5, 5)
    through_infront.scale.set(5, 5)
    mostback_trees.scale.set(5, 5)
    finalback_trees.scale.set(5, 5)
    hidden_pathway.scale.set(5, 5)

    collision_layer.resizeWorld()
    through_back.resizeWorld()
    through_infront.resizeWorld()
    mostback_trees.resizeWorld()
    finalback_trees.resizeWorld()
    hidden_pathway.resizeWorld()

    game.world.setBounds(0, 0, 12000, 800)




    fox = game.add.sprite(game.width / 2, game.height / 2, "fox")

    fox.animations.add("foxjump", [44, 45, 46, 47, 48], 6, false)
    fox.animations.add("foxwalk", [42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52], 20, true)
    fox.animations.add("still", [0, 1, 2, 3], 6, true)
    fox.scale.setTo(5)
    fox.anchor.set(0.5)
    game.camera.follow(fox)

    game.physics.arcade.enable(fox)
    fox.body.collideWorldBounds = true
    fox.body.gravity.y = 800




    game.input.keyboard.createCursorKeys()

    a = game.input.keyboard.addKey(Phaser.Keyboard.A)
    s = game.input.keyboard.addKey(Phaser.Keyboard.S)
    d = game.input.keyboard.addKey(Phaser.Keyboard.D)
    w = game.input.keyboard.addKey(Phaser.Keyboard.W)

    map.setCollisionByExclusion([])
  


}

function update() {

    let isMoving = false

    if (w.isDown) { fox.body.velocity.y = -500, fox.animations.play("foxjump") }

    else if (d.isDown) {
        fox.body.velocity.x = speed, fox.scale.x = 5, fox.animations.play("foxwalk"), isMoving = true
    }

    else if (a.isDown) {
        fox.scale.x = -5, fox.body.velocity.x = -speed, fox.animations.play("foxwalk"), isMoving = true

    }
    else { fox.body.velocity.x = 0 }

    if (isMoving == false) {
        fox.animations.play("still")
    }


    let hitGround = game.physics.arcade.collide(fox, collision_layer)
    console.log("Colliding with ground:", hitGround)

}
const jump = function () {       //this is where I make the function that helps my character jump
    if (w.isDown) { fox.body.velocity.y = -700, fox.animations.play("foxjump") }
}
