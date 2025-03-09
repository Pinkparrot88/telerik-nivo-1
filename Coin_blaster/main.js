'use strict'
const game = new Phaser.Game(1000, 800, Phaser.AUTO, 'game-canvas', { preload, create, update })

let dude, cursors, coin, bullets, background, coinX, coinY
let score = 0
let a,s,d,w
let money
let coin1, coin2, coin3

function preload() {
    game.load.image('background', '103709162_907902796391097_4194535646509153945_n.jpg')
    game.load.image('bullet', 'bullet.png')
    game.load.spritesheet('dude', 'Unarmed_Walk_full.png', 384/6, 256/4)
    game.load.spritesheet('coin', 'coin.png', 1198/5, 704/2)
}

function create() {

    game.world.setBounds(0 ,0, 2048, 1365)
    background = game.add.sprite(0, 0, "background")

    dude = game.add.sprite(game.width/2,game.height/2, "dude")
    dude.animations.add("dudedown", [0,1,2,3,4,5], 8, true)
    dude.animations.add("dudeup", [18,19,20,21,22,23], 8, true)   
    dude.animations.add("dudeleft", [6,7,8,9,10,11], 6, true) 
    dude.animations.add("duderight", [12,13,14,15,16,17], 6, true)
    dude.animations.add("stop", [0], 10, true)
    dude.scale.setTo(2)
    dude.anchor.set(0.5)
    game.camera.follow(dude) 

    game.physics.arcade.enable(dude) 
    dude.body.collideWorldBounds = true



   game.input.keyboard.createCursorKeys()

   a = game.input.keyboard.addKey(Phaser.Keyboard.A)
   s = game.input.keyboard.addKey(Phaser.Keyboard.S)
   d = game.input.keyboard.addKey(Phaser.Keyboard.D)
   w = game.input.keyboard.addKey(Phaser.Keyboard.W)


   
  

    bullets = game.add.group()
    bullets.enableBody = true

    game.input.onDown.add(shootBullet)

    moneta()
}

function update() {
    
    dude.body.velocity.x = 0
    dude.body.velocity.y = 0
    
    if (d.isDown) {dude.animations.play("duderight"), dude.body.velocity.x = 200}
    
    else if (a.isDown) { dude.animations.play("dudeleft"),dude.body.velocity.x = -200}
    
    
    if (w.isDown) { dude.animations.play("dudeup"), dude.body.velocity.y = -200}
    
    else if (s.isDown) { dude.animations.play("dudedown"), dude.body.velocity.y = 200}
    
    
    if (dude.body.velocity.x == 0 && dude.body.velocity.y == 0) {dude.animations.play("stop")}


    game.physics.arcade.collide(bullets, money, collectCoin)
}




function shootBullet() {
    let bullet = bullets.create(dude.x , dude.y, 'bullet')
    game.physics.arcade.enable(bullet)
    bullet.anchor.set(0.5)
    bullet.scale.setTo(2)
    game.physics.arcade.moveToPointer(bullet, 700)
}



const collectCoin = function(_bullet, _coin){     
    
    _coin.destroy() 
    let newCoin = money.create(game.world.randomX, game.world.randomY, "coin")
    newCoin.animations.add('spin', [], 10, true).play()
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
        allcoins.animations.add('spin',[],10,true)
        allcoins.animations.play('spin')
        allcoins.scale.setTo(0.2)
    })
    game.physics.arcade.enable(money)
}





