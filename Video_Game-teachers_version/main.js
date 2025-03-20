'use strict'
const game = new Phaser.Game(1000, 800, Phaser.AUTO, 'game-canvas', { preload, create, update })

let dude
let cursors
let plat,platmain
let coin,coin1,coin2,coin3,coin4

function preload() {
    game.load.image('background', 'desert.png')
    game.load.spritesheet('dude', 'dude-org.288x40.9x1.png',288/9,48/1)
    game.load.image('plat', 'platform.png')
    game.load.spritesheet('coin', 'coin.png',1198/5,704/2)
}

function create() {
   background()
   player()
   platform()
   moneta()
}

function update() {
    move()
    game.physics.arcade.collide(dude, plat,jump)
    game.physics.arcade.collide(dude, platmain, jump)
    game.physics.arcade.collide(dude, coin, collectCoin)
}




const background = function(){
    const background = game.add.sprite(0, 0, 'background')
    background.width=game.width
    background.height=game.height
}

const player = function(){
    dude = game.add.sprite(0, 0, 'dude')
    game.physics.arcade.enable(dude)
    dude.body.gravity.y=1000
    dude.body.collideWorldBounds=true
    cursors = game.input.keyboard.createCursorKeys()
    dude.animations.add('left', [0, 1, 2, 3,], 10, true)   
    dude.animations.add('right', [5, 6, 7, 8], 10, true)
    dude.animations.add('jump', [4], 10, true)
}

const platform = function(){
    plat = game.add.group()
    plat.create(100, 250, 'plat')
    plat.create(500, 470, 'plat')
    plat.setAll('scale.x', 0.5)
    plat.setAll('scale.y', 0.5)
    game.physics.arcade.enable(plat)
    plat.setAll('body.immovable', true)

    platmain = game.add.sprite(0,700,"plat")
    platmain.width=game.width
    platmain.height=100
    game.physics.arcade.enable(platmain)
    platmain.body.immovable=true
    
}


const moneta = function(){  
    coin1=game.add.sprite(200, 180, 'coin')
    coin2=game.add.sprite(400, 180, 'coin')
    coin3=game.add.sprite(600, 400, 'coin')
    coin4=game.add.sprite(800, 400, 'coin')
    coin = game.add.group()
    coin.add(coin1)
    coin.add(coin2)
    coin.add(coin3)
    coin.add(coin4)
    coin.forEach(function(allcoins){
        allcoins.animations.add('spin',[],10,true)
        allcoins.animations.play('spin')
        allcoins.scale.setTo(0.2)
    })
    game.physics.arcade.enable(coin)
}


const move = function(){
    if (cursors.left.isDown) {
        dude.body.velocity.x = -300
        dude.animations.play('left')
    } else if (cursors.right.isDown) {
        dude.body.velocity.x = 300
        dude.animations.play('right')
    } else {
        dude.body.velocity.x = 0
        dude.animations.stop()
        dude.frame = 4
    }

}

const jump = function(){
    if (cursors.up.isDown) {
        dude.body.velocity.y = -750
        dude.animations.play('jump')
    }
}



const collectCoin = function(_,_coins){
    _coins.kill()
}




   

   