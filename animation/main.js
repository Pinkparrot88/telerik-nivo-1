'use strict'

const game = new Phaser.Game(800, 900, Phaser.AUTO, 'game-canvas', { preload, create, update })

function preload() {
    game.load.image("sky", "sky.png")
    game.load.spritesheet("broski", "walking dude.jpg", 473 / 8, 869 / 8)
    game.load.spritesheet("electro", "ball.512x512.4x4.png", 512 / 4, 512 / 4)
}

function create() {

    const sky = game.add.sprite(game.width, game.height, "sky")
    sky.scale.setTo(0.6)
    sky.anchor.setTo(1.0,1)

    let broski = game.add.sprite(game.width/2,game.height/2, "broski");
    broski.animations.add("broski", [], 10, true).play()
    broski.scale.setTo(4)
    broski.anchor.setTo(0.5)
    broski.alpha = 1
    

    let electro = game.add.sprite(game.width,game.height, "electro");
    electro.animations.add("electro", [], 15, true).play()
    electro.scale.setTo(2)
    electro.anchor.setTo(1)
    electro.alpha = 1
}

function update() {

}