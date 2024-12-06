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
    broski.animations.add("broski", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63 ], 10, true).play()
    broski.scale.setTo(4)
    broski.anchor.setTo(0.5)
    broski.alpha = 1
    

    let electro = game.add.sprite(game.width,game.height, "electro");
    electro.animations.add("electro", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16 ], 15, true).play()
    electro.scale.setTo(2)
    electro.anchor.setTo(1)
    electro.alpha = 1
}

function update() {

}
