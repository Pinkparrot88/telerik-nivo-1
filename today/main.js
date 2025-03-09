'use strict';

const game = new Phaser.Game(800, 800, Phaser.AUTO, 'game-canvas', { preload, create, update });

let ship, cursors, enemy, bullets, background
let a, w, s, d
let speed = 400

function preload() {
    game.load.image('space', 'background-space.png')
    game.load.image('bullet', 'bullet.png')
    game.load.image('enemy', 'ship (1).png')
    game.load.image('ship', 'ship (2).png')
}

function create() {
    
    background = game.add.tileSprite(0, 0, game.width, game.height, "space")
    background.width = game.world.width
    background.height = game.world.height
    

    
    ship = game.add.sprite(750, 790, 'ship')
    game.physics.arcade.enable(ship)
    ship.body.collideWorldBounds = true
    ship.anchor.setTo(0.5)
    ship.scale.setTo(0.8)

    
    enemy = game.add.sprite(500, 50, 'enemy')
    game.physics.arcade.enable(enemy)
    enemy.anchor.setTo(0.5)
    enemy.scale.setTo(0.8)
    enemy.body.velocity.x = 200

   
    bullets = game.add.group()
    bullets.enableBody = true
    bullets.physicsBodyType = Phaser.Physics.ARCADE

    
    cursors = game.input.keyboard.createCursorKeys()
    a = game.input.keyboard.addKey(Phaser.Keyboard.A)
    s = game.input.keyboard.addKey(Phaser.Keyboard.S)
    d = game.input.keyboard.addKey(Phaser.Keyboard.D)
    w = game.input.keyboard.addKey(Phaser.Keyboard.W)

   
    game.input.onDown.add(shootBullet)
}

function update() {

   // tilePosition.x += 4
   
    if (a.isDown) {
        ship.body.velocity.x = -speed;
    } else if (d.isDown) {
        ship.body.velocity.x = speed;
    } else {
        ship.body.velocity.x = 0;
    }

    
    if (enemy.x >= game.width - enemy.width / 2) {
        enemy.body.velocity.x = -200;
    } else if (enemy.x <= enemy.width / 2) {
        enemy.body.velocity.x = 200;
    }

    // Bullets and Enemy Collision
    game.physics.arcade.collide(bullets, enemy, kill_enemy);

    // Shooting with Mouse Hold
    if (game.input.activePointer.isDown) {
        shootBullet()
    }
}


function shootBullet() {
    // Create Bullet
    let bullet = bullets.create(ship.x, ship.y, 'bullet')
    game.physics.arcade.enable(bullet)
    bullet.anchor.set(0.5)
    bullet.scale.setTo(2)
    bullet.body.velocity.y = -500
}

function kill_enemy(_bullet, _enemy) {
    _enemy.destroy()
    _bullet.destroy()
  //  explosion(_enemy.x, _enemy.y) 
}
/*
function explosion(x, y) {
    let explosion = game.add.sprite(x, y, 'explosion') 
    explosion.anchor.set(0.5)
    explosion.animations.add('explode', [], 10, false).play()
   
}

*/

